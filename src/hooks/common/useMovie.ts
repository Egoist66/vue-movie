import { MoviesApi } from "@/api/movies.api"
import { useAppStore, type SingleMovie } from "@/stores/app-store"
import { ref } from "vue"

export const useMovie = () => {

    const {setSingleMovie} = useAppStore()
    const isLoading = ref<boolean>(false)
    const isError = ref<boolean>(false)
    

    const getSingleMovie = async (id: any) => {
        const data = await MoviesApi.get<SingleMovie>(`${MoviesApi.baseUrl}/?i=${id}&${MoviesApi.apiKey}`)

        setSingleMovie(data)
    }


    return {
        getSingleMovie,
        isError,
        isLoading
    }
}