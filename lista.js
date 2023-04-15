//Lista inicial
const nameList = []

const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");


//Quando o botão for clicado, a função adicionarNome vai ser executada
add.addEventListener("click",adicionarNome);
filtra.addEventListener("click",inputHandler);
remove.addEventListener("click",removerNome);
selec.addEventListener("click", SelecNome);
remove_ultimo.addEventListener("click", removerUltimo);


//Função para mostrar a lista
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

    //alerta caso a lista esteja vazia
    if (new_name.length >0) {
        listNew.push(new_name);
    }
    else{
        alert("Não se esquece de adicionar um nome!")
    }
    
    listEl.innerHTML="";
    for (let i=0;i<listNew.length;i++){
        let items = document.createElement("li");
        items.innerHTML = listNew[i];
        listEl.appendChild(items);
    }
    searchField.value = "";
}

//Função inputHandler para filtrar a lista.
function inputHandler(){
    searchField.addEventListener("input",inputHandler);
    const filteredlist = nameList.filter(el => {
    const listItems = el.toLowerCase(); 
    const searchWord = searchField.value.toLowerCase();
    return listItems.includes(searchWord)});
    fillList(filteredlist);
}


//Função para exibir os nomes selecionados por meio da adição de classe no css (normal-name e selected-name)
function SelecNome(){
    
    //Captura os elementos da lista no HTML
    let selecao = document.querySelectorAll("li")

    if (selecao.length == 0) {
        alert("Adicione nomes na lista para selcionar!")     
        return                                        
    }
    //variável auxiliar para indicar linha selecionada
    let aux = -1

    // percorre a lista de elementos da li (Ou seja lista do html)
    for (let i = 0; i < selecao.length; i++) {
        // se tag é da class tarefa-selecionada (está selecionada)
        if (selecao[i].className == "name-selected") 
        {
            selecao[i].className = "normal-name" //define a troca para o nome não selecionado  
            aux = i //indice do número selecionado
            break                                     
        }
    }

    // Definição da volta da linha para a primeira posição
    if (aux == selecao.length - 1) {
        aux = -1
    }
    //Define nome selcionado com a classe name-selected do css
    selecao[aux + 1].className = "name-selected" 
}

function removerNome(){
    //Captura os elementos da lista no HTML
    let selecao = document.querySelectorAll("li");
    let nome_removido = false;
    let indice = -1
    
    //percore os elementos do li
    for (let i = 0; i < selecao.length; i++) {
        //Se o nome for selecionado, ocorrera o salvamento do indice e a mudança da variavel booleana
        if (selecao[i].className == "name-selected") 
        {
            nome_removido = true;
            indice = i;
        }
    }

    //alerta para lista vazia
    if (indice == -1) {             
        alert("Selecione uma tarefa para removê-la...")
        return
    }
    //Se ocorreu a mudança na variavel booleana o elemento sera removido
    if (nome_removido == true){
        listEl.removeChild(selecao[indice]);
    }
}

function removerUltimo(listNew=[]){
    let new_name = searchField.value;
    listNew = nameList;
    //alerta caso a lista estaja vazia
    if (new_name.length >0) {
        listNew.pop(new_name);
    }
    else{
        alert("você é burro? Adicione nomes na lista!")
    }

    listEl.innerHTML="";
    for (let i=0;i<listNew.length;i++){
        let items = document.createElement("li");
        items.innerHTML = listNew[i];
        listEl.appendChild(items);
    }
}