import axios from "axios";

export interface Restaurant {
    id: string;
    name: string;
    cuisines: {
        name: string;
        uniqueName: string;
    }[];
    rating: {
        count: number;
        starRating: number;
        userRating?: number | null;
    };
    address: {
        city: string;
        firstLine: string;
        postalCode: string;
    }
};

export const RESTO_API = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/G38AG";

export const fetchRestoData = async(): Promise<Restaurant[]> => {
    try {
        const response = await axios.get(RESTO_API);
        // console.log(response.data.restaurants);
        return response.data.restaurants;
    } catch (error) {
        console.error('Error fetching restaurants ', error);
        return [];
    }
}