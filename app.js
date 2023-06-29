import {createServer} from 'http';
import https from 'https';

//Creo el servidor
let myServer = createServer((req, res) => {
    let datos = "";
    https.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-03-03&end_date=2023-03-02&api_key=jzJcEZzNKHVzkpaATbJfXybJZhvPdyamfaldIZh6', (peticion)=>{
        peticion.on("data", (chunk)=>{
            datos+=chunk;
        })
        peticion.on("end", ()=>{
            res.end(datos);
        })
    }).on("error", (err) => {
        console.log("Error: "+err.message);
    })
})
//configuro el servidor
const config = {
    hostname: "127.0.0.1",
    port: 4555
}
//Levanto el servidor
myServer.listen(config, ()=>{
    console.log(`Servidor: http://${config.hostname}:${config.port}/`)
})