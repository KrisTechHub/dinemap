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
    };
    logoUrl: string
};

export const RESTO_API = "api/discovery/uk/restaurants/enriched/bypostcode/G38AG";

export const fetchRestoData = async(postcode: string): Promise<Restaurant[]> => {
    try {
        const response = await axios.get(`${RESTO_API}/${postcode}`);
        // console.log(response.data.restaurants);
        return response.data.restaurants;
    } catch (error) {
        console.error('Error fetching restaurants ', error);
        return [];
    }
}