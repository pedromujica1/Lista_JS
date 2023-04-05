//push
//pop
//botstrap

var nameList = ["Aline","Otavio","Camila","Nareba","Jean","Julio","Julio Rodalo","Rany","Ti"]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");
add.addEventListener("click",adicionarNome);
filtra.addEventListener("click",inputHandler);

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
    return listItems.includes(searchWord)     });
    fillList(filteredlist);
}
function adicionarNome(list = nameList){
    l
    
}

    
    
