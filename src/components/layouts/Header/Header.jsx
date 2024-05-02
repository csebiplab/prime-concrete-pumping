import Image from "next/image";
import UpperNavbar from "./UpperNavbar";
import "./Header.css";
import Link from "next/link";
import { UtilsModule } from "@/utils/nav-menus";

const Header = () => {
  return (
    <header className="custom-container sticky top-0 md:static !z-[100000]">
      {/* Social small nav */}
      <UpperNavbar />

      {/* Main navbar */}
      <nav className="container py-1 main__header ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logos/prime-concrete.png"
              width={96}
              height={73}
              className="w-[96px] h-[73px]"
              alt="Prime Concerete Pumping"
            />
          </Link>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-3 md:gap-x-5 lg:gap-x-10 xl:gap-x-[50px]">
              {UtilsModule.navMenus.map(
                ({ mainMenu, url, subMenu, svg = null }, index) => (
                  <li key={index}>
                    <Link
                      href={url}
                      className={`${
                        svg ? "flex items-center gap-x-1" : ""
                      } text-dark-100 font-normal !text-base`}
                    >
                      {mainMenu} {svg}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/phone-call.png"
                width={24}
                height={24}
                alt="Phone us"
                className="w-[24px] h-[24px]"
              />
              <a
                href="tel:+1 (646) 683-4612"
                className="text-primary flex flex-col hover:no-underline link"
              >
                <span className="text-base">Quick Contact</span>
                <span className="font-bold number">647-449-9512</span>
              </a>
            </div>
            <div className="block lg:hidden">
              <Image
                src="/assets/images/hamburger.png"
                width={22}
                height={22}
                alt="Menu"
                className="w-[22px] h-[22px]"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
