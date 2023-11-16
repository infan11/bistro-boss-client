import MenuItem from "../../Home/Shared/MenuItem/MenuItem";
import Cover from "../Shared/Cover/Cover";


const MenuCategory = ({items, title , img}) => {
    return (
       
    <div className="mt-8">
         
         {title &&  <Cover img={img} title={title}></Cover>}
         <div className="grid md:grid-cols-2 gap-10 mb-10">
            {
                items.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
            }
         </div>
    </div>
    );
};

export default MenuCategory;