import Image from "next/image";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:block shadow-navBar bg-white px-3 pr-12 py-4">
      <div className="mx-auto ml-80 flex justify-between items-center">
        <h1>
          <Image
            width={117}
            height={58}
            alt="logo"
            src="/images/CompanyLogo.png"
          />
        </h1>
        <div className="flex items-center">
          <Image
            width={30}
            height={28}
            alt="icon"
            className="mr-6"
            src="/images/notification.svg"
          />
          <div className="ml-6 flex items-center ">
            <div className="flex items-center">
              <Image
                width={56}
                height={56}
                alt="woman"
                // className="w-[56px] h-[56px] rounded-[50%]"
                src="/images/Woman2.svg"
              />
              <p className="ml-4 mr-6">
                <span className="text-[#2B2B2B] font-bold my-2">
                  Kalu Abasiama
                </span>
                <span className="block text-sm font-medium text-[#898989]">
                  Admin
                </span>
              </p>
            </div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10.59 7.01171L14.83 11.3017C14.9237 11.3947 14.9981 11.5053 15.0489 11.6271C15.0997 11.749 15.1258 11.8797 15.1258 12.0117C15.1258 12.1437 15.0997 12.2744 15.0489 12.3963C14.9981 12.5181 14.9237 12.6287 14.83 12.7217L10.59 16.9617C10.497 17.0554 10.3864 17.1298 10.2646 17.1806C10.1427 17.2314 10.012 17.2575 9.88 17.2575C9.74798 17.2575 9.61728 17.2314 9.49542 17.1806C9.37356 17.1298 9.26296 17.0554 9.17 16.9617C8.98374 16.7743 8.8792 16.5209 8.8792 16.2567C8.8792 15.9925 8.98374 15.7391 9.17 15.5517L12.71 12.0117L9.17 8.47171C8.98525 8.28545 8.8811 8.03405 8.88 7.77171C8.87923 7.6401 8.90446 7.50964 8.95422 7.3878C9.00399 7.26596 9.07731 7.15515 9.17 7.06171C9.25961 6.96463 9.36758 6.88628 9.48765 6.83117C9.60773 6.77607 9.73754 6.7453 9.86957 6.74065C10.0016 6.736 10.1333 6.75756 10.2569 6.80409C10.3806 6.85061 10.4938 6.92118 10.59 7.01171Z"
                  fill="#898989"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
