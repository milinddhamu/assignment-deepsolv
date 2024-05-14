import countries from 'i18n-iso-countries';
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
const countryCodes = Object.keys(countries.getAlpha2Codes());

export default function Navbar({searchValue,handleSearchChange,handleNationalityChange}){
  return (
    <div className="flex w-full h-20 justify-between gap-4 px-4 items-center max-w-screen-lg ">
      <h1 className="font-black">D</h1>
      <input 
        id="searchValue"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="search user here"
        className="focus:outline-none focus:border-2 border-white p-1 px-3 bg-zinc-800 flex-1 rounded-full"
      />
      <div className="">
        <form className="max-w-sm mx-auto">
          <select id="countries" class="bg-zinc-800 focus:border-2 border-gray-300 rounded-full focus:ring-white focus:border-white block w-full p-1.5 px-3" onChange={handleNationalityChange}>
            <option value="Choose a country">Choose a country</option>
            {countryCodes.map((code,key)=>(
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
        </form>

      </div>
    </div>
  )
}