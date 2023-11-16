

import UseMenu from '../../../Hooks/UseMenu';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopulerMenu = () => {
   const [menu] = UseMenu();
   const popular = menu.filter(item => item.category === "popular")

    return (
        <div>
             <section className='text-center  '>
            <p className='text-yellow-300  mb-2'>---Check it out---</p>
            <h2 className='font-bold text-2xl md:w-4/12 mx-auto border-y-2 mb-8 ' >FROM OUR MENU</h2>
        </section>

        <div className='grid md:grid-cols-2 gap-10 mb-10'>
           {
            popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
           }
        </div>
       <div className='text-center'>
       <button className='btn btn-outline  mt-10 border-b-4 '>View Full  Menu</button>
       </div>
        </div>
    );
};


export default PopulerMenu;