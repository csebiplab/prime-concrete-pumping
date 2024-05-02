import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
// import { Roboto_Slab } from "next/font/google";
import "../globals.css"

import localFont from 'next/font/local'

// import "../../../public/Fontin-Regular.woff"

// Font files can be colocated inside of `app`
const Fontin = localFont({
  src: '../../../public/Fontin-Regular.woff',
  display: 'swap',
})

// const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Toronto Concrete Pumping Company | Prime Concrete Pumping in Toronto",
  description: "Prime Concrete Pumping Toronto is your premier partner for all your concrete pump trucks & concrete pumping needs in Toronto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Fontin.className}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
