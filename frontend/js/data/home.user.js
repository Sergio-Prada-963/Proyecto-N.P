import {insertVestidos, insertTrajes, insertPajecitas, insertAccesorios} from "./insert.usuario.js"

document.addEventListener('DOMContentLoaded',insertVestidos);

const viewData = document.querySelector('.links')
viewData.addEventListener('click',(e)=>{
    let data = e.target.getAttribute('class');
    switch (data) {
        case 'Vestidos':
            insertVestidos()
        break;
        case 'Trajes':
            insertTrajes();
        break;
        case 'Pajecitas':
            insertPajecitas()
        break;
        case 'Aplicaciones':
            insertAccesorios();
        break;
        default:
            insertVestidos()
            break;
    }
})


