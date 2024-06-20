import MenuItems from "../Components/MenuItems";
import Heading from "../Components/Heading";
import Footer from "../Components/Footer"

function Menu(){
    return(
    <>
        <MenuItems></MenuItems>
        <div className='mt-20'>
        <Footer></Footer>
        </div>
    </>
    );
}
 
export default Menu;