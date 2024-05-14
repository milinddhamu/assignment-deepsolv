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
  // })
  const searchUser = (searchTerm) => {
    return usersData.filter(user => 
      user.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.last.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  useEffect(()=>{
    if(searchValue){
      const results = searchUser(searchValue)
      setFilteredData(results)
    } else {
      setFilteredData(usersData)
    }
  },[searchValue, usersData]);

  useEffect(() => {
    if (nationalitySearch.length === 2) {
      const newData = usersData.filter(user => user.nat === nationalitySearch);
      setFilteredData(newData);
    } else {
      setFilteredData(usersData);
    }
  }, [nationalitySearch, usersData]);
  
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
      {filteredData.length === 0 && <div className="flex justify-center">Fetching data</div>}
      {((filteredData.length === 0 && searchValue) || nationalitySearch) && <div className="flex justify-center">User not found</div>}
    </div>
  );
}

export default Results;