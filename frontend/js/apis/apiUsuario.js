const urlVestidos = "http://localhost:3309/api/search/vestidos/vestidos"
const urlTrajes = "http://localhost:3309/api/search/vestidos/trajes"
const urlPajecitas = "http://localhost:3309/api/search/vestidos/pajecitas"
const urlAccesorios = "http://localhost:3309/api/accesorios"
const urlCotizaciones = "http://localhost:3309/api/cotizaciones"


export const getVestidos = async ()=>{
    try {  
        const vestidos = await fetch(urlVestidos);
        const dataVestidos = await vestidos.json();
        return dataVestidos.results;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}
export const getTrajes = async ()=>{
    try {  
        const trajes = await fetch(urlTrajes);
        const dataTrajes = await trajes.json();
        return dataTrajes.results;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}
export const getPajecitas = async ()=>{
    try {  
        const pajecitas = await fetch(urlPajecitas);
        const dataPajecitas = await pajecitas.json();
        return dataPajecitas.results;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}
export const getAccesorios = async ()=>{
    try {  
        const accesorios = await fetch(urlAccesorios);
        const dataAccesorios = await accesorios.json();
        return dataAccesorios;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}
export const getCotizacion = async ()=>{
    try {  
        const cotizacion = await fetch(urlCotizaciones);
        const dataCotizacion = await cotizacion.json();
        return dataCotizacion.cotizaciones;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
}