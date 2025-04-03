import { Bars3Icon, UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type HomeProps = {
    postcode: string;
    setPostcode: (postcode: string) => void;
}

const Home: React.FC<HomeProps> = ({ postcode, setPostcode }) => {
    const [ inputValue, setInputValue ] = useState(postcode) 

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPostcode(inputValue);
    }

  return (
    <div className="flex justify-between items-center bg-amber-700 text-white rounded-2xl px-4 gap-3 min-h-14">
        <div className="flex gap-2">
            <Bars3Icon className="w-8" />
            <div className="flex gap-4">
                <h1 className="text-xl font-medium">Restaurants around {postcode} </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"  onChange={handleInputChange} placeholder="Enter postcode" className="px-1 border-1 border-gray-50 rounded-md w-30"  />
                    <MagnifyingGlassIcon className="w-7" />
                </form>
            </div>
        </div>
       <div className="flex">
            <UserIcon className="w-7" />
            <ShoppingCartIcon className="w-7" />
       </div>

        {/* <select className="text-black" name="postcode" id="postcode" value={postcode} onChange={handleSubmit}>postcode
            <option value="CT12EH">CT12EH</option>
            <option value="SW1A1AA">SW1A1AA</option>
            <option value="CT12EH">CT12EH</option>
            <option value="BN11AE">BN11AE</option>
            <option value="PL40DW">PL40DW</option>
            <option value="BS14DJ">BS14DJ</option>
            <option value="CF118AZ">CF118AZ</option>
            <option value="CB74DL">CB74DL</option>
            <option value="B263QJ">B263QJ</option>
            <option value="L40TH">L40TH</option>
            <option value="M160RA">M160RA</option>
            <option value="LS27HY">LS27HY</option>
            <option value="DH45QZ">DH45QZ</option>
            <option value="NE97TY">NE97TY</option>
            <option value="EH11RE">EH11RE</option>
            <option value="BT71NN">BT71NN</option>
            
        </select> */}
    </div>
  )
}

export default Home