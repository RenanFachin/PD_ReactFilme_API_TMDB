import { useState, useEffect } from "react"

// Resgatando um parametro direto da url
import { useParams } from 'react-router-dom'

import MovieCard from '../components/MovieCard/'

import {
    BsGrapghUp,
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
        <div>Movie</div>
    )
}

export default Movie