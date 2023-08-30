import CarouselComp from "../carouselComp";
import CardComponent from "./cardComponent";
import FAQ from "./faq";

const Home = () => {
    return (
      <div className="carousel">
        <div>
          <CarouselComp />
        </div>
        <div className="cards">
          <CardComponent />
        </div>
        <div className="faq">
          <FAQ />
        </div>
      </div>
    );
}
 
export default Home;