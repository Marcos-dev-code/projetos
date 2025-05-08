
//seleciona todos os titulos de filtros pelo seu #id
const allCategories =document.querySelector("#allCategories")
const devices =document.querySelector("#devices")
const drones =document.querySelector("#drones")
const technology =document.querySelector("#technology")

//função reutilizável para esconder o filtro
function esconderFiltro(){
    devices.classList.add("hidden-filter")
    drones.classList.add("hidden-filter")
    technology.classList.add("hidden-filter")
}

//remove a classe hidden para outros filtros serem exibidos 
allCategories.addEventListener("click",()=>{
    devices.classList.remove("hidden-filter")
    drones.classList.remove("hidden-filter")
    technology.classList.remove("hidden-filter")
})

//fecha os filtros e altera para ao filtro : device
devices.addEventListener("click",(event)=>{
    esconderFiltro();
    //Altera o texto do filtro
    allCategories.innerText="Devices"
})

//fecha os filtros e altera para ao filtro : drones
drones.addEventListener("click",(event)=>{
    esconderFiltro();
    //Altera o texto do filtro
    allCategories.innerText="Drones"
})

//fecha os filtros e altera para ao filtro : tecnology
technology.addEventListener("click",(event)=>{
    esconderFiltro();
    //Altera o texto do filtro
    allCategories.innerText="Technology"
})
