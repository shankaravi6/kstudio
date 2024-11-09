import React, { useMemo } from "react";
import {
  SoContainer,
} from "../../components/styledcomponents/globalStyles";
import SoButton from "../../components/common/SoButton";
import NavBar from "../../components/layout/Navigation/NavBar";
import BannerSection from "./Banner/BannerSection";
import InfoSection from "./Info/InfoSection";
import ArticleSection from "./Article/ArticleSection";
import FooterBar from "../../components/layout/Footer/FooterBar";
import { useDispatch } from "react-redux";
import { setMode } from "../../store";
import OffersSection from "./Offers/OffersSection";
import ReviewsPage from "./Reviews/ReviewsPage";
import VideosPage from "./Videos/VideosPage";
import ContactSection from "./Contact/ContactSection";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  padding: 12.5px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  
  &:hover {
    background-color: #20b858;
  }
`;

const LandingPage = () => {
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch(setMode("light"));
  }, []);

  return (
    <SoContainer>
      <NavBar />
      <BannerSection />
      <OffersSection />
      <InfoSection />
      <ArticleSection />
      <VideosPage />
      <ReviewsPage />
      <ContactSection />
      <FooterBar />
      
      {/* WhatsApp Button */}
      <WhatsAppButton
        href="https://wa.me/+918300932511"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <IoLogoWhatsapp />
      </WhatsAppButton>
    </SoContainer>
  );
};

export default LandingPage;
