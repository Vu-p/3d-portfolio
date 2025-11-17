import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Visit my blogs</a>
        </div>
        <div className="socials">
          {socialImgs.map((social) => (
            <a
              className="icon"
              key={social.url}
              href={social.url}
              target="_blank"
            >
              <img src={social.imgPath} alt={social.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Lãng. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
