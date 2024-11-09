import React from "react";
import {
  SoBackImg,
  SoBox,
  SoImg,
} from "../../../components/styledcomponents/globalStyles";
import About from "/assets/images/info/aboutpic.jpg";

const InfoImage = () => {
  return (
    <SoBox w="55%" p="5px 0 5px 0">
      <SoImg br='1rem' width="100%" src={About}></SoImg>
    </SoBox>
  );
};

export default InfoImage;
