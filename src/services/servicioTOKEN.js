export async function servicioTOKEN(){

    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=06e6022d16fa44f08025583dbd79d337"
    const DATO3="client_id=d11d3ec34d204c13963ebe8378a87a1f"

    //peticion
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }

    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    console.log(datos)
    datos=datos.token_type+' '+datos.acess_token;
    console.log(datos);

   return datos
}