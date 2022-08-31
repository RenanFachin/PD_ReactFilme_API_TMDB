import { Link, useNavigate } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { useState } from 'react';
// import { Container } from './styles';
import "./styles.css"

function Navbar() {
  // Fazendo a busca pelo search. Começando como string vazia
  const [search, setSearch] = useState("")
  
  // Funções de redirecioanmento
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // Fazendo o forms não fazer o submit em padrão http
    e.preventDefault()
    console.log(search)
  }

  return(
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie />MoviesLib</Link>
        </h2>
        
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Busque um filme' 
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>

      </nav>
  );
}

export default Navbar;