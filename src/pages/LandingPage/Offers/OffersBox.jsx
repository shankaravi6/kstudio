import React from 'react'
import { SoBox, SoFlex, SoHeadLineText, SoImg, SoSubTitle, SoTitle, SoTypography } from '../../../components/styledcomponents/globalStyles'
import WeddingPic from '../../../../public/assets/images/offers/wedding.jpg'

const OffersBox = () => {
  return (
    <SoFlex wrap='wrap' al='center' jc='center' gap='clamp(2rem, 10vw, 5rem)'>
        <SoBox className='cursor-pointer' bsHover='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' br='15px' bs='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' p='20px' w='350px' h='350px'>
            <SoFlex m='25px 0' dir='column' gap='10px'>
            <SoBox br='20px' w='270px' h='270px'>
                <SoImg br='20px' src={WeddingPic} width="100%"  />
            </SoBox>
            <SoSubTitle fs='22px'>Weeding Photography</SoSubTitle>
            <SoTypography fs='14px'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non porta.
            </SoTypography>
            </SoFlex>
        </SoBox>
        <SoBox className='cursor-pointer' bsHover='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' br='15px' bs='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' p='20px' w='350px' h='350px'>
            <SoFlex m='25px 0' dir='column' gap='10px'>
            <SoBox br='20px' w='270px' h='270px'>
                <SoImg br='20px' src={WeddingPic} width="100%"  />
            </SoBox>
            <SoSubTitle fs='22px'>Weeding Photography</SoSubTitle>
            <SoTypography fs='14px'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non porta.
            </SoTypography>
            </SoFlex>
        </SoBox>
        <SoBox className='cursor-pointer' bsHover='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' br='15px' bs='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' p='20px' w='350px' h='350px'>
            <SoFlex m='25px 0' dir='column' gap='10px'>
            <SoBox br='20px' w='270px' h='270px'>
                <SoImg br='20px' src={WeddingPic} width="100%"  />
            </SoBox>
            <SoSubTitle fs='22px'>Weeding Photography</SoSubTitle>
            <SoTypography fs='14px'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, elementum quisque aenean sagittis vehicula enim, feugiat cum mollis gravida non porta.
            </SoTypography>
            </SoFlex>
        </SoBox>
    </SoFlex>
  )
}

export default OffersBox
