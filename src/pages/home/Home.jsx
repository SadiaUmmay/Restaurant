import SectionHeading from "../../components/sectionHeading";
import Banner from "./Banner";
import Category from "./Category";
import Contact from "./contact";
import Menu from "./Menu";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading 
        title="From 11:00am to 10:00pm"
        heading="ORDER ONLINE">
      </SectionHeading>
      <Category></Category>
      <SectionHeading 
        title="Check it out"
        heading="FROM OUR MENU">
      </SectionHeading>
      <Menu></Menu>
      <Contact></Contact>
      <SectionHeading
        title= "What Our Clients Say"
        heading="TESTIMONIALS">
      </SectionHeading>
      <Reviews></Reviews>
      
    </div>
  );
};

export default Home;   