import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
// import { Roboto_Slab } from "next/font/google";
import "../globals.css"

import localFont from 'next/font/local'
import { GoogleAnalytics } from '@next/third-parties/google'

// import "../../../public/Fontin-Regular.woff"

// Font files can be colocated inside of `app`
const Fontin = localFont({
  src: '../../../public/Fontin-Regular.woff',
  display: 'swap',
})

// const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export async function generateMetadata() {
  try {
    const [metaDataResponse, googleVerificationResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verificationUrl`),
    ]);

    if (!metaDataResponse.ok || !googleVerificationResponse.ok) {
      console.error('Network response was not ok');
    }

    const metaData = await metaDataResponse.json();
    const googleVerification = await googleVerificationResponse.json();

    const googleConsoleKey = extractGoogleConsoleKey(googleVerification);

    const {
      title = "Toronto Concrete Pumping Company | Prime Concrete Pumping in Toronto",
      description = "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",
      keywords = "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",

    } = metaData?.homeRouteAllMetaData?.[0] || {};

    return {
      title,
      description,
      keywords,
      verification: {
        google: googleConsoleKey,
      }
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return {
      title: "Toronto Concrete Pumping Company | Prime Concrete Pumping in Toronto",
      description: "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",
      keywords: "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",
    };
  }
}

function extractGoogleConsoleKey(googleVerification) {
  try {
    const { verificationUrl } = googleVerification ?? {};
    if (!verificationUrl || !verificationUrl[0]?.title) return "";
    const metaTagContent = verificationUrl[0].title;
    const consoleKey = metaTagContent.split("=").pop().slice(1, -4);
    return consoleKey;
  } catch (error) {
    console.error('Error extracting Google console key:', error);
    return "";
  }
}


// export const metadata = {
//   title: "Toronto Concrete Pumping Company | Prime Concrete Pumping in Toronto",
//   description: "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",
//   keywords: "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Fontin.className}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="AW-16550180504" />
    </html>
  );
}
