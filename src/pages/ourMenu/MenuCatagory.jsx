import PrimaryBtn from "../../components/PrimaryBtn";
import CoverPage from "../shared/CoverPage";
import MenuItem from "../shared/MenuItem";


const MenuCatagory = ({title, bannerImg, item, heading}) => {
  return (
    <div>
      <div>
       { title && <CoverPage
        title={title}
        heading={heading}
        bannerImg={bannerImg}>
        </CoverPage>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-10">
       {item.map(food=>
          <MenuItem
          item={food}
          ></MenuItem>)}
      </div>
      <PrimaryBtn
      title= "ORDER YOUR FAVOURITE FOOD"
      ></PrimaryBtn>
      
    </div>
  );
};

export default MenuCatagory;