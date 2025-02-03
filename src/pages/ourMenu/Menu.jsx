
import SectionHeading from "../../components/sectionHeading";
import useMenu from "../../Hooks/useMenu";
import bannerImg from "../../assets/home/chef-service.jpg";
import coverImg from "../../assets/menu/banner3.jpg"
import MenuCatagory from "./MenuCatagory";
import CoverPage from "../shared/CoverPage";


const Menu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(food => food.category ===
    "popular")
  const dessert = menu.filter(food => food.category ===
    "dessert")
  const pizza = menu.filter(food => food.category ===
    "pizza")
  const salad = menu.filter(food => food.category ===
    "salad")
  const soup = menu.filter(food => food.category ===
    "soup")
  console.log(popular, dessert, pizza, salad, soup)
  return (
    <div>
      <CoverPage
        title="Our Menu"
        bannerImg={coverImg}
        heading="WOULD YOU LIKE TO TRY A DISH?"
      ></CoverPage>
      <SectionHeading
        title="Don't miss"
        heading="TODAY'S OFFER">
      </SectionHeading>
      <MenuCatagory
      item={popular}
      >
      </MenuCatagory>
      <MenuCatagory
      title="Desserts"
      heading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      bannerImg={bannerImg}
      item={dessert}
      >
      </MenuCatagory>
      <MenuCatagory
      title="Pizza"
      heading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      bannerImg={bannerImg}
      item={pizza}
      >
      </MenuCatagory>
      <MenuCatagory
      title="Salad"
      heading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      bannerImg={bannerImg}
      item={salad}
      >
      </MenuCatagory>
      <MenuCatagory
      title="Soup"
      heading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      bannerImg={bannerImg}
      item={soup}
      >
      </MenuCatagory>

    </div>
  );
};

export default Menu;