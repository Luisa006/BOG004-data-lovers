import data from './data/lol/lol.js';
import { seeAssassinChampions, seeFighterChampions, seeMageChampions, seeSupChampions, seeTankchampions, seeMarkchampions, orderDifficulty, orderName, percentage, } from './data.js';
const todaData = Object.values(data.data);
const showData = (array) => {
    document.getElementById("root").innerHTML = "";
    array.forEach((champion) => {
        let target = document.createElement("div");
        let currentDiv = document.getElementById("root");
        target.classList.add("targetChampion");
        target.innerHTML = `
            <h2>${champion.name}</h2>
            <img class="frameImg" src="frame-line.png">            
            <img class="championImg" src="${champion.splash}"/>
            <img class="skullImg" src="calabera.png">
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
    document.getElementById("textPerc").innerText = `Recuerda que la respiración profunda evita el tilt
    `;
});
document.querySelector("#assassinChampions").addEventListener("click", () => {
    showData(seeAssassinChampions(todaData));
    activeButton("assassinChampions");
    let totalChamps = seeAssassinChampions(todaData);
    document.getElementById("textPerc").innerText = `El ${percentage(totalChamps)}% de los campeones son ASESINOS, estos se especializan en matar o desestabilizar objetivos de alto valor estratégico. Orientados a la infiltración, engaño, y movimiento, son cazadores oportunistas que buscan el momento favorable antes de entrar al combate.`;
});
document.querySelector("#fighterChampions").addEventListener("click", () => {
    showData(seeFighterChampions(todaData));
    activeButton("fighterChampions");
    let totalChamps = seeFighterChampions(todaData);
    document.getElementById("textPerc").innerText = `El ${percentage(totalChamps)}% de los campeones son LUCHADORES, tambien conocidos como Guerreros son un grupo diverso de combatientes de corto alcance que sobresalen tanto causando como resistiendo daño. `;
});

document.querySelector("#mageChampions").addEventListener("click", () => {
    showData(seeMageChampions(todaData));
    activeButton("mageChampions");
    let totalChamps = seeMageChampions(todaData);
    percentage(totalChamps);
    document.getElementById("textPerc").innerText = `El ${percentage(totalChamps)}% de los campeones son MAGOS, personajes enfocados en el gran alcance por norma general, que además poseen capacidades de daño en área gracias a sus habilidades y control de masas. `;
});

document.querySelector("#supChampions").addEventListener("click", () => {
    showData(seeSupChampions(todaData));
    activeButton("supChampions");
    let totalChamps = seeSupChampions(todaData);
    document.getElementById("textPerc").innerText = `El ${percentage(totalChamps)}% de los campeones son SOPORTES, se encargan de reforzar y/o apoyar a sus compaañeros de equipo mediante la utilidad brindada por sus bonificaciones, curaciones, escudos, inmovilizaciones a los enemigos y cualquier otro control de masas existente.`;
});

document.querySelector("#tankChampions").addEventListener("click", () => {
    showData(seeTankchampions(todaData));
    activeButton("tankChampions");
    let totalChamps = seeTankchampions(todaData);
    document.getElementById("textPerc").innerText = `El ${percentage(totalChamps)}% de los campeones son TANQUES, campeones de combate cuerpo a cuerpo que sacrifican el daño a cambio de un poderoso control de masas. Las subcategorías de tanques son Vanguardias y Protectores. `;
});

document.querySelector("#marksmanChampions").addEventListener("click", () => {
    showData(seeMarkchampions(todaData));
    activeButton("marksmanChampions");
    let totalChamps = seeMarkchampions(todaData);
    document.getElementById("textPerc").innerText = `El ${percentage(totalChamps)}% de los campeones son TIRADORES, también llamados ADC (Attack Damage Carry, por infligir principalmente daño físico) parte desde la calle inferior y exige tanto un gran conocimiento del rol como cierta habilidad mecánica, especialmente en lo que al dominio del 'kiteo' se refiere. `;
});
document.querySelector("#orderDif").addEventListener("click", () => {
    showData(orderDifficulty(todaData));
    orderButtons("orderDif");
    document.getElementById("textPerc").innerText ="";
});

document.querySelector("#orderNamebtn").addEventListener("click", () => {
    showData(orderName(todaData));
    orderButtons("orderNamebtn");
    document.getElementById("textPerc").innerText ="";
});
