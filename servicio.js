let uri="https://api.spotify.com/v1/artists/7Ey4PD4MYsKc5I2dolUwbH/top-tracks?market=us";

let token="Bearer BQDHqbbffiW4HQoFy-MhgBzBB2-gkUCRwppKDQIvnkNCRXwu0LGf_C6_UxYpG0_V14d9Qkeu57ES5G16JIZUMlFjwNiYnFK5DkDESWtzzUUhJrDo7CFFVQmPcLieTWQJyA7mLW_IfLBu0lFPqT-KIrqhuiLDg6c";

let parametrosPeticion={
 method:"GET",
 headers:{
    Authorization:token
 }

}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);//Objeto
    pintarDatos(respuesta.tracks);
    /*console.log(respuesta.tracks);//arreglo
    console.log(respuesta.tracks[0]);//posicion del arreglo
    console.log(respuesta.tracks[0].name);
    console.log(respuesta.tracks[0].preview_url);
    console.log(respuesta.tracks[0].album.images[0].url);*/
})
.catch(function(error){
    console.log(error);
})

function pintarDatos(datos){

    let fila=document.getElementById("fila");
    datos.forEach(function(cancion){
        
        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen=document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=cancion.album.images[0].url;

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let titulo=document.createElement("h1")
        titulo.classList.add("")



 
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
      




    })

}