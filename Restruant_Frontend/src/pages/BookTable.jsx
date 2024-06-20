import React from 'react'
import Heading from '../Components/Heading'
import BookTableForm from '../Components/BookTableForm'
import Footer  from '../Components/Footer'


export default function BookTable() {
  return (
    <div className='bg-orange-100'>
      <BookTableForm></BookTableForm>
      <Footer></Footer>
    </div>
  )
}
