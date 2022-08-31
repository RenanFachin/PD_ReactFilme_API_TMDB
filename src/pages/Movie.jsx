import { useState, useEffect } from "react"

// Resgatando um parametro direto da url
import { useParams } from 'react-router-dom'

import MovieCard from '../components/MovieCard/'

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import './Movie.css'

// Importando as chaves do arquivo .env
const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
    // pegando o id da url
    const {id} = useParams()
    const [movie,setMovie] = useState(null)

    // função para conversão de unidades
    const formatCurrency = (number) =>{
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

        // Função para buscar na API
        const getMovie = async(url) =>{
            const res = await fetch(url)
            const data = await res.json()
    
            setMovie(data) // sem o results pq vai ser só 1 filme retornando
        }

        useEffect(()=>{
            // Montando a URL
            const movieUrl = `${moviesURL}${id}?${apiKey}`

            getMovie(movieUrl)
        },[])

    return(
        <div className="movie-page">
            {movie && (
                <>
                <MovieCard movie={movie} showLink={false} />
                <p className="tagline"></p>

                <div className="info">
                    <h3>
                        <BsWallet2/> Orçamento:
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p>
                </div>

                <div className="info">
                    <h3>
                        <BsGraphUp/> Receita:
                    </h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                </div>

                <div className="info">
                    <h3>
                        <BsHourglassSplit/> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p>
                </div>

                <div className="info description">
                    <h3>
                        <BsFillFileEarmarkTextFill/> Descrição:
                    </h3>
                    <p>{movie.overview}</p>
                </div>

                </>
            )}
        </div>
    );
}

export default Movie