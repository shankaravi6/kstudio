import React from 'react'
import {
    SoBox,
    SoFlex,
    SoHeadLineText,
    SoSubTitle,
    SoTitle,
    SoTypography,
  } from "../../../components/styledcomponents/globalStyles";
import { useThemeContext } from '../../../context/theme/ThemeContext';
import { IoStorefrontSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

const ContactInfo = () => {

    const {palette} = useThemeContext();


  return (
    <SoBox w="100%">
      <SoFlex w="100%" h='unset' al='left' jc="start" gap='clamp(.5rem,10vw,2.5rem)' dir='column'>
        <SoFlex jc='start' al='start' dir='column'>
          <SoFlex gap='.75rem'>
          <SoSubTitle fs='24px'><IoStorefrontSharp/></SoSubTitle>
          <SoSubTitle fs='24px'>Our Office Address</SoSubTitle>
          </SoFlex>
          <SoTypography fs='14px'>No 1, New Colony Street, Bus Stand Kanchipuram - 631501, Tamil Nadu</SoTypography>
        </SoFlex>
        <SoFlex jc='start' al='start' dir='column'>
        <SoFlex gap='.75rem'>
          <SoSubTitle fs='24px'><FaPhoneAlt/></SoSubTitle>
          <SoSubTitle fs='24px'>Mobile No</SoSubTitle>
          </SoFlex>
          <SoTypography fs='14px'>9876543210</SoTypography>
        </SoFlex>
        <SoFlex jc='start' al='start' dir='column'>
        <SoFlex gap='.75rem'>
          <SoSubTitle fs='24px'><MdEmail/></SoSubTitle>
          <SoSubTitle fs='24px'>Email</SoSubTitle>
          </SoFlex>
          <SoTypography fs='14px'>kstudio007@gmail.com</SoTypography>
        </SoFlex>
        <SoFlex jc='start' al='start' dir='column'>
        <SoFlex gap='.75rem'>
          <SoSubTitle fs='24px'><IoTimeSharp/></SoSubTitle>
          <SoSubTitle fs='24px'>Our Timing</SoSubTitle>
          </SoFlex>
          <SoTypography fs='14px'>Mon - Sun: 10.00AM - 08.00PM</SoTypography>
        </SoFlex>
      </SoFlex>
    </SoBox>
  )
}

export default ContactInfo