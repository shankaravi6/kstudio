import React from "react";
import {
  SoCover,
  SoFlex,
  SoSection,
  SoSubTitle,
} from "../../../components/styledcomponents/globalStyles";
import ContactMap from "./ContactMap";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <SoSection mp="10px" sp="10px">
      <SoCover m="100px 0 0 0">
        <SoFlex p="0 0 20px 0">
          <SoSubTitle tt="uppercase">Contact Us</SoSubTitle>
        </SoFlex>
        <SoFlex gap="0 5rem">
          <ContactMap />
          <ContactInfo />
        </SoFlex>
      </SoCover>
    </SoSection>
  );
};

export default ContactSection;
