import { useState, useEffect } from "react";
import { fetchRestoData, Restaurant } from "../../services/restoService";
import { StarIcon } from "@heroicons/react/24/solid";

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
        <div className="bg-gray-50 p-6">
            {error && 
                <p className="text-red-600"> {error} </p>
            }

            { restaurants && restaurants.slice(0, 10).map((resto) => (
                <div key={resto.id} className="bg-white p-6 m-4 rounded-xl hover:bg-gray-50/20 border-1 border-gray-200 hover:cursor-pointer">
                    <div>

                    </div>

                    <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-3">
                            <img src={resto.logoUrl} className="h-12" alt="" />
                            <h4 className="font-medium text-xl"> {resto.name} </h4>
                        </div>
                        <div className="flex gap-1 items-center">
                            <StarIcon className="h-5 text-amber-400" />
                            <p> {resto.rating.starRating} </p>
                            <p> {resto.rating.starRating > 0 && `(${resto.rating.count})`} </p>
                        </div>
                    </div>

                    <div>
                        {`${resto.address.firstLine}, ${resto.address.city}`}
                    </div>

                    <div className="flex">
                        <p>Cuisines:</p>
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