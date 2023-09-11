import { useState } from "react";

const Search = () => {

  const [input, setInput] = useState();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

    return (
      <div>
        <div>
          <input
            className="font-serif font-bold border border-gray-300 rounded-3xl py-2 px-9 pr-10 focus:outline-none max-w-md text-slate-600 ml-80"
            placeholder="Search"
            value={input}
            onChange={() => handleInput}
          />
          
        </div>
      </div>
    );
}
 
export default Search;