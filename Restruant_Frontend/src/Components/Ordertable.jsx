import React from 'react'
import axios from 'axios';
import { atom, useAtom } from 'jotai';
import { idAtom,totalAtom,discountAtom,servicefeeAtom,delieryfeeAtom } from './CustomerTable'
import { useState,useEffect } from 'react';

export default function Ordertable() {
  const [id, setID] = useAtom(idAtom);
  const [total, setTotal] = useAtom(totalAtom)
  const [discount, setDiscount] = useAtom(discountAtom)
  const [deliveryfee, setDeliveryfee] = useAtom(delieryfeeAtom)
  const [servicefee, setServicefee] = useAtom(servicefeeAtom)

  const [baseURL, setBaseURL] = useState('http://localhost:8000/api/orderid/');
  const [endpoint, setEndpoint] = useState(id);
  const [data, setData] = useState([]);

  useEffect(() => {
    setEndpoint(id);
  }, [id]);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      axios.get(`${baseURL}${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, [baseURL, endpoint]);
  
  return (
    <div className='bg-orange-100'>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                
                <tr>
                    <th scope="col" class="px-6 py-3 rounded-l-lg">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" class="px-6 py-3 rounded-r-lg">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id} class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.item_name}
                    </th>
                    <td class="px-6 py-4">
                        1
                    </td>
                    <td class="px-6 py-4">
                    {item.item_price}
                    </td>
                </tr>
                 ))}
            </tbody>
            <tfoot className='bg-white'>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="px-6 py-3 text-base">Discount</th>
                    <td class="px-6 py-3">3</td>
                    <td class="px-6 py-3">{discount}</td>
                </tr>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="px-6 py-3 text-base">Service Fee</th>
                    <td class="px-6 py-3">3</td>
                    <td class="px-6 py-3">{servicefee}</td>
                </tr>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="px-6 py-3 text-base">Delivery Fee</th>
                    <td class="px-6 py-3">3</td>
                    <td class="px-6 py-3">{deliveryfee}</td>
                </tr>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="px-6 py-3 text-base">Total</th>
                    <td class="px-6 py-3">3</td>
                    <td class="px-6 py-3">{total}</td>
                </tr>
            </tfoot>
        </table>
    </div>
    </div>
  );
}