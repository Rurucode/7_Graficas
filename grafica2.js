let api = async () => {
    try{
        let respuesta = await fetch("https://swapi.dev/api/films");
        let aJson = await respuesta.json();
        let personajes = aJson.results[0].characters;
        let listaPersonajes = []
        let personajePelis = []
        for(let i = 0; i < 8; i++){
           let perso = await fetch(personajes[i]);
           let jsooon = await perso.json();
           listaPersonajes.push(jsooon.name)
           personajePelis.push(jsooon.films.length)
        }
        // let objetoTotal = {
        //     personajes: listaPersonajes,
        //     personajePelis: listaPersonajePelis

        // }
        return personajePelis;
    }
    
    catch(error){
        console.log(`TIENES UN ERROOOOR: ${error.stack}`);
    }
}

api()
.then(datos=>{
    console.log(datos)
})