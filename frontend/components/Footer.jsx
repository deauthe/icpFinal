import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col`}>
    <div className={`w-[80%] border-t-[2px] border-t-[#3F3E45] py-16`}>
      <div
        className={`${styles.flexCenter} md:flex-row justify-between w-full flex-col mb-2`}
      >
        <div className="flex-[1] min-h-[230px] flex flex-col justify-between items-center md:items-start">
          <img
            src={logo}
            alt="Logo"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            The Leading NFT Marketplace On Ethereum Home To The Next Generation
            Of Digital Creators.
          </p>
          <div className="w-[100%] ss:w-[80%] md:w-[60%] flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[30px] h-[30px] object-contain cursor-pointer  ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-evenly flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[20px] ss:text-[27px] ss:leading-[27px] leading-[24px] text-white mb-4">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[17px] ss:text-[18px] leading-[20px] ss:leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-start items-center md:flex-row flex-col pt-6 ">
        <p className="font-poppins font-normal text-center text-[17px] text-white">
          Ⓒ 2023 Solana. All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
