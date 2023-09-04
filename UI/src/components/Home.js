import CarouselComp from "./CarouselComp";
import CardComponent from "./CardComponent";
import FAQ from "./FAQ";

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