// var nome = "Juliana Brito";
// var n1 = 28;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade);
// alert(idade + idade2);
// console.log(nome);
// console.log(n1 *n2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toLocaleLowerCase());
// console.log(frase.toUpperCase());

// var lista = ["maçã", "pêra", "laranja"];
//console.log(lista);
//alert(lista[1]);
// lista.push("uva");
// console.log(lista);
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" - "));

// var fruta = {nome:"maçã", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);

// var idade = prompt("Qual a sua idade? ");
// if (idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade")
// }

// var count = 0;
// while(count <= 5) {
//     console.log(count);
//     count++;
// }

// for (count = 0; count <= 7; count++){
//     console.log(count);
// }

// var d = new Date();
// console.log(d.getMonth()+1);
// console.log(d.getMinutes());
// console.log(d.getDay());
// console.log(d.getHours());

// function setReplace(frase, nome, novo_nome) { 
//     return frase.replace(nome, novo_nome);
// }
// console.log(setReplace("Vai Japão", "Japão", "Brasil"));

// function soma(n1, n2) {
//     return n1 + n2;
// }
// console.log(soma(5, 10));

// function validaIdade(idade) {
//     var validar;
//     if(idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }
// var idade = prompt("Qual a sua idade");
// console.log(validaIdade(idade));

function clicou() {
    //alert("Obrigado por clicar");
    //console.log(document.getElementById("agradecimento"));
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar() {
    window.open("https://www.github.com");
    window.location.href = "https://www.github.com";
}

function trocar(elemento) {
    //alert("trocar texto");
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    // document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() { 
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}