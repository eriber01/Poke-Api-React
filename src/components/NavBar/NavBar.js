import React, {useState} from "react"

import SearchApi from '../../services/SearchApi'
import Card from '../Card/Card'

import './Header.css'

export default function NavBar(){

    const [searchState, setSearchState] = useState([])
    const [pokeDataState, setPokeDataState] = useState([])

    
    const handleSearch = (eve)=>{
        eve.preventDefault()
        
            SearchApi (searchState)
            .then(pokeData =>{
                if(pokeData.error === 404){
                    alert('Escribe bien el nombre del Pokemon para Buscarlo')
                }else{
                    setPokeDataState({
                        name: pokeData.name,
                        exp: pokeData.base_experience,
                        order: pokeData.order,
                        type: pokeData.types[0].type.name,
                        size: pokeData.height,
                        hp: pokeData.stats[0].base_stat,
                        attack: pokeData.stats[1].base_stat,
                        defe: pokeData.stats[2].base_stat,
                        img: pokeData.sprites.other.dream_world.front_default
                    });
                }
                    
            })
            
    }
    
    //toma los datos del input
    const handleChange = (eve)=>{
        const search = eve.target.value;
        setSearchState(search)
    }   


    return <>
    <header className="header">
        <nav>
            <ul>

                <div className='home'>
                    <li>HOME</li>
                </div>
                <form onSubmit={handleSearch} autoComplete='off'>
                    <input type='search' name='pokeName' value={searchState} onChange={handleChange} placeholder="Busca tu Pokemon Favorito" required ={true}/>
                    <button type="submit">Enviar</button>
                </form>
            </ul>
        </nav>
    </header>

    <Card data={pokeDataState}/>
    </>
}