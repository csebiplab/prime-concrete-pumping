import Image from "next/image";

const NewUpperHeader = () => {
  return (
    <nav className="container py-2 bg-primary hidden md:block">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <h5 className="text-sm text-white">
            Best Concrete Plumbing Company in Toronto
          </h5>
        </div>

        <div className="flex justify-center gap-x-4 lg:gap-x-7">
          <a
            href={`mailto:primeconcretetoronto@gmail.com`}
            className="text-sm hidden lg:flex gap-x-[10px] items-center rounded-md"
          >
            <Image
              src="/assets/icons/email.png"
              width={22}
              height={17}
              className="w-[22px] h-[17px]"
              alt="mail"
            />
            <span className="text-white">primeconcretetoronto@gmail.com</span>
          </a>
          <div className="flex items-center gap-x-4 md:gap-x-6 xl:gap-x-9">
            <Image
              src="/assets/socials/facebook.png"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
              alt="facebook"
            />
            <Image
              src="/assets/socials/x.png"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
              alt="x"
            />
            <Image
              src="/assets/socials/insta.png"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
              alt="instagram"
            />
            <Image
              src="/assets/socials/in.png"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
              alt="linkedin"
            />
            <Image
              src="/assets/socials/google.png"
              width={20}
              height={20}
              className="w-[20px] h-[20px]"
              alt="google"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewUpperHeader;
