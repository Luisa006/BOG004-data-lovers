// export const example = () => {
//   return 'example';
// };
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