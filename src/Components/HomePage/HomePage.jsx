import Informations from "../../Informations";
import AutoSlider from "./AutoSlider";
import styles from "./HomePage.module.scss";
import PortfolioInHomePage from "./PortfolioInHomePage";
import ServicesInHomePage from "./ServicesInHomePage";

export default function HomePage() {
  return (
    <>
      <div className={styles.homePagePart}>
        <ServicesInHomePage />
      </div>
      <div className={styles.homePageContainer}>
        <div className={styles.triangleImage1}>
          <img src={Informations.TriangleHomePage} alt="Triangle Image 1" />
        </div>
        <PortfolioInHomePage />
        <AutoSlider />
        <div className={styles.triangleImage2}>
          <img src={Informations.TriangleHomePage} alt="Triangle Image 2" />
        </div>
      </div>
    </>
  );
}
