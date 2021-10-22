import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>© 2021 Copyright: MarcKit</p>
        <span>
          <a href="https://www.facebook.com/marckitdev">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com/marckitdev">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/marckit">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://gitlab.com/marckit">
            <FontAwesomeIcon icon={faGitlab} />
          </a>
          <a href="https://linkedin.com/in/marckit/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
