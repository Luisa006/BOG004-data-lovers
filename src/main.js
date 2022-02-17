import data from './data/lol/lol.js';
import { seeAssassinChampions, seeFighterChampions, seeMageChampions, seeSupChampions, seeTankchampions, seeMarkchampions, orderDifficulty,  } from './data.js';
const todaData = Object.values(data.data);
const nameData = Object.keys(data.data); //array con los nombres
console.log (nameData);
console.log(todaData);
const showData = (array) => {
    document.getElementById("root").innerHTML = "";
    array.forEach((champion) => {
        let target = document.createElement("div");
        let currentDiv = document.getElementById("root");
        target.classList.add("targetChampion");
        target.innerHTML = `
            <h2>${champion.name}</h2>
            <img src="${champion.splash}"/>
            <p>dificultad: ${champion.info.difficulty}</p>`;
        currentDiv.insertBefore(target, currentDiv.parentNode[0]);
    });
}
showData(todaData);
document.querySelector("#allChampions").addEventListener("click", () => {
    showData(todaData);
});
document.querySelector("#assassinChampions").addEventListener("click", () => {
    showData(seeAssassinChampions(todaData));
});
document.querySelector("#fighterChampions").addEventListener("click", () => {
    showData(seeFighterChampions(todaData));
});
document.querySelector("#mageChampions").addEventListener("click", () => {
    showData(seeMageChampions(todaData));
});
document.querySelector("#supChampions").addEventListener("click", () => {
    showData(seeSupChampions(todaData));
});
document.querySelector("#tankChampions").addEventListener("click", () => {
    showData(seeTankchampions(todaData));
    // document.getElementsByClassName("boton").innerHTML = "";
    // tankChampions.style.backgroundColor="#00aae4";
});
document.querySelector("#marksmanChampions").addEventListener("click", () => {
    showData(seeMarkchampions(todaData));
    // document.getElementsByClassName("boton").innerHTML = "";
    // marksmanChampions.style.backgroundColor="#00aae4";
});
document.querySelector("#orderDif").addEventListener("click", () => {
    showData(orderDifficulty(todaData));
});

document.querySelector("#orderName").addEventListener("click", () => {
    showData(orderName(todaData));
});
