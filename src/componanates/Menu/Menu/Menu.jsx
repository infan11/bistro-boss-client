import menuImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg  from '../../../assets/menu/soup-bg.jpg'
import  dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import { Helmet} from 'react-helmet-async';
import UseMenu from '../../../Hooks/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import Cover from '../Shared/Cover/Cover';


const Menu = () => {
    const [menu ] = UseMenu();
    const offered = menu.filter(item => item.category === "offered")
  const desserts = menu.filter(item => item.category === "desserts")
  const soup = menu.filter(item => item.category === "soup")
  const salad = menu.filter(item => item.category === "salad")
  const pizza = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
      <Cover img={menuImg} title="our menu" ></Cover>
      <section className='text-center  '>
            <p className='text-yellow-300  mb-2'>---Don't miss---</p>
            <h2 className='font-bold text-2xl md:w-4/12 mx-auto border-y-2 mb-8 ' >TODAY'S OFFER</h2>
        </section>
        {/* offered menu items */}
     <MenuCategory items={offered} ></MenuCategory>
     <MenuCategory items={desserts} title={"desserts"} img={dessertImg} ></MenuCategory>
     <MenuCategory items={soup} title={"soup"} img={soupImg}  ></MenuCategory>
     <MenuCategory items={salad} title={"salad"} img={saladImg}  ></MenuCategory>
     <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}  ></MenuCategory>
        </div>
    );
};

export default Menu;