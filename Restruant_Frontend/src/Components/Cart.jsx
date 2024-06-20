import { itemAtom,deleteAtom } from '../Components/OrderItems';
import { useState,useEffect } from 'react';
import {  Link } from "react-router-dom";
import { atom, useAtom } from 'jotai';

export const dataAtom = atom({ namelist: [],pricelist:[],subtotal:0,discount:0,servicefee:0,deliveryfee:0,newTotal:0  });

export default function Cart(){
    const [data, setData] = useAtom(dataAtom);
    
    const [item, setItem] = useAtom(itemAtom);
    const [del, setdel] = useAtom(deleteAtom);

    const [namelist, setNamelist] = useState([]);
    const [pricelist, setPricelist] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [discount, setDiscount] = useState(4.3);
    const [servicefee, setServicefee] = useState(0.5);
    const [deliveryfee, setDeliveryfee] = useState(6);
    const [total, setTotal] = useState(0);

    // To add Item
    useEffect(() => {
      if (item.name && item.price && !namelist.includes(item.name)) {
        setNamelist(prevList => [...prevList, item.name]);
        setPricelist(prevList => [...prevList, item.price]);
        setSubtotal(Subtotal => Subtotal + Number(item.price));
      }
    }, [item]);

    //To change Total
    useEffect(() => {
        const newTotal = subtotal - discount + servicefee + deliveryfee;
        setTotal(newTotal);
        setData({ namelist,pricelist,subtotal,discount,servicefee,deliveryfee,newTotal });
    }, [subtotal, discount, servicefee, deliveryfee]);

    //To Delete Item
  useEffect(() => {
    let nameArray = namelist.filter(element => element !== del.name)
    let priceArray = pricelist.filter(element => element !== del.price)
    setNamelist(nameArray)
    setPricelist(priceArray)
    setSubtotal(Subtotal => Subtotal - Number(item.price));
  }, [del]);

    return(
<section>
    <div class="bg-orange-50">
        <div class="mx-auto max-w-xl px-4 lg:px-8">
            <div className="bg-stone-50 flex flex-col max-w-xl p-6 space-y-4 divide-y sm:max-w-xl sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="text-2xl font-semibold">Order items</h2>
                    <ul className="flex flex-col pt-4 space-y-2">
                        <li className="flex items-start justify-between">
                            <h3>  {namelist.map((item, index) => (
                                    <h3 key={index}>{item}</h3>
                                    ))} 
                            </h3>
                            <div className="text-right">
                                <span className="block">{pricelist.map((item, index) => (
                                                        <h3 key={index}>{item}</h3>
                                                        ))} 
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div className="pt-4 space-y-2">
                        <div>
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 mt-1 fill-current dark:text-violet-400">
                                    <path d="M485.887,263.261,248,25.373A31.791,31.791,0,0,0,225.373,16H64A48.055,48.055,0,0,0,16,64V225.078A32.115,32.115,0,0,0,26.091,248.4L279.152,486.125a23.815,23.815,0,0,0,16.41,6.51q.447,0,.9-.017a23.828,23.828,0,0,0,16.79-7.734L486.581,296.479A23.941,23.941,0,0,0,485.887,263.261ZM295.171,457.269,48,225.078V64A16.019,16.019,0,0,1,64,48H225.373L457.834,280.462Z"></path>
                                    <path d="M148,96a52,52,0,1,0,52,52A52.059,52.059,0,0,0,148,96Zm0,72a20,20,0,1,1,20-20A20.023,20.023,0,0,1,148,168Z"></path>
                                </svg>
                                <span className="dark:text-gray-400">Spend $20.00, get 20% off</span>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span>-${discount}</span>
                        </div>
                    </div>
                    <div className="pt-4 space-y-2">
                        <div className="flex justify-between">
                            <span>Service fee</span>
                            <span>${servicefee}</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <span>Delivery fee</span>
                                <span>${deliveryfee}</span>
                            </div>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-violet-400">How do our fees work?</a>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span className="font-semibold">${total}</span>
                            </div>
                            <Link to="/orderform">
                            <button type="button" className="bg-black text-white w-full py-2 font-semibold border rounded  ">Go to checkout</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>
      )
  }