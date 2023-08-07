export function detallesAccesorios(){
    const producto = document.querySelector('#containerV');
    producto.addEventListener('click',(e)=>{
        if(e.target.classList.contains('gridElement')){
            const container = document.querySelector('.options')
            container.innerHTML = `
            <div class="newD">
                <div class="imgProducto"><img src="../../img/${e.target.getAttribute('imgAccesorio')}" alt="imagen"></div>
                <div class="dataProducto">
                    <h1>${e.target.getAttribute('nombre')}</h1>
                    <h3>Para: ${e.target.getAttribute('aplicable')}</h3>
                    <h2>Valor Extra: $${e.target.getAttribute('valorExtra')}</h2>
                    <div>
                        <button>Comprar</button><button>Añadir</button><button id="openModalBtn">Cotizar</button>
                    </div>
                </div>
            </div>
            `}
             //modal
             modal()
        })
}
export function detalles(){
    const producto = document.querySelector('#containerV');
    producto.addEventListener('click',(e)=>{
        if(e.target.classList.contains('gridElement')){
            const container = document.querySelector('.options')
            container.innerHTML = `
            <div class="newD">
                <div class="imgProducto"><img src="../../img/${e.target.getAttribute('imgV')}" alt="imagen"></div>
                <div class="dataProducto">
                    <h1>${e.target.getAttribute('nombreV')}</h1>
                    <h3>Detalles: ${e.target.getAttribute('detallesV')}</h3>
                    <h3>Stock: ${e.target.getAttribute('stock')}</h3>
                    <h3>Estado: ${e.target.getAttribute('estadoV')}</h3>
                    <h2>Precio: $${e.target.getAttribute('precioV')}</h2>
                    <div>
                        <button>${e.target.getAttribute('paraV')}</button><button>Añadir</button><button id="openModalBtn">Cotizar</button>
                    </div>
                </div>
            </div>
            `}
            //modal
            modal()
        })
}

function modal(){
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');
    const dataInput = document.getElementById('dataInput');
    
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    });
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }
    });
    document.getElementById('submitBtn').addEventListener('click', () => {
        const inputData = dataInput.value;
        alert(`Dato ingresado: ${inputData}`);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}