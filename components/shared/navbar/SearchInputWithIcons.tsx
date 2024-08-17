"use client";

import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import CloseIcon from "@/components/shared/navbar/CloseIcon";
import Search from "./Search";

// Define the component
const SearchInputWithIcons = () => {
  // State to hold the search value
  const [searchValue, setSearchValue] = useState<string>("");

  // Handle changes in the input field
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // Handle clearing the input field
  const handleClearInput = () => {
    setSearchValue("");
  };

  return (
    <div className="relative">
      {/* Search Icon */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2  scale-125">
        <Search />
      </div>
      {/* Input Field */}
      <Input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
        className="pl-10 pr-10 text-base md:text-sm rounded-full"
      />

      {/* Close Icon */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 scale-110">
        <CloseIcon onClick={handleClearInput} />
      </div>
    </div>
  );
};

export default SearchInputWithIcons;
