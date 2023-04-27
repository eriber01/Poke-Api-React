export default function SearchApi(pokeName){

    const api = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    
    const RequestError = {
        error: 404
    }

    return fetch(api)
    .then(res => res.json())
    .then(response => {
        return response;
        },
            (error) =>{
                return RequestError
            }
    )
}