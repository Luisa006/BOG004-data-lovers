import data from './data/lol/lol.js';

export const seeAssassinChampions = (todaData) => {
  let arrayAssassin = todaData.filter(champion => champion.tags.includes("Assassin"));
  return arrayAssassin
};
export const seeFighterChampions = (todaData) => {
  let arrayFighter = todaData.filter(champion => champion.tags.includes("Fighter"));
  return arrayFighter
};
export const seeMageChampions = (todaData) => {
  let arrayMage = todaData.filter(champion => champion.tags.includes("Mage"));

  return arrayMage
};
export const seeSupChampions = (todaData) => {
  let arraySupport = todaData.filter(champion => champion.tags.includes("Support"));
  return arraySupport
};
export const seeTankchampions = (todaData) => {
  let arrayTank = todaData.filter(champion => champion.tags.includes("Tank"));
  return arrayTank
};
export const seeMarkchampions = (todaData) => {
  let arrayMarksman = todaData.filter(champion => champion.tags.includes("Marksman"));
  return arrayMarksman
};

const dataChamps = Object.values(data.data);
export const percentage = (totalC) => {
  let calculate = totalC.length;
  let total = Math.round((calculate * 100) / dataChamps.length);
  return total
}

export const orderDifficulty = (todaData) =>{
  let sortData = todaData.sort( (a,b) =>{
      if (a.info.difficulty > b.info.difficulty){
          return 1;
      }
      if (a.info.difficulty < b.info.difficulty){
          return -1;
      }
  })
  return sortData;
}
export const orderName = (todaData) =>{
  let sortData = todaData.sort( (a,b) =>{
      if (a.name > b.name){
          return 1;
      }
      if (a.name < b.name){
          return -1;
      }
      return 0
  })
  return sortData;
}