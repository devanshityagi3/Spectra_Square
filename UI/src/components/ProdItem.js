import { AiOutlineHeart } from "react-icons/ai";

const ProdItem = ({ pname, pimage, pprice }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img className="w-[400px] h-[400px]" src={pimage} alt={pname} />
        </div>
        <p>{pprice}</p>
        <div className="flex flex-row">
          <div className="max-w-5">{pname}</div>
          <AiOutlineHeart className="ml-5 text-white-500 text-3xl " />
        </div>
      </div>
    </div>
  );
};

export default ProdItem;