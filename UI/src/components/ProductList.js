import Navbar from "./Navbar";
import Filters from "./Filters";
import Search from "./Search";


const ProductListPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="m-3">
        <Search />
      </div>
      <div className="flex flex-row gap-3 m-5">
        <Filters />
      </div>
    </div>
  );
};

export default ProductListPage;