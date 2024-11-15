import React from 'react'
import { SoFlex, SoHeadLineText, SoSection, SoTypography } from '../../styledcomponents/globalStyles'
import { FooterSection } from '../../styledcomponents/Footer/FooterStyles'

const FooterBar = () => {
  return (
    <FooterSection>
       <SoSection mp='10px' sp='10px'>
        <SoFlex gap="clamp(2rem, 10vw, 5rem)" w='100%' jc='space-between'>
        <SoFlex sw='100%' w='500px'>
        <SoTypography fs='14px' ls='0px'>Lorem ipsum dolor sit amet consectetur adipiscing elit, quis pellentesque leo netus torquent vel, est nisi tempor ac ad himenaeos.</SoTypography>
        </SoFlex>
        <SoFlex dir='column' al='flex-start'>
            <SoTypography fs='14px'>COPYRIGHTS</SoTypography>
            <SoHeadLineText fst='normal' fs='14px'>K STUDIO @2024</SoHeadLineText>
        </SoFlex>
        </SoFlex>
       </SoSection>
    </FooterSection>
 
  )
}

export default FooterBar