import { Link } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'
import { useState } from 'react';
// import { Container } from './styles';
import "./styles.css"

function Navbar() {
  // Fazendo a busca pelo search. Começando como string vazia
  const [search, setSearch] = useState("")

  return(
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie />MoviesLib</Link>
        </h2>
        
        <form>
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