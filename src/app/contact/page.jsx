import ContactHero from '@/components/ContactPage/ContactHero'
import ContactInfo from '@/components/ContactPage/ContactInfo'
import Client from '@/components/HomePage/Client'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <Client bgColor="#FFF7EF" />
    </div>
  )
}

export default Contact