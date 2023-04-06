const nameList = ["Naras","Narebas", "Pedro"]

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");

//Realiza a chamada de função ao clicar no botão.
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

//Função adiciona o nome da lista por meio do método push
function adicionarNome(listNew = []){
    let new_name = searchField.value;
    listNew = nameList;
    listNew.push(new_name);

    listEl.innerHTML="";
    for (let i=0;i<listNew.length;i++){
        let items = document.createElement("li");
        items.innerHTML = listNew[i];
        listEl.appendChild(items);
    }
}

function removerNome(listNew = []){
    let new_name = searchField.value;
    listNew = nameList;
    listNew.pop(new_name);

    listEl.innerHTML="";
    for (let i=0;i<listNew.length;i++){
        let items = document.createElement("li");
        items.innerHTML = listNew[i];
        listEl.appendChild(items);
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

function SelecNome(listNew=[]){
    let nome = searchField.value;
    listNew = nameList;
    //Elimina o elemento pela posição que o nome digitado no input está
    let novo_array =listNew.splice(listNew.indexOf(nome),1);

    listEl.innerHTML="";
    for (let i=0;i<listNew.length;i++){
        let items = document.createElement("li");
        items.innerHTML = listNew[i];
        listEl.appendChild(items);
    }
}

    
    
