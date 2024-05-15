"use client"
import Image from "next/image";
import Results from "./components/Results";
import Navbar from "./components/Navbar";
import {useState,useEffect,useRef} from "react";
import { useDebounce } from "@/utils/useDebounce";

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [nationalitySearch,setNationalitySearch] = useState("");
  const debouncedValue = useDebounce(searchValue);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleNationalityChange = (e) => {
    setNationalitySearch(e.target.value);
  }
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full justify-center max-w-screen-2xl">
        <div className="flex flex-col w-full items-center">
          <Navbar searchValue={searchValue} handleSearchChange={handleSearchChange} handleNationalityChange={handleNationalityChange} nationalitySearch={nationalitySearch} />
          <Results searchValue={debouncedValue} nationalitySearch={nationalitySearch} />    
        </div>
      </div>
    </div>
  );
}
