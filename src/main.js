import data from './data/lol/lol.js';
import { seeAssassinChampions, seeFighterChampions, seeMageChampions, seeSupChampions, seeTankchampions, seeMarkchampions, orderDifficulty, orderName, percentage, } from './data.js';
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
            <img class="championImg" src="${champion.splash}"/>
            <img class="skullImg" src="esqueleto.png">
            <p> dificultad: ${champion.info.difficulty}</p>`;
        currentDiv.insertBefore(target, currentDiv.parentNode[0]);
    });
}
showData(todaData);
const activeButton = (button) => {
    document.getElementById("allChampions").style.backgroundColor = "transparent";
    document.getElementById("assassinChampions").style.backgroundColor = "transparent";
    document.getElementById("fighterChampions").style.backgroundColor = "transparent";
    document.getElementById("mageChampions").style.backgroundColor = "transparent";
    document.getElementById("supChampions").style.backgroundColor = "transparent";
    document.getElementById("tankChampions").style.backgroundColor = "transparent";
    document.getElementById("marksmanChampions").style.backgroundColor = "transparent";
    document.getElementById(button).style.backgroundColor = "#00aae4";
}
const orderButtons = (button) => {
    document.getElementById("orderDif").style.backgroundColor = "transparent";
    document.getElementById("orderNamebtn").style.backgroundColor = "transparent";
    document.getElementById("allChampions").style.backgroundColor = "#00aae4";
    document.getElementById("assassinChampions").style.backgroundColor = "transparent";
    document.getElementById("fighterChampions").style.backgroundColor = "transparent";
    document.getElementById("mageChampions").style.backgroundColor = "transparent";
    document.getElementById("supChampions").style.backgroundColor = "transparent";
    document.getElementById("tankChampions").style.backgroundColor = "transparent";
    document.getElementById("marksmanChampions").style.backgroundColor = "transparent";
    document.getElementById(button).style.backgroundColor = "#967539";
}

document.querySelector("#allChampions").addEventListener("click", () => {
    showData(todaData);
    activeButton("allChampions");
});
document.querySelector("#assassinChampions").addEventListener("click", () => {
    showData(seeAssassinChampions(todaData));
    activeButton("assassinChampions");
    let totalChamps = seeAssassinChampions(todaData);
    percentage(totalChamps);
});
document.querySelector("#fighterChampions").addEventListener("click", () => {
    showData(seeFighterChampions(todaData));
    activeButton("fighterChampions");
    let totalChamps = seeFighterChampions(todaData);
    percentage(totalChamps);
});

document.querySelector("#mageChampions").addEventListener("click", () => {
    showData(seeMageChampions(todaData));
    activeButton("mageChampions");
    let totalChamps = seeMageChampions(todaData);
    percentage(totalChamps);
});

document.querySelector("#supChampions").addEventListener("click", () => {
    showData(seeSupChampions(todaData));
    activeButton("supChampions");
    let totalChamps = seeSupChampions(todaData);
    percentage(totalChamps);
});

document.querySelector("#tankChampions").addEventListener("click", () => {
    showData(seeTankchampions(todaData));
    activeButton("tankChampions");
    let totalChamps = seeTankchampions(todaData);
    percentage(totalChamps);
});

document.querySelector("#marksmanChampions").addEventListener("click", () => {
    showData(seeMarkchampions(todaData));
    activeButton("marksmanChampions");
    let totalChamps = seeMarkchampions(todaData);
    percentage(totalChamps);
    
    

    

    /*return totalChamps.length*/

});
document.querySelector("#orderDif").addEventListener("click", () => {
    showData(orderDifficulty(todaData));
    orderButtons("orderDif");
});

document.querySelector("#orderNamebtn").addEventListener("click", () => {
    showData(orderName(todaData));
    orderButtons("orderNamebtn");

});
