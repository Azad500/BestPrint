import { Link, useLocation } from "react-router-dom";
import Informations from "../../../Informations";
import styles from "./Navbar.module.scss";
export default function NavbarInSameParts({}) {
  const location = useLocation();
  const portfolio = location.pathname.includes("/portfolio");
  const services = location.pathname.includes("/services");
  const companies = location.pathname.includes("/companies");
  const contact = location.pathname.includes("/contact");
  return (
    <header>
      <div className={styles.loginPart}>
        <ul className={styles.contactInformations}>
          <li className={styles.phoneElement}>
            <figure>
              <img src={Informations.BlackPhone} alt="Phone Image" />
            </figure>
            <a href="tel:+994 (70)xxx-xx-xx">+994 (70)xxx-xx-xx</a>
          </li>
          <li className={styles.mailElement}>
            <figure>
              <img src={Informations.BlackMail} alt="Mail Image" />
            </figure>
            <a target="_blank" href="mailto:bestprint@gmail.com">
              bestprint@gmail.com
            </a>
          </li>
          <li className={styles.sosialAndLangElements}>
            <ul className={styles.sosialNetworkElement}>
              <li>
                <a target="_blank" href="https://www.instagram.com/">
                  <img src={Informations.BlackInstagram} alt="Instagram Logo" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.facebook.com/">
                  <img src={Informations.BlackFacebook} alt="Facebook Logo" />
                </a>
              </li>
            </ul>
            <div className={styles.langElement}>
              <p>AZE</p>
              <div className={styles.arrowElement}>
                <img src={Informations.BlackDownArrow} alt="Down Arrow" />
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.userElement}>
          <p>Daxil ol/Qeydiyyat</p>
          <div className={styles.userImage}>
            <img src={Informations.UserImage} alt="User Image" />
          </div>
        </div>
      </div>
      <nav>
        <div className={styles.logoElement}>
          <img src={Informations.Logo} alt="Logo Image" />
        </div>
        <ul className={styles.searchAndMenuElements}>
          <li>
            <img src={Informations.Search} alt="Search Image" />
          </li>
          <li>
            <img src={Informations.HamburgerBar} alt="HamburgerBar Image" />
          </li>
        </ul>
        <ul className={styles.menuList}>
          <li>
            <a href="#">Ana Səhifə</a>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/services"}>Xidmətlərimiz</Link>
          </li>
          <li>
            <Link to={"/companies"}>Kompaniyalar</Link>
          </li>
          <li>
            <Link to={"/contact"}>Əlaqə</Link>
          </li>
        </ul>
        <div className={styles.searchAndOrderElements}>
          <div className={styles.searchInput}>
            <input type="text" name="searchPart" placeholder="Axtarış" />
            <div className={styles.searchImageInInput}>
              <img src={Informations.Search} alt="Search Image In Input" />
            </div>
          </div>
          <a className={styles.orderButton} href="#">
            Sifariş et
          </a>
        </div>
      </nav>
      <div className={styles.imageElement}>
        <div className={styles.skyElement}>
          <img src={Informations.SkyImage} alt="Sky Image" />
        </div>
        <div className={styles.cloudElement}>
          <img src={Informations.CloudImage} alt="Cloud Image" />
          <img src={Informations.CloudImage} alt="Cloud Image" />
        </div>
        <div className={styles.textElement}>
          <p>Ana Səhifə </p>
          {portfolio && !services && !companies && !contact && (
            <p> / Portfolio</p>
          )}
          {services && !portfolio && !companies && !contact && (
            <p> / Xidmətlərimiz</p>
          )}
          {companies && !portfolio && !services && !contact && (
            <p> / Kompaniyalar</p>
          )}
          {contact && !portfolio && !services && !companies && <p> / Əlaqə</p>}
        </div>
      </div>
    </header>
  );
}
