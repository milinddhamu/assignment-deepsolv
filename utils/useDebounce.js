import { useEffect, useState } from "react";

export function useDebounce(inputValue,delay = 500){
  const [value,setValue] = useState(null)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setValue(inputValue)
    },delay)
    return () => clearTimeout(timeout)
  },[inputValue,delay])

  return value;
}