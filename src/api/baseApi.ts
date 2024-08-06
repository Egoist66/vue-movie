
export abstract class BaseApi   {

    public static async get<T>(url: string): Promise<T> {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;

        }
        catch (e) {
            console.log(e);

            return {} as T
        }

    }
}