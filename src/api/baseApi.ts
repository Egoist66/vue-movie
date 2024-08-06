
export abstract class BaseApi   {

    /**
     * Asynchronously fetches data from the specified URL and parses it as JSON.
     *
     * @param {string} url - The URL to fetch data from.
     * @return {Promise<T>} A promise that resolves to the parsed JSON data as type T. If an error occurs, an empty object of type T is returned.
     */
    public static async get<T>(url: string) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data as T;

        }
        catch (e) {
            console.log(e);

            return {} as T
        }

    }
}