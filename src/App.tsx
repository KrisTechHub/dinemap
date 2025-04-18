import { useState, useEffect } from 'react';
import './App.css';
import { fetchRestoData, Restaurant } from "./services/restoService";
import Home from './components/home';
import RestaurantList from './components/restaurantList';


function App() {
  const [ postcode, setPostcode ] = useState<string>("G38AG");
  const [ restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const getRestaurants = async() => {
        setLoading(true);
        try {
            const data = await fetchRestoData(postcode);
            // console.log(data);
            setRestaurants(Array.isArray(data) ? data : [])
        } catch (error) {
            console.log(error);
            setError("Failed to fetch restaurants. Please contact administrator.")
        } finally {
          setLoading(false);
        }
    };

    getRestaurants();
  }, [postcode]);

  return (
    <>
      <div className='mx-64'>
        <Home postcode={postcode} setPostcode={setPostcode} />
        <RestaurantList restaurants={restaurants} error={error} loading={loading}/>
      </div>
    </>
  )
}

export default App
