import React from 'react'
import axios from 'axios';
import Footer from '../Components/Footer'
import {dataAtom} from '../Components/Cart'
import { atom, useAtom } from 'jotai';
import { useState } from 'react';

function Form() {
  const [data, setData] = useAtom(dataAtom);
  console.log(data)

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    card_number: '',
    card_expiry:'',
    card_cvc:'',
    address: '',
    postal_code:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, item_name:data.namelist,item_price:data.pricelist,sub_total:data.subtotal,discount:data.discount,service_fee:data.servicefee,delivery_fee:data.deliveryfee,total:data.newTotal });
    axios.post('http://127.0.0.1:8000/order/', formData)
      .then((response) => {
        console.log(response.data);
        // reset form data after submitting 
        setFormData({ 
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        card_number: '',
        card_expiry:'',
        card_cvc:'',
        address: '',
        postal_code:'',
        item_name:'',
        item_price:'',
        sub_total:'',
        discount:'',
        service_fee:'',
        delivery_fee:'',
        total:''
      });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
<div className='bg-orange-50'>
  <section>
    <div class="mt-16 mx-auto max-w-xl px-4 lg:px-8">
      <div class="bg-stone-50 py-20 md:py-20">
        <div class="mx-auto max-w-lg px-4 lg:px-8">

          <form onClick={handleSubmit} class="grid grid-cols-6 gap-4">
            <div class="col-span-3">
              <label for="first_name" class="block text-xs font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name" 
                value={formData.first_name} 
                onChange={handleChange}
                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
            </div>
  
            <div class="col-span-3">
              <label for="last_name" class="block text-xs font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name" 
                value={formData.last_name} 
                onChange={handleChange}
                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
            </div>
  
            <div class="col-span-6">
              <label for="email" class="block text-xs font-medium text-gray-700">
                Email
              </label>  
              <input
                type="email"
                id="email"
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
            </div>
  
            <div class="col-span-6">
              <label for="phone" class="block text-xs font-medium text-gray-700">
                Phone
              </label>  
              <input
                type="tel"
                id="phone"
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
            </div>
  
            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Card Details
              </legend>
  
              <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label for="card_number" class="sr-only"> Card Number </label>
                  <input
                    type="text"
                    id="card_number"
                    name="card_number" 
                    value={formData.card_number} 
                    onChange={handleChange}
                    placeholder="Card Number"
                    class="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"/>
                </div>
  
                <div class="flex">
                  <div class="flex-1">
                    <label for="card_expiry" class="sr-only"> Card Expiry </label>  
                    <input
                      type="text"
                      id="card_expiry"
                      name="card_expiry" 
                      value={formData.card_expiry} 
                      onChange={handleChange}
                      placeholder="Expiry Date"
                      class="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm"/>
                  </div>
  
                  <div class="-ms-px flex-1">
                    <label for="card_cvc" class="sr-only"> Card CVC </label>
                    <input
                      type="text"
                      id="card_cvc"
                      name="card_cvc" 
                      value={formData.card_cvc} 
                      onChange={handleChange}
                      placeholder="CVC"
                      class="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm"/>
                  </div>
                </div>
              </div>
            </fieldset>
  
            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Billing Address
              </legend>
  
              <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                <div>
                  <label for="address" class="sr-only">Country</label>
                  <input
                    type="text"
                    id="address"
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange}
                    placeholder="Address"
                    class="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"/>
                </div>
  
                <div>
                  <label class="sr-only" for="postal_code"> ZIP/Post Code </label>
                  <input
                    type="text"
                    id="postal_code"
                    name="postal_code" 
                    value={formData.postal_code} 
                    onChange={handleChange}
                    placeholder="ZIP/Post Code"
                    class="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"/>
                </div>
              </div>
            </fieldset>
  
            <div class="col-span-6">
              <button
                type='submit'
                class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}


export default function OrderForm() {
  return (
    <div>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}
