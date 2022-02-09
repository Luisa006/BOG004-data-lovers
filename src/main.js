import { example } from './data.js';
import data from './data/lol/lol.js';
const todaData = Object.values(data.data); //obtener todos los valores de los subobjetos (objetos que están dentro del objeto)
const seeAllChampions = () =>{
    showData(todaData);
}
const seeTankchampions = () =>{
    let arrayTanks = todaData.filter(champion => champion.tags.includes("Tank"));
    console.log(arrayTanks);
    showData(arrayTanks);
}
const showData = (array) => {
    document.getElementById("root").innerHTML="";
    array.forEach((champion) => {
    let newTitle = document.createElement("h2");
    let newContent = document.createTextNode(champion.name);
    newTitle.appendChild(newContent);
    let currentDiv = document.getElementById("root");
    currentDiv.insertBefore(newTitle, currentDiv.parentNode[0]);
    });
}
document.querySelector("#allChampions").addEventListener("click", seeAllChampions);
document.querySelector("#tankChampions").addEventListener("click", seeTankchampions);
document.querySelector("#magicChampions").addEventListener("click", seeAllChampions);
