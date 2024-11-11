import React from 'react'
import { SoCover, SoFlex, SoSection, SoSubTitle } from '../../../components/styledcomponents/globalStyles'
import VideosCard from './VideosCard'

const VideosPage = () => {
  return (
    <SoSection mp="0px 20px" sp="10px">
    <SoCover m="100px 0 0 0">
      <SoFlex p="0 0 20px 0">
        <SoSubTitle fs="clamp(1.5rem,5vw,2.5rem)" tt="uppercase">Videos</SoSubTitle>
      </SoFlex>
      <SoFlex gap="0 5rem">
        <VideosCard/>
      </SoFlex>
    </SoCover>
  </SoSection>
  )
}

export default VideosPage