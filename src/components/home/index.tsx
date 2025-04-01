import { useState } from "react"


const Home = () => {
    const [ postcode, setPostcode ] = useState<string>("G38AG");

    const handleSubmit = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPostcode(e.target.value)
    }

  return (
    <div className="flex justify-start items-center bg-amber-700 text-white rounded-2xl px-4 h-12">
        <h1 className="text-xl font-medium">Restaurants around post code</h1>
        <select name="postcode" id="postcode" value={postcode} onChange={handleSubmit}>postcode
            <option value="CT12EH">CT12EH</option>
            <option value="SW1A1AA">SW1A1AA</option>

        </select>
        {/* <button type="submit" onClick={handleSubmit}>Submit</button> */}
    </div>
  )
}

export default Home