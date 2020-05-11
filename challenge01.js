function newSquare(){
    var squaresArea = document.querySelector('#container');
    var newBox = document.createElement('p');
    newBox.style.width="100px";
    newBox.style.height="100px";
    newBox.style.backgroundColor='#f00';
    newBox.onmouseover=function(){this.style.background=""+getRandomColor() +""}
    squaresArea.appendChild(newBox);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function montaLista(array) {
    var listArray = document.querySelector('#containerList');
    var lista = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');

        item.appendChild(document.createTextNode(array[i]));

        lista.appendChild(item);
    }

        listArray.appendChild(lista);
}
function adicionar() {
    var inputName = document.querySelector('input[name="nome"]').value;
    var ulNames = document.querySelector('ul');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(inputName));
    ulNames.appendChild(item);
    document.querySelector('input[name="nome"]').value='';

}

var nomes = ["Diego", "Gabriel", "Lucas"];
montaLista(nomes);