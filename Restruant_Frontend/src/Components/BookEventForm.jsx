import axios from 'axios';
import React, { useEffect , useState} from "react";
import Datepicker from "flowbite-datepicker/Datepicker";

export default function BookEventForm() {
  
  useEffect(() => {
    const datepickerEl = document?.getElementById("datepickerId");
    new Datepicker(datepickerEl, {});
  }, []);

  const [selectedDate, setSelectedDate] = useState('');

  function handleDateSelect(e) {
    setSelectedDate(e.target.value);
    const dateStr = e.target.value;
    const dateParts = dateStr.split("/");
    const year = dateParts[2];
    const month = dateParts[0].padStart(2, "0");
    const day = dateParts[1].padStart(2, "0");
    const isoDate = `${year}-${month}-${day}`;
    console.log("New Date :",isoDate)

    setFormData({ ...formData, date: isoDate  });
  }

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    event: '',
    date: '',
    time: '',
    number:'',
    message:'',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/bookevent/', formData)
      .then((response) => {
        console.log(response.data);
        // reset form data after submitting 
        setFormData({ first_name: '',last_name: '',email: '',phone: '',event: '',date: '',time: '',number:'',message:'',});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  <div>
		<div className="bg-orange-100 container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="mt-20 w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              Style="background-image: url('/public/img/book/table.jpg')">
            </div>

					  <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center text-orange-600">Book Your Occasion With Us!</h3>
						
            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">              
              
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mt-6 group">
                  <input id="first_name" type="text" name="first_name" value={formData.first_name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label For="first_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                </div>
                <div className="relative z-0 w-full mt-6 group">
                  <input id="last_name" type="text" name="last_name" value={formData.last_name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label For="last_name" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                </div>
              </div>

              <div className="relative z-0 w-full mt-6 group">
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label For="email" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
              </div>

              <div className="relative z-0 w-full mt-6 group">
                <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label For="phone" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
              </div>
                            
              <div className="relative z-0 w-full mt-6 group">
                <label For="select" class="sr-only">Underline select</label>
                <select id="select" type="text" name="event" value={formData.event} onChange={handleChange} class="block py-2.5 px-0 w-full text-xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option selected>Choose an Event</option>
                    <option value="BirthDay Party" >Birth Day Party</option>
                    <option value="Private Party" >Private Party</option>
                    <option value="Custom Gathering" >Custom Gathering</option>
                    <option value="Engagement Party">Engagement Party</option>
                    <option value="Festival Party" >Festival Party</option>
                    <option value="Cocktail Party" >Cocktail Party</option>
                    <option value="Other Occasion" >Other Occasion</option>
                </select>
              </div>
                            
              <div className="grid mt-6 md:grid-cols-2 md:gap-6">
              <span className='w-36'>
                  <h1 className="mt-2  text-lg heading">Date:</h1>
                  <div className="relative w-72">
                  <input
                    datepicker
                    datepicker-autohide
                    type="text"
                    className="block py-2.5 px-0 w-48 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Select date"
                    name="date"
                    value={selectedDate}
                    onSelect={handleDateSelect}
                    id="datepickerId" />
                    <div className="flex absolute inset-y-0 right-0 items-center pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="mr-24 w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </span>

                <span className='ml-10 w-44'>
                  <label className='text-lg'>Time:</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                </span>
              </div>

              <div className="relative z-0 w-full mt-6 group">
                <input id="number" type="number" name="number" value={formData.number} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label For="number" className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number Of Peoples</label>
              </div>



              <div className="relative z-0 col-span-2 mt-6">
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
              </div>
              
              <div className="mb-6 mt-9 text-center">
                <button type="submit" className="w-56 px-4 py-2 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-600 focus:outline-none focus:shadow-outline" >
                  Book Event
                </button>
			    </div>
			</form>
					
          </div>
			</div>
			</div>
		</div>
  </div>
  )
}

