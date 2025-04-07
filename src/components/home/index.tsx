import { UserIcon, ShoppingBagIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

type HomeProps = {
    postcode: string;
    setPostcode: (postcode: string) => void;
}

const Home: React.FC<HomeProps> = ({ postcode, setPostcode }) => {
    const [ inputValue, setInputValue ] = useState(postcode);

    useEffect(() => {
        setInputValue("");
    }, [postcode]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPostcode(inputValue);
    }

  return (
    <div className="flex justify-between items-center bg-amber-700 text-white rounded-lg px-4 gap-3 min-h-14">
        <div className="flex gap-2 ">
            <UserIcon className="w-7 cursor-pointer" />
            <div className="flex gap-4">
                <h1 className="text-xl font-medium">Restaurants around {postcode} </h1>
            </div>
        </div>
       <div className="flex gap-2">
            <form onSubmit={handleSubmit} className="flex gap-1">
                <input type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="Postcode" 
                    className="px-1 border-1 border-gray-50 rounded-md ps-1.5 w-20"  
                />
                <button type="submit">
                    <MagnifyingGlassIcon className="w-7 cursor-pointer" />
                </button>
            </form>
            <ShoppingBagIcon className="w-7 cursor-pointer" />
       </div>

    </div>
  )
}

export default Home