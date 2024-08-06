import { MoviesApi } from "@/api/movies.api";
import { useAppStore, type MoviesData } from "@/stores/app-store";
import { debounce } from "@/utils/debounce";
import { onBeforeMount, ref, watch, toRef } from "vue";


/**
 * Fetches movies data from the API based on the current search value and page number.
 *
 * @return {Promise<void>} A promise that resolves when the movies data is successfully fetched and set.
 */

export const useMovies = () => {
  const search = ref<string>("Batman");
  const page = ref<number>(1);
  const { setMovies, setSearch, setIsLoadingWhileSearch, storeSearch} = useAppStore();


  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);

    /**
     * Fetches movies data from the API based on the current search value and page number.
     *
     * @return {Promise<void>} A promise that resolves when the movies data is successfully fetched and set.
     */
    const getMovies = async () => {
        
        const data = await MoviesApi.get<MoviesData>(
            `${MoviesApi.baseUrl}/?i=tt3896198&${MoviesApi.apiKey}&s=${search.value}&page=${page.value}`
        )
        setMovies(data);
        setSearch(search.value);


    }

    /**
   * Updates the value of the `page` ref with the given `data`.
   *
   * @param {number} data - The new value for the `page` ref.
   * @return {void} This function does not return anything.
   */
    const setPage = (data: number) => {
      page.value = data
    }

    


    watch([search, page], debounce(async () => {
        setIsLoadingWhileSearch(true);
        await getMovies();
        setIsLoadingWhileSearch(false);
    }, 1000))

  
    
    return {
      search,
      isLoading,
      isError,
      page,
      setPage,
      getMovies,
    };
  
};
