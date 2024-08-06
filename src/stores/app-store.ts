import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export interface ErrorMovies {
  Error: string
}
export interface MoviesData extends ErrorMovies {
  Search: Movie[]
  totalResults: string
  Response: string
}

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}





export const useAppStore = defineStore('app-store', () => {
 
  const storeSearch = ref<string>('Batman')
  const currentPage = ref<number>(1)
  const isLoadingWhileSearch = ref<boolean>(false)
  const movies = ref<MoviesData>({
    Search: [],
    totalResults: '',
    Response: '',
    Error: ''
  })


  const moviesList = computed(() => movies?.value?.Search?.length)

  const setMovies = (data: MoviesData) => {
    movies.value = data
  }

  const setIsLoadingWhileSearch = (data: boolean) => {
    isLoadingWhileSearch.value = data
  }

  const setSearch = (data: string) => {
    storeSearch.value = data
  }


  const setCurrentPage = (data: number) => {
    currentPage.value = data
  }
  return {
    movies,
    storeSearch,
    currentPage,
    moviesList,
    isLoadingWhileSearch,
    setMovies,
    setCurrentPage,
    setIsLoadingWhileSearch,
    setSearch
    
  }
})
