import Input from "../../components/Input";
import "./Category.css"
const Category = () => {
    return (
      <div>
        <h2 className="sidebar-title mt-5">Category</h2>
        <div>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
        </div>
      </div>
    );
}
 
export default Category;