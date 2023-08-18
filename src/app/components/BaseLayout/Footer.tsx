import styles from "@/app/styles/Footer.module.css";
import Image from "next/image";
import Instagram from "../svgs/Instagram";
import Twitter from "../svgs/Twitter";
import Linkedin from "../svgs/Linkedin";
import Facebook from "../svgs/Facebook";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className="flex justify-between lg:flex-row flex-col py-12 xl:py-20 lg:pl-24 xl:px-28 px-6 3xl:max-w-[1740px]  3xl:px-0  3xl:mx-auto ">
        <div>
          <h4>
            <Image
              alt="logo"
              width={122}
              height={32}
              src="/images/Footer.svg"
            />
          </h4>
          <div className="text-sm lg:my-8 xl:my-9 my-4 tracking-[0.25px] text-eaziDark ">
            <p>Copyright © 2023 Eazipay.</p>
            <p className="mt-2">All rights reserved</p>
          </div>
          <ul className={styles.social_links_container}>
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Facebook />
            </li>
          </ul>
        </div>
        <div>
          <h4>Product</h4>
          <ul>
            <li>Indidual</li>
            <li>Businesses</li>
            <li>Request Demo</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Customer Stories</li>
          </ul>
        </div>
        <div>
          <h4>Contact us</h4>
          <ul>
            <li>eazipay@gmail.com</li>
            <li>+234 816 878 9518</li>
          </ul>
          <div
            className={`${styles.send_container} max-w-[270px] flex rounded-2xl mt-6 py-2 px-3 bg-[#F2F1F1]`}
          >
            <input
              type="email"
              name="email"
              id="email"
              className="text-sm tracking-[0.25px] text-eaziDark placeholder:text-eaziDark"
              placeholder="Your email address"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
