"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewUpperHeader from "./NewUpperHeader";
import "./NewHeader.css";

// our services nav menu
const our_service_menu_items = {
  interior: [
    {
      title: "Best Concrete Pumping Services in Barrie",
      route: "/best-concrete-pumping-services-in-barrie",
    },
  ],
};

function OurServiceManu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <div
            className="font-medium text-lg"
            aria-expanded={isMenuOpen} // Dynamically set the value based on the menu state
            aria-haspopup="true" // Indicating this element triggers a popup
            id=":RrarjtaH2:"
            role="button"
          >
            <ListItem
              className="flex items-center text-base 2xl:text-[17px] text-primary-50 font-normal px-1 lg:px-4 xl:px-5 2xl:px-6 -mt-[9px]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Our Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
          <div className="container grid grid-cols-3 gap-y-2">
            <div>
              <h3 className="mb-1 text-primary-600 font-semibold">Interior</h3>
              <ul>
                <li>{renderItems(our_service_menu_items.interior)}</li>
              </ul>
            </div>
          </div>
        </MenuList>

        {isMobileMenuOpen ? (
          <>
            <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>
                <h4 className="text-primary-600 mb-1 font-semibold">
                  Interior
                </h4>
                <ul>
                  <li>{renderItems(our_service_menu_items.interior)}</li>
                </ul>
                <hr className="my-1" />
              </Collapse>
            </div>
          </>
        ) : (
          ""
        )}
      </Menu>
    </>
  );
}

// our services nav list end
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row md:items-center border-0 outline-none">
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-base 2xl:text-[17px] text-primary-50 font-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
          About
        </ListItem>
      </Typography>

      <div className="mt-[6px]">
        <OurServiceManu />
      </div>

      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-base 2xl:text-[17px] text-primary-50 font-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
          Customer Reviews
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-base 2xl:text-[17px] text-primary-50 font-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
          Blogs
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-base 2xl:text-[17px] text-primary-50 font-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
          Projects
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-base 2xl:text-[17px] text-primary-50 font-normal px-1 lg:px-4 xl:px-5 2xl:px-6">
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export function NewHeader() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <NewUpperHeader />
      <header className="sticky top-0 z-50 ">
        <div className="custom-container main__nav">
          <Navbar className="container rounded-none py-2 shadow-none max-w-full">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Link href="/" aria-label="Home">
                <Image
                  src="/assets/images/header_nav_logo.png"
                  alt="nav logo"
                  width={96}
                  height={73}
                  className="w-full"
                />
                <span className="sr-only">Home</span>
              </Link>
              <div className="hidden lg:block">
                <NavList />
              </div>

              <div className="flex gap-x-4">
                <div className="flex items-center gap-x-6 md:gap-x-7 lg:gap-x-8 pr-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/images/phone-call.png"
                      width={24}
                      height={24}
                      alt="Phone us"
                      className="w-[24px] h-[24px]"
                    />
                    <a
                      href="tel:647-449-9512"
                      className="text-primary flex flex-col hover:no-underline link"
                    >
                      <span className="text-base">Quick Contact</span>
                      <span className="font-bold number">647-449-9512</span>
                    </a>
                  </div>
                </div>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden !pl-4"
                  aria-label="Menu"
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Image
                      src="/assets/images/hamburger.png"
                      width={22}
                      height={22}
                      alt="Menu"
                      className="w-[22px] h-[22px]"
                    />
                  )}
                  <span className="sr-only">Menu</span>
                </IconButton>
              </div>
            </div>
          </Navbar>
        </div>
      </header>
      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000]"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="paragraph" color="blue-gray">
            Prime Concrete Pumping
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            className="!pl-4"
            aria-label="Menu"
            onClick={() => setOpenNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Menu</span>
          </IconButton>
        </div>
        <NavList />
      </Drawer>
    </>
  );
}
