import { Restaurant } from "../../services/restoService";
import { StarIcon } from "@heroicons/react/24/solid";

type RestaurantListProps = {
    restaurants: Restaurant[];
    error: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, error }) => {

    const getRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 18 ) + 1;
        return `../../../src/assets/restoImage${randomNum}.jpg`
    };

    return (
        <div className="bg-gray-50 p-6 flex flex-col">
            {error && 
                <p className="text-red-600"> {error} </p>
            }

            { restaurants.length > 0 ? restaurants.slice(0, 10).map((resto) => {
                const imgUrl = getRandomNum();
                return (
                <div key={resto.id} className="bg-white m-4 rounded-xl hover:bg-gray-50/20 border-1 border-gray-200 hover:cursor-pointer">
                    <div className="h-48 overflow-hidden">
                        <img className="w-full h-full object-cover object-center rounded-t-xl" src={imgUrl} alt="" />
                    </div>

                    <div className="flex px-5 py-3 ">
                        <div className="flex items-center gap-4 w-full">
                            <img src={resto.logoUrl} className="h-12" alt="" />
                            <div className="w-full text-start">
                                <div className="flex justify-between">
                                    <h4 className="font-medium text-xl"> {resto.name.length > 40 ? `${resto.name.slice(0, 37)}...` : resto.name} </h4>
                                    <div className="flex gap-1 items-center">
                                        <StarIcon className="h-5 text-amber-400" />
                                        <p> {resto.rating.starRating} </p>
                                        <p> {resto.rating.starRating > 0 && `(${resto.rating.count})`} </p>
                                    </div>
                                </div>
                                {`${resto.address.firstLine}, ${resto.address.city}`}
                            </div>
                        </div>
                    </div>

                    <div className="flex px-6 gap-1 pb-4">
                        <p className="font-medium">Available: </p>
                        <div className="flex gap-2 ">
                            
                            {resto.cuisines.map((cuisine, idx) => (
                                <div key={idx} className="bg-gray-100 rounded-sm">
                                    <p className="italic px-1"> {cuisine.name} </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                )}
            ) : (
                <p className="text-lg">Invalid post code entered.</p>
            )}
        </div>
    )
}

export default RestaurantList