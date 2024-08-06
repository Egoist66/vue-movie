import { MoviesApi } from "@/api/movies.api";
import { useAppStore, type MoviesData } from "@/stores/app-store";
import { debounce } from "@/utils/debounce";
import { onBeforeMount, ref, watch } from "vue";

export const useMovies = () => {
  const search = ref<string>("Batman");
  const page = ref<number>(1);
  const { setMovies, setSearch, setIsLoadingWhileSearch} = useAppStore();


  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);

    const getMovies = async () => {
        
        const data = await MoviesApi.get<MoviesData>(
            `${MoviesApi.baseUrl}/?i=tt3896198&${MoviesApi.apiKey}&s=${search.value}&page=${page.value}`
        )
        setMovies(data);
        setSearch(search.value);


    }

    const setPage = (data: number) => {
      page.value = data
    }

    onBeforeMount(async () => {
      isLoading.value = true;

      try {
        await getMovies();
      }
      catch (e) {
        isError.value = true;
      }
      finally {
        isLoading.value = false;
      }
    });


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
