import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard/";

import './MovieGrid.css'

// Importando as chaves do arquivo .env
const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    // geranciando os estados
    const [topMovies, setTopMovies] = useState([]); // Começando vazio

    // Função para buscar na API
    const getTopRatedMovies = async(url) =>{
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    // Fazendo a função ser chamada sempre que a página for renderizada
    useEffect(() => {
        // Montando a url -> top_rated é da documentação e ${apikey} é para mandar o parametro como query string
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)

    },[])

    return(
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>

            <div className="movies-container">
            {/* Se o array estiver vazio */}
            {topMovies.length === 0 && <p>Carregando...</p>}
            
            {/* Se os topmovies estiverem preenchidos, percorrer por todos os itens */}
            {topMovies.length>0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home


