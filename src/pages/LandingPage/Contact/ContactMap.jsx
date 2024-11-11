import React from 'react'
import { SoBox } from '../../../components/styledcomponents/globalStyles'

const ContactMap = () => {
  return (
    <SoBox w="100%" sw='auto' p="5px 20px 5px 20px">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7599652465574!2d80.17487827454777!3d13.05094511313477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52612575158271%3A0x9b6e2ee79de9af3d!2sK%20Studios%20India!5e0!3m2!1sen!2sin!4v1731137821610!5m2!1sen!2sin"className='map-wrapper rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </SoBox>
  )
}

export default ContactMap
