import './Card.css'
import handleText from '../../services/dowloadPokemon'

export default function Card({data}){

    const [dataState] = ([data])


    return <>
        <div className='card-container'>
            <div className='card'>
                <strong className='name'>{dataState.name}</strong> <p>Exp: {dataState.exp}</p>
                <div className='imgPoke'>
                    
                    <img alt="Imagen Pokemon" src={dataState.img || '/img/pokemon4.png'}/>
                    <button onClick={(e)=>{handleText(dataState)}}  className='descargar'>{dataState.name || 'Busca el Pokemon para Descargarlo' } </button>
                </div>
                <div className='dataPoke'>
                    <div className='pokedexOrder'>
                        <strong className='order'>#{dataState.order}</strong>
                        <strong className='type' >{dataState.type}</strong>
                    </div>
                    <div className='atributos'>
                        <p>Size <br/> {dataState.size}</p>
                    
                        <p>Hp <br/> {dataState.hp}</p>
                        <p>Attack <br/> {dataState.attack}</p>
                        <p>Defends <br/> {dataState.defe}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}