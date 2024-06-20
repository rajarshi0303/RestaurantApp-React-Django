import { Carousel } from 'flowbite-react';
import OrderItems from '../Components/OrderItems';
import Cart from '../Components/Cart'
import Footer  from '../Components/Footer';

function Banner(){
  return(
<div class="bg-orange-50">

  <div class="bg-orange-50 mt-16">
  <div class="mx-auto max-w-screen-lg ">
      <div class="overflow-hidden rounded-lg sm:flex-row md:h-96">
      <div class="order-first  w-full bg-white sm:order-none sm:h-auto sm:w-1/2 lg:w-full">
          <img src="/public/img/order/delivery.png" loading="lazy" alt="Photo by Dom Hill" class="w-full object-cover object-center" />
      </div>
      </div>
  </div>
  </div>
</div>
  );
}

export default function Order() {
  return (
    <div>
      <Banner></Banner>
      <OrderItems></OrderItems>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  )
}
