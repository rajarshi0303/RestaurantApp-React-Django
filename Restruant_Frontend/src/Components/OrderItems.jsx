import React from 'react'
import axios from 'axios';
import { atom, useAtom } from 'jotai';

export const itemAtom = atom({ name: '', price: 0 });
export const deleteAtom = atom({ name: '', price: 0 });
function Card(props){
  const [item, setItem] = useAtom(itemAtom);
  const [del, setDel] = useAtom(deleteAtom);

  const handleClick = (name,price) => {

    setItem({ name: name, price: price.toFixed(2) });
  };
  
  const remove = (name,price) => {
    setDel({ name: name, price: price.toFixed(2) })
  };

    return(
        <div class="flex items-center space-x-4 pr-8 rounded-lg">
            <div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={"public/img/menu/"+props.src} alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">{props.name}</h3>
							<p className="text-sm dark:text-gray-400">{props.content}</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">${props.price}</p>
							<p className="text-sm line-through dark:text-gray-600">75.50€</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button type="button" onClick={() => remove(props.name,props.price)} className="flex items-center px-2 py-1 pl-0 space-x-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
								<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
								<rect width="32" height="200" x="168" y="216"></rect>
								<rect width="32" height="200" x="240" y="216"></rect>
								<rect width="32" height="200" x="312" y="216"></rect>
								<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
							</svg>
							<span>Remove</span>
						</button>
						<button type="button" onClick={() => handleClick(props.name,props.price)} className="flex items-center px-2 py-1 space-x-1">
                        Add to Cart
						</button>
					</div>
				</div>
			</div>
        </div>
    )
}


export default function OrderItems() {
    const [data, setData] = React.useState(null);
    
    React.useEffect(() => {
      breakfast();
    }, []);
    
    function breakfast(){
        axios.get("http://127.0.0.1:8000/breakfast/").then(function (response) {
            setData(response.data);
          });
    }
    function lunch(){
        axios.get("http://127.0.0.1:8000/lunch/").then(function (response) {
            setData(response.data);
          });
    }
    function dinner(){
        axios.get("http://127.0.0.1:8000/dinner/").then(function (response) {
            setData(response.data);
          });
    }
    if (!data) return null;

  return (
    <div>

        <div>
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <p className="mx-auto max-w-screen-md text-center text-orange-500 md:text-lg">
                    -Our Menu-
                </p>
                <h2 className="font-serif text-center text-xl font-bold text-black lg:text-xl">
                    Choose From Our Categories
                </h2>
            </div>
        </div>

        <nav className="shadow dark:bg-gray-800">
          <div className="container flex items-center justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">
            <button onClick={() => breakfast()} className="text-2xl border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              <img class="w-28 h-24 rounded" src="public/img/logo/breakfast.png" alt="Default avatar"/>
              Breakfast
              </button>
            <button onClick={() => lunch()} className="text-2xl border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            <img class="w-28 h-28 rounded" src="public/img/logo/lunch.png" alt="Default avatar"/>
              Lunch
            </button>
            <button onClick={() => dinner()} className="text-2xl border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            <img class="w-28 h-28 rounded" src="public/img/logo/dinner.png" alt="Default avatar"/>
              Dinner
            </button>
          </div>
        </nav>

        <div class="bg-orange-50 py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="grid gap-6 sm:grid-cols-2">
                {data.map((item) => (
                <Card key={item.id} src={item.src} name={item.name} content={item.content} price={item.price}/>
              ))}
                </div>
            </div>
        </div>
    </div>
  )
}

