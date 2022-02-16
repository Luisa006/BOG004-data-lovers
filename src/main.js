import data from './data/lol/lol.js';
import { seeAssassinChampions, seeFighterChampions, seeMageChampions, seeSupChampions, seeTankchampions, seeMarkchampions } from './data.js';
const todaData = Object.values(data.data);
console.log(todaData);
const showData = (array) => {
    document.getElementById("root").innerHTML = "";
    array.forEach((champion) => {
        let target = document.createElement("div");
        let currentDiv = document.getElementById("root");
        target.classList.add("targetChampion");
        target.innerHTML = `
            <h2>${champion.name}</h2>
            <img src="${champion.splash}"/>`;
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
});
document.querySelector("#marksmanChampions").addEventListener("click", () => {
    showData(seeMarkchampions(todaData));
});