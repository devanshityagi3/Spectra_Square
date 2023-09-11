import { FaSpinner } from "react-icons/fa";
import Navbar from "./Navbar";
import ProdItem from "./ProdItem";
import useFetch from "./useFetch";
import Filters from "./Filters";
import Search from "./Search";


const ProductListPage = () => {
  
  const { data, isPending, error } = useFetch("http://localhost:8000/products");
  if (error) {
    return <div>Error: {error}</div>;
  } else {
    console.log("data loaded", data, isPending, error);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="m-3">
        <Search />
      </div>
      <div className="flex flex-row gap-3 m-5">
        <Filters />
        <div className="flex flex-row">
          {isPending ? (
            <div>
              <FaSpinner />
            </div>
          ) : data?.length !== 0 ? (
            data.map((prod) => (
              <ProdItem
                key={prod.id}
                pname={prod.pname}
                pimage={prod.pimage}
                pprice={prod.pprice}
              ></ProdItem>
            ))
          ) : (
            <div>
              <FaSpinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;