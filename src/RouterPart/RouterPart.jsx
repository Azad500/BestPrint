import styles from "./RouterPart.module.scss";
import { Route, Routes } from "react-router";
import Companies from "../Components/Companies/Companies";
import Portfolio from "../Components/Portfolio/Portfolio";
import Services from "../Components/Services/services";
import Contact from "../Components/Contact/Contact";
import NavbarInSameParts from "../Components/SameParts/Navbar/Navbar";
import MainInSameParts from "../Components/SameParts/Main/MainInSameParts";
import Footer from "../Components/SameParts/Footer/Footer";
import Pages from "../Components/Portfolio/PortfolioPages/Pages";
import BusinessCard from "../Components/Services/ServicesPages/Card";
import Prices from "../Components/Services/Prices/Prices";
import Details from "../Components/Companies/CompaniesPages/Details";

export default function RouterPart() {
  return (
    <section className={styles.container}>
      <NavbarInSameParts />
      <div className={styles.element}>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/pages" element={<Pages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/card" element={<BusinessCard />} />
          <Route path="/services/card/prices" element={<Prices />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/details" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <MainInSameParts />
      <Footer />
    </section>
  );
}
