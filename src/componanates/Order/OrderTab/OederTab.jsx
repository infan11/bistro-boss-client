import FoodCard from "../FoodCard/FoodCard";

const OederTab = ({items}) => {

    return (
        <div>
             <div className="grid md:grid-cols-3 gap-10 mb-10">
            {
                items.map(item => <FoodCard key={item.id} item={item}></FoodCard>)
            }
         </div>
        </div>
    );
};

export default OederTab;