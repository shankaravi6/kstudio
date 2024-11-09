import React from "react";
import {
  SoBox,
  SoFlex,
  SoHeadLineText,
  SoSubTitle,
  SoTitle,
  SoTypography,
} from "../../../components/styledcomponents/globalStyles";
import SoButton from "../../../components/common/SoButton";
import { colorTokens } from "../../../context/theme/theme";

const BannerContent = () => {
  return (
    <SoBox>
      <SoFlex bg='transparent' al="flex-start" dir="column">
        <SoTitle color={colorTokens.drops[200]}>K STUDIO*</SoTitle>
        {/* <SoFlex m="5px 0 0 0" sm_dir="row" jc="space-between" w="100%">
          <SoTypography>07</SoTypography>
          <SoTypography>JULY</SoTypography>
          <SoTypography>2024</SoTypography>
        </SoFlex> */}
        <SoTypography color={colorTokens.drops[300]} fs="clamp(.25rem, 5vw, 1.5rem)">
          Creating Memories & Capturing its Essence
        </SoTypography>
        <SoBox p="25px 0 0 0">
          <SoButton>Enquire Now</SoButton>
        </SoBox>
      </SoFlex>
    </SoBox>
  );
};

export default BannerContent;
