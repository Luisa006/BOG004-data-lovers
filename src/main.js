//import { example } from './data.js';
//import data from './data/lol/lol.js';
import {seeAllChampions,seeAssassinChampions, seeFighterChampions, seeMageChampions, seeSupChampions, seeTankchampions, seeMarkchampions} from './data.js';

export const showData = (array) => {
    document.getElementById("root").innerHTML="";
    array.forEach((champion) => {
      let newTitle = document.createElement("h2");
      let newContent = document.createTextNode(champion.name);
      newTitle.appendChild(newContent);
      let currentDiv = document.getElementById("root");
      currentDiv.insertBefore(newTitle, currentDiv.parentNode[0]);
      return(champion.name);
    });
};
document.querySelector("#allChampions").addEventListener("click", seeAllChampions);
document.querySelector("#assassinChampions").addEventListener("click", seeAssassinChampions);
document.querySelector("#fighterChampions").addEventListener("click", seeFighterChampions);
document.querySelector("#mageChampions").addEventListener("click", seeMageChampions);
document.querySelector("#supChampions").addEventListener("click", seeSupChampions);
document.querySelector("#tankChampions").addEventListener("click", seeTankchampions);
document.querySelector("#marksmanChampions").addEventListener("click", seeMarkchampions);