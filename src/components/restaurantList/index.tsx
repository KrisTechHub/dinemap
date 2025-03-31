import { useState, useEffect } from "react";
import { fetchRestoData, Restaurant } from "../../services/restoService";

const RestaurantList = () => {
    const [ restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [ error, setError ] = useState("");

    useEffect(() => {
        const getRestaurants = async() => {
            try {
                const data = await fetchRestoData();
                // console.log(data);
                setRestaurants(Array.isArray(data) ? data : [])
            } catch (error) {
                console.log(error);
                setError(`${error}`)
            }
        };

        getRestaurants();
    })

    return (
        <div>
            <h2>Restaurants</h2>

            {error && 
                <p className="text-red-600"> {error} </p>
            }

            { restaurants && restaurants.slice(0, 10).map((resto) => (
                <div key={resto.id}>
                    <h4> {resto.name} </h4>
                    <div>
                        {resto.cuisines.map((cuisine, idx) => (
                            <div key={idx}>
                                <p> {cuisine.name} </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default RestaurantList