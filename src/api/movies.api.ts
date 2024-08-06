import { BaseApi } from "./baseApi";

export class MoviesApi extends BaseApi {

    public static apiKey = "apikey=8523cbb8"
    public static baseUrl = "https://www.omdbapi.com"


        /**
     * Asynchronously fetches movies data from the specified URL and returns it as a Promise.
     *
     * @param {string} url - The URL to fetch data from.
     * @return {Promise<T>} A promise that resolves to the fetched data of type T.
     */
    public static get<T>(url: string): Promise<T> {
        return super.get<T>(url);
    }
}