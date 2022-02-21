import data from './data/lol/lol.js';
import { seeAssassinChampions, seeFighterChampions, seeMageChampions, seeSupChampions, seeTankchampions, seeMarkchampions, orderDifficulty, orderName } from './data.js';
const todaData = Object.values(data.data);
const nameData = Object.keys(data.data); //array con los nombres
console.log(nameData);
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
const activeButton = (button) => {
    allChampions.style.backgroundColor = "transparent";
    assassinChampions.style.backgroundColor = "transparent";
    fighterChampions.style.backgroundColor = "transparent";
    mageChampions.style.backgroundColor = "transparent";
    supChampions.style.backgroundColor = "transparent";
    tankChampions.style.backgroundColor = "transparent";
    marksmanChampions.style.backgroundColor = "transparent";
    button.style.backgroundColor = "#00aae4";
}
const orderButtons = (button) => {
    orderDif.style.backgroundColor = "transparent";
    orderNamebtn.style.backgroundColor = "transparent";
    allChampions.style.backgroundColor = "#00aae4";
    assassinChampions.style.backgroundColor = "transparent";
    fighterChampions.style.backgroundColor = "transparent";
    mageChampions.style.backgroundColor = "transparent";
    supChampions.style.backgroundColor = "transparent";
    tankChampions.style.backgroundColor = "transparent";
    marksmanChampions.style.backgroundColor = "transparent";
    button.style.backgroundColor = "#00aae4";

}

document.querySelector("#allChampions").addEventListener("click", () => {
    showData(todaData);
    activeButton(allChampions);
});
document.querySelector("#assassinChampions").addEventListener("click", () => {
    showData(seeAssassinChampions(todaData));
    activeButton(assassinChampions);
});
document.querySelector("#fighterChampions").addEventListener("click", () => {
    showData(seeFighterChampions(todaData));
    activeButton(fighterChampions);
});

document.querySelector("#mageChampions").addEventListener("click", () => {
    showData(seeMageChampions(todaData));
    activeButton(mageChampions);
});

document.querySelector("#supChampions").addEventListener("click", () => {
    showData(seeSupChampions(todaData));
    activeButton(supChampions);
});

document.querySelector("#tankChampions").addEventListener("click", () => {
    showData(seeTankchampions(todaData));
    activeButton(tankChampions);
});

document.querySelector("#marksmanChampions").addEventListener("click", () => {
    showData(seeMarkchampions(todaData));
    activeButton(marksmanChampions);
});
document.querySelector("#orderDif").addEventListener("click", () => {
    showData(orderDifficulty(todaData));
    orderButtons(orderDif);
});

document.querySelector("#orderNamebtn").addEventListener("click", () => {
    showData(orderName(todaData));
    orderButtons(orderNamebtn);

});
