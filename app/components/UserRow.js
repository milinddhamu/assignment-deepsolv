
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import Flag from 'react-world-flags';
import countries from 'i18n-iso-countries';
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const UserRow = ({data,isFirstChild,isLastChild}) => {
  const roundedCorners = isFirstChild ? "rounded-t-3xl" : isLastChild ? "rounded-b-3xl" : "";
  const { email, name, location, nat, cell, picture } = data;
  return (
    <div className={`flex flex-row justify-between items-center w-full p-4 px-6 h-24 overflow-hidden gap-2 sm:gap-4 border border-gray-500/50 ${roundedCorners} hover:bg-white/10 hover:cursor-pointer transition-colors duration-300 rounded-sm`}>
      <div className="flex w-full h-full max-w-fit">
        <img 
          src={picture.medium}
          alt={email}
          className="rounded-full"
          aria-placeholder={email}
        />
      </div>
      <div className="flex flex-1 flex-row w-full justify-between items-center">
        <span className="flex flex-col">
          <h1 className="sm:text-lg font-bold truncate-text">{name.title+"."+" "+name.first+" "+name.last}</h1>
          <h3 className="text-xs sm:text-base flex w-full items-center gap-2 truncate-text"><IoIosMail className="text-xl" />{email}</h3>
        </span>
        <div className="flex flex-row items-center gap-8 justify-end h-full w-6">
          <h1 className="hidden md:flex flex-row items-center whitespace-nowrap text-xs gap-2 border-[1px] border-gray-500/50 rounded-full px-2">
            <IoLocationSharp />
            {location.city+", "+location.state+", "+location.country}</h1>
          <Flag code={nat} />
          <button
            id={cell}
            title={cell}
            className="rounded-full bg-white text-black p-2"
            ><BsFillTelephoneFill /></button>
        </div>
      </div>
    </div>
  );
}

export default UserRow;