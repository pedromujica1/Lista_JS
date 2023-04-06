//push
//pop
//botstrap

const nameList = ["Aline","Otavio","Camila","Nareba","Jean","Julio","Julio Rodalo","Rany","Ti"]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");

// const add = document.getElementById("add");
// const filtra = document.getElementById("filtra");
// const remove = document.getElementById("remove");
// const selec = document.getElementById("selec");

add.addEventListener("click",adicionarNome);
filtra.addEventListener("click",inputHandler);
remove.addEventListener("click",removerNome);
selec.addEventListener("click", SelecNome);

this.fillList()

function fillList(list=nameList){
    listEl.innerHTML="";
    for (let i=0;i<list.length;i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listEl.appendChild(listItems);
    }
}
function inputHandler(){
    searchField.addEventListener("input",inputHandler);
    const filteredlist = nameList.filter(el => {
    const listItems = el.toLowerCase(); 
    const searchWord = searchField.value.toLowerCase();
    return listItems.includes(searchWord)});
    fillList(filteredlist);
}
function adicionarNome(lista = []){
    let nova = searchField.value;
    lista = nameList;
    lista.push(nova);
    //console.log(lista);

    listEl.innerHTML="";
    for (let i=0;i<lista.length;i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = lista[i];
        listEl.appendChild(listItems);
    }
}

function removerNome(listaR = []){
    let nova = searchField.value;
    listaR = nameList;
    listaR.pop(nova);
    //console.log(lista);

    listEl.innerHTML="";
    for (let i=0;i<listaR.length;i++){
        let listItems = document.createElement("li");
        listItems.innerHTML = listaR[i];
        listEl.appendChild(listItems);
    }
}

function SelecNome(){



}

    
    
