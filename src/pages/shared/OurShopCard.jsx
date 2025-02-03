import PrimaryBtn from "../../components/PrimaryBtn";

const OurShopCard = ({food}) => {
    const {recipe, name, price,image, _id} = food;
    const handleSignleFood = (id) =>{
console.log(id)
    }
  return (
     <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="">
    <p className="bg-black p-1 rounded text-white absolute top-0 right-2">${price}</p>
    <img
      src={image}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="">
      <button onClick={()=>
        handleSignleFood(_id)
      }>
      <PrimaryBtn
      title='Add to cart'
      ></PrimaryBtn>
      </button>
    </div>
  </div>
</div>
  );
};

export default OurShopCard;