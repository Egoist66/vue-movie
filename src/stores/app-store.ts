import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface SingleMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export interface Rating {
  Source: string
  Value: string
}



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

  const singleMovie = ref<SingleMovie | null>()


  const moviesList = computed(() => movies?.value?.Search?.length)

  const setMovies = (data: MoviesData) => {
    movies.value = data
  }

  const setSingleMovie = (data: SingleMovie | null) => {
    singleMovie.value = data
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
    singleMovie,
    storeSearch,
    currentPage,
    moviesList,
    isLoadingWhileSearch,
    setMovies,
    setSingleMovie,
    setCurrentPage,
    setIsLoadingWhileSearch,
    setSearch
    
  }
})
