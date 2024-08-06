import { BaseApi } from "./baseApi";

export class MoviesApi extends BaseApi {

    public static apiKey = "apikey=8523cbb8"
    public static baseUrl = "https://www.omdbapi.com"


    public static get<T>(url: string): Promise<T> {
        return super.get<T>(url);
    }
}