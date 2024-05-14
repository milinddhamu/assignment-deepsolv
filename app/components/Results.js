'use client'
import { useState,useEffect } from "react";
import UserRow from "./UserRow";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { data } from "@/data/data";


const Results = ({searchValue,nationalitySearch}) => {
  const [usersData, setUsersData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [parent] = useAutoAnimate(/* optional config */)
  
  // useEffect(()=>{
  //   fetch(`https://assignment-deepsolv.onrender.com/results`).then(res => res.json()).then(data => {
  //     setUsersData(data)
  //     setFilteredData(data)
  //   })
  // }) // node server is not running properly

  useEffect(() => {
    let results = usersData;

    if (searchValue) {
      results = results.filter(user => 
        user.name.first.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.name.last.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (nationalitySearch.length === 2) {
      results = results.filter(user => user.nat === nationalitySearch);
    }

    setFilteredData(results);
  }, [searchValue, nationalitySearch, usersData]);
  
  return (
    <div 
      ref={parent}
      className="flex flex-col gap-1 w-full justify-center max-w-screen-lg p-4">
      {filteredData.map((user,index)=>(
        <div key={user.email}>
          <UserRow 
            data={user}
            isFirstChild={index === 0} 
            isLastChild={index === data.length - 1}
           />
        </div>
      ))}
      {((filteredData.length === 0 && searchValue) || (filteredData.length === 0 && nationalitySearch)) && <div className="flex justify-center">User not found</div>}
    </div>
  );
}

export default Results;