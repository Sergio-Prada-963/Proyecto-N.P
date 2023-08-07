import { getAccesorios, getVestidos, getTrajes, getPajecitas, getCotizacion } from "../apis/apiUsuario.js";
import {detallesAccesorios, detalles} from './detalles.usuario.js'

export async function insertVestidos(){
    const vestidos = await getVestidos();
    const card = document.querySelector('#containerV');
    card.innerHTML = '';
    vestidos.forEach(element => {
        const {_id, nombreV, categoriaV, imgV, detallesV, stock, paraV, precioV, estadoV} = element
        card.innerHTML += `
        <figure class="gridElement element1 card animated" _id="${_id}" nombreV="${nombreV}" categoriaV="${categoriaV}" imgV="${imgV}" detallesV="${detallesV}" stock="${stock}" paraV="${paraV}" precioV="${precioV}" estadoV="${estadoV}">
            <a class="itemContainer" href="#detallesss">
                <img src="../../img/${imgV}" alt="vestido">
                <p class="item vestido1">${nombreV}</p>
            </a>
        </figure>
        `
    });detalles()
}
export async function insertTrajes(){
    const trajes = await getTrajes();
    const card = document.querySelector('#containerV');
    card.innerHTML = '';
    trajes.forEach(element => {
        const {_id, nombreV, categoriaV, imgV, detallesV, stock, paraV, precioV, estadoV} = element
        card.innerHTML += `
        <figure class="gridElement element1 card animated" _id="${_id}" nombreV="${nombreV}" categoriaV="${categoriaV}" imgV="${imgV}" detallesV="${detallesV}" stock="${stock}" paraV="${paraV}" precioV="${precioV}" estadoV="${estadoV}">
            <a class="itemContainer" href="#detallesss">
                <img src="../../img/${imgV}" alt="vestido">
                <p class="item vestido1">${nombreV}</p>
            </a>
        </figure>
        `
    });detalles()
}
export async function insertPajecitas(){
    const pajecitas = await getPajecitas();
    const card = document.querySelector('#containerV');
    card.innerHTML = '';
    pajecitas.forEach(element => {
        const {_id, nombreV, categoriaV, imgV, detallesV, stock, paraV, precioV, estadoV} = element
        card.innerHTML += `
        <figure class="gridElement element1 card animated" _id="${_id}" nombreV="${nombreV}" categoriaV="${categoriaV}" imgV="${imgV}" detallesV="${detallesV}" stock="${stock}" paraV="${paraV}" precioV="${precioV}" estadoV="${estadoV}">
            <a class="itemContainer" href="#detallesss">
                <img src="../../img/${imgV}" alt="vestido">
                <p class="item vestido1">${nombreV}</p>
            </a>
        </figure>
        `
    });detalles()
}
export async function insertAccesorios(){
    const accesorios = await getAccesorios();
    const card = document.querySelector('#containerV');
    card.innerHTML = '';
    accesorios.forEach(element => {
        const {_id, nombre, imgAccesorio, aplicable, valorExtra} = element
        card.innerHTML += `
        <figure class="gridElement element1 card animated" _id="${_id}" nombre="${nombre}" imgAccesorio="${imgAccesorio}" aplicable="${aplicable}" valorExtra="${valorExtra}">
            <a class="itemContainer" href="#detallesss">
                <img src="../../img/${imgAccesorio}" alt="vestido">
                <p class="item vestido1">${nombre}</p>
            </a>
        </figure>
        `
    });detallesAccesorios()
}
export async function cotizaciones(){
    const cotizaciones = await getCotizacion();
    const listado = document.querySelector('#listas');
    cotizaciones.forEach(element => {
        
    });
    listado.innerHTML = `
    cotizaciones
    `;
}