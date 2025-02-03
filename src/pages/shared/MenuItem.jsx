
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex items-center gap-5 mb-4">
            <img className="w-14 h-14 rounded-r-full rounded-b-full"  src={image} alt="" />
            <div className="w-80">
                <h2 className="uppercase text-sm mb-1">{name}.........</h2>
                <h6 className="text-xs">{recipe}</h6>
            </div>
            <div>
                <h5 className="text-orange-700">${price}</h5>
            </div>
        </div>
    );
};

export default MenuItem;