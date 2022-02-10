// estas funciones son de ejemplo
import data from './data/lol/lol.js';
import {showData} from './main.js';

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

const todaData = Object.values(data.data); //obtener todos los valores de los subobjetos (objetos que están dentro del objeto)
export const seeAllChampions = () =>{
  return showData(todaData);
}

export const seeAssassinChampions = () =>{
  let arrayAssassin = todaData.filter(champion => champion.tags.includes("Assassin"));
  //console.log(arrayAssassin.length);
  return showData(arrayAssassin); 
}

export const seeFighterChampions = () =>{
  let arrayFighter = todaData.filter(champion => champion.tags.includes("Fighter"));
  return showData(arrayFighter);
}

export const seeMageChampions = () =>{
  let arrayMage = todaData.filter(champion => champion.tags.includes("Mage"));
  return showData(arrayMage); 
}

export const seeSupChampions = () =>{
  let arraySup = todaData.filter(champion => champion.tags.includes("Support"));
  return showData(arraySup); 
}

export const seeTankchampions = () =>{
  let arrayTanks = todaData.filter(champion => champion.tags.includes("Tank"));
  return showData(arrayTanks); 
}

export const seeMarkchampions = () =>{
  let arrayMark = todaData.filter(champion => champion.tags.includes("Marksman"));
  return showData(arrayMark); 
}