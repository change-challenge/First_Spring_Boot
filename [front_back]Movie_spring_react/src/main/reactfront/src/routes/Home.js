import { useEffect, useState } from 'react'
import Movie from '../components/Movie'
import Pagination from '../components/Pagination'
import ReactPaginate from 'react-paginate'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const perPage = 10
    const offset = (currentPage - 1) * perPage

    const getMovies = async () => {
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
        const json = await response.json()
        //const response = await (await fetch(
        //    'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
        //).json())
        setMovies(json.data.movies)
        setLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    const currentPageMovies = movies.slice(offset, offset + perPage)

    return (
        <div>
            {loading ? (
                <h1>...Loading</h1>
            ) : (
                <div>
                    {currentPageMovies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
            <Pagination
                total={movies.length}
                limit={perPage}
                page={currentPage}
                setPage={setCurrentPage}
            />
        </div>
    )
}

export default Home