import { MoviesApi } from "@/api/movies.api"
import { useAppStore, type SingleMovie } from "@/stores/app-store"

export const useMovie = () => {

    const {setSingleMovie} = useAppStore()

    const getSingleMovie = async (id: any) => {
        const data = await MoviesApi.get<SingleMovie>(`${MoviesApi.baseUrl}/?i=${id}&${MoviesApi.apiKey}`)

        setSingleMovie(data)
    }


    return {
        getSingleMovie
    }
}