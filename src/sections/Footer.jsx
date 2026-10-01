import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p></p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noreferrer"
              className={socialImg.imgPath ? "icon" : "icon github-button"}
              aria-label={socialImg.name}
            >
              {socialImg.imgPath ? (
                <img src={socialImg.imgPath} alt={socialImg.name} />
              ) : (
                <span>{socialImg.label}</span>
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Daniel Hangyi Lee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
