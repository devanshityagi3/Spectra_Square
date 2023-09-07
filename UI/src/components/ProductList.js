import { FaSpinner } from "react-icons/fa";
import Navbar from "./Navbar";
import ProdItem from "./ProdItem";
import useFetch from "./useFetch";

const ProductListPage = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/products");
  if (error) {
    return <div>Error: {error}</div>;
  } else {
    console.log("data loaded", data, isPending, error);
  }

  return (
    <div className="bg-slate-900 text-white">
      <Navbar></Navbar>
      <h1>Products</h1>
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
  );
};

export default ProductListPage;