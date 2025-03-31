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

const RESTO_API = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/G38AG";

