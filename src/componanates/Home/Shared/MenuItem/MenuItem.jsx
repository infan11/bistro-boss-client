

const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="flex space-x-4 ">
            <img style={{borderRadius: '0 200px 150px 200px' }} className="w-[120px] " src={image} alt="" />
            <div>
                <p className="text-2xl">{name}----------</p>
                <p className="text-xl">{recipe}</p>
            </div>
         <p className="text-yellow-300">${price}</p>
        </div>
    );
};

export default MenuItem;