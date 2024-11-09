import React from "react";
import {
  SoCover,
  SoFlex,
  SoSection,
  SoSubTitle,
} from "../../../components/styledcomponents/globalStyles";
import OffersCard from "./OffersCard";

const OffersSection = () => {
  return (
    <SoSection mp="10px" sp="10px">
      <SoCover m="100px 0 0 0">
        <SoFlex p='0 0 20px 0'>
          <SoSubTitle tt="uppercase">We Offers</SoSubTitle>
        </SoFlex>
        <SoFlex gap="0 5rem">
          <OffersCard />
        </SoFlex>
      </SoCover>
    </SoSection>
  );
};

export default OffersSection;