import React, { useState, useEffect } from "react";
import {
  SoContainer,
  SoCover,
  SoFlex,
  SoSection,
} from "../../../components/styledcomponents/globalStyles";
import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";
import InfoSection from "../Info/InfoSection";
import BannerSmall from "../../../../public/assets/images/banner/bannersmall.jpg";
import BannerLarge from "../../../../public/assets/images/banner/bannercut.jpg";


const BannerSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(BannerLarge);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 970) {
        setBackgroundImage(BannerSmall);
      } else {
        setBackgroundImage(BannerLarge);
      }
    };

    // Run on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SoSection
      h="525px"
      sh='650px'
      mp="10px"
      sp="10px"
      p="10px"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local",
      }}
    >
      <SoFlex bg="transparent" m="2rem 0 0 0" gap="12rem">
        <BannerContent />
        <BannerImage />
      </SoFlex>
    </SoSection>
  );
};

export default BannerSection;
