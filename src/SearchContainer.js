import { AiOutlineSearch } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import axios from "axios";
import { ChangeEvent, useState } from "react";

function SearchContainer({ onSearch }) {
  const [location, setLocation] = useState("");
  const handleSearch = (event) => {
    onSearch(location);
  };

  return (
    <div className="Search-container">
      <FaLocationArrow size={20} className="location-icon" color="black" />
      <input
        type="text"
        placeholder="Enter your location"
        className="input-box"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="Search-button"
        onClick={handleSearch}
      >
        <AiOutlineSearch size={20} />
      </button>
    </div>
  );
}

export default SearchContainer;
