import React from 'react'
import ContactForm from '../Components/ContactForm'
import ContactCards from '../Components/ContactCards'
import Footer from '../Components/Footer';

export default function Contact() {
  return (
    <div>
    <ContactCards></ContactCards>
    <ContactForm></ContactForm>
    <Footer></Footer>
    </div>
  )
}
