import React from "react";
import {
  SoBox,
  SoFlex,
  SoImg,
  SoTypography,
} from "../../../components/styledcomponents/globalStyles";
import { useThemeContext } from "../../../context/theme/ThemeContext";

const BannerImage = () => {
  const { palette } = useThemeContext();

  return (
    <SoBox className="relative" m="0px 0 0 0">
      <SoFlex dir="column" gap="5px">
        {/* <SoTypography
          color={palette.text.mid}
          className="absolute -bottom-10"
          fs="18px"
        >
          John Hinston
        </SoTypography> */}
        <SoBox sw='unset' mw='unset' w="300px">
          {/* <SoImg src={BannerImg} width="100%" className=""></SoImg> */}
        </SoBox>
      </SoFlex>
    </SoBox>
  );
};

export default BannerImage;
