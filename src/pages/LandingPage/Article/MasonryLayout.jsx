import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  SoBox,
  SoCover,
  SoFlex,
  SoHeadLineText,
  SoImg,
  SoSubTitle,
  SoTitle,
  SoTypography,
} from "../../../components/styledcomponents/globalStyles";
import { useThemeContext } from "../../../context/theme/ThemeContext";
import { Fade } from "react-awesome-reveal";

const MasonryLayout = ({ articleData }) => {
  const { palette } = useThemeContext();

  return (
    <SoCover m="20px 0">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 300: 2, 500: 2, 700: 3, 900: 4, 1200: 5 }}
      >
        <Masonry columnsCount={3} gutter="16px">
          {articleData.map((data, index) => {
            return (
              <SoFlex key={index} dir="column">
                <Fade style={{width:"100%"}}>
                  <SoBox className="relative">
                    <SoImg br='5px' width="100%" src={`assets/${data.img}`} />
                    {/* <SoTypography
                      tt="uppercase"
                      className="absolute bottom-0 right-0"
                      style={{
                        background: "linear-gradient(360deg, black, transparent)",
                        padding: "4px 8px",
                        fontSize: "18px",
                        borderRadius: "0 0 5px 0"
                      }}
                      color={palette.text.title}
                    >
                      {data.title}
                    </SoTypography> */}
                  </SoBox>
                  <SoBox w="100%">
                    <SoFlex sjc='space-between' jc="space-between" sw='100%' sm_dir="row" w="100%">
                      <SoSubTitle tt="uppercase" s_ml='0px' ls='0px' fs="clamp(.5rem, 5vw, .75rem)">
                        {data.author}
                      </SoSubTitle>
                      <SoSubTitle tt="uppercase" s_ml='0px' ls='0px' fs="clamp(.5rem, 5vw, .75rem)">
                        {data.date}
                      </SoSubTitle>
                    </SoFlex>
                  </SoBox>
                </Fade>
              </SoFlex>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </SoCover>
  );
};

export default MasonryLayout;
