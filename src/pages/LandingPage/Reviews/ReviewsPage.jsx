import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  SoBox,
  SoCover,
  SoFlex,
  SoImg,
  SoSection,
  SoSubTitle,
  SoTypography,
} from "../../../components/styledcomponents/globalStyles";
import WeddingPic from "../../../../public/assets/images/offers/review.jpeg";
import { RiDoubleQuotesL } from "react-icons/ri";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <SoBox p="20px" w="350px" h="350px">
    <SoFlex className='relative' dir="column" gap="20px">
    <SoBox className="absolute -top-5 -left-3">
      <SoSubTitle fs='100px'><RiDoubleQuotesL /></SoSubTitle>
      </SoBox>
      <SoBox w="350px" h="350px">
        <SoImg br='15px' src={WeddingPic} width="100%" />
      </SoBox>
      <SoTypography fs="14px">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum
        quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non
        porta.
      </SoTypography>
    </SoFlex>
  </SoBox>,
  <SoBox p="20px" w="350px" h="350px">
    <SoFlex className='relative' dir="column" gap="20px">
    <SoBox className="absolute -top-5 -left-3">
      <SoSubTitle fs='100px'><RiDoubleQuotesL /></SoSubTitle>
      </SoBox>
      <SoBox w="350px" h="350px">
        <SoImg br='15px' src={WeddingPic} width="100%" />
      </SoBox>
      <SoTypography fs="14px">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum
        quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non
        porta.
      </SoTypography>
    </SoFlex>
  </SoBox>,
  <SoBox p="20px" w="350px" h="350px">
  <SoFlex className='relative' dir="column" gap="20px">
  <SoBox className="absolute -top-5 -left-3">
    <SoSubTitle fs='100px'><RiDoubleQuotesL /></SoSubTitle>
    </SoBox>
    <SoBox w="350px" h="350px">
      <SoImg br='15px' src={WeddingPic} width="100%" />
    </SoBox>
    <SoTypography fs="14px">
      Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum
      quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non
      porta.
    </SoTypography>
  </SoFlex>
</SoBox>,
<SoBox p="20px" w="350px" h="350px">
    <SoFlex className='relative' dir="column" gap="20px">
    <SoBox className="absolute -top-5 -left-3">
      <SoSubTitle fs='100px'><RiDoubleQuotesL /></SoSubTitle>
      </SoBox>
      <SoBox w="350px" h="350px">
        <SoImg br='15px' src={WeddingPic} width="100%" />
      </SoBox>
      <SoTypography fs="14px">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum
        quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non
        porta.
      </SoTypography>
    </SoFlex>
  </SoBox>,
  <SoBox p="20px" w="350px" h="350px">
  <SoFlex className='relative' dir="column" gap="20px">
  <SoBox className="absolute -top-5 -left-3">
    <SoSubTitle fs='100px'><RiDoubleQuotesL /></SoSubTitle>
    </SoBox>
    <SoBox w="350px" h="350px">
      <SoImg br='15px' src={WeddingPic} width="100%" />
    </SoBox>
    <SoTypography fs="14px">
      Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum
      quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non
      porta.
    </SoTypography>
  </SoFlex>
</SoBox>
];

const ReviewsPage = () => {
  return (
    <SoSection mp="0px 20px" sp="10px">
      <SoCover m="100px 0 0 0">
        <SoFlex p="0 0 20px 0">
          <SoSubTitle fs="clamp(1.5rem,5vw,2.5rem)" tt="uppercase">Reviews</SoSubTitle>
        </SoFlex>
        <SoFlex gap="0 0rem">
          <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </SoFlex>
      </SoCover>
    </SoSection>
  );
};

export default ReviewsPage;
