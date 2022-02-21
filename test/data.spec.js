import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { seeAssassinChampions, seeFighterChampions, seeMageChampions, seeSupChampions, seeTankchampions, seeMarkchampions, orderDifficulty } from '../src/data.js';

const testDate = [
  {
    version: "6.24.1",
    id: "Aatrox",
    key: "266",
    name: "Aatrox",
    title: "the Darkin Blade",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    blurb:
      "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ["Fighter", "Tank"],
    partype: "BloodWell",
  },
  {
    version: "6.24.1",
    id: "Ahri",
    key: "103",
    name: "Ahri",
    title: "the Nine-Tailed Fox",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    blurb:
      "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ["Mage", "Assassin"],
    partype: "MP",
  },
  {
    version: "6.24.1",
    id: "Akali",
    key: "84",
    name: "Akali",
    title: "the Fist of Shadow",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    blurb:
      "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...",
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ["Assassin"],
    partype: "Energy",
  },
  {
    version: "6.24.1",
    id: "Ashe",
    key: "22",
    name: "Ashe",
    title: "the Frost Archer",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    blurb:
      "With each arrow she fires from her ancient ice-enchanted bow, Ashe proves she is a master archer. She chooses each target carefully, waits for the right moment, and then strikes with power and precision. It is with this same vision and focus that she ...",
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
    tags: ["Marksman", "Support"],
    partype: "MP",
  }
];
const assassinFilter = [
  {
    version: "6.24.1",
    id: "Ahri",
    key: "103",
    name: "Ahri",
    title: "the Nine-Tailed Fox",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    blurb:
      "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ["Mage", "Assassin"],
    partype: "MP",
  },
  {
    version: "6.24.1",
    id: "Akali",
    key: "84",
    name: "Akali",
    title: "the Fist of Shadow",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    blurb:
      "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...",
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ["Assassin"],
    partype: "Energy",
  }
];
const fighterFilter = [
  {
    version: "6.24.1",
    id: "Aatrox",
    key: "266",
    name: "Aatrox",
    title: "the Darkin Blade",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    blurb:
      "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ["Fighter", "Tank"],
    partype: "BloodWell",
  },
];
const mageFilter = [
  {
    version: "6.24.1",
    id: "Ahri",
    key: "103",
    name: "Ahri",
    title: "the Nine-Tailed Fox",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    blurb:
      "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ["Mage", "Assassin"],
    partype: "MP",
  },
];
const supFilter = [
  {
    version: "6.24.1",
    id: "Ashe",
    key: "22",
    name: "Ashe",
    title: "the Frost Archer",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    blurb:
      "With each arrow she fires from her ancient ice-enchanted bow, Ashe proves she is a master archer. She chooses each target carefully, waits for the right moment, and then strikes with power and precision. It is with this same vision and focus that she ...",
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
    tags: ["Marksman", "Support"],
    partype: "MP",
  },
];
const tankFilter = [
  {
    version: "6.24.1",
    id: "Aatrox",
    key: "266",
    name: "Aatrox",
    title: "the Darkin Blade",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    blurb:
      "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ["Fighter", "Tank"],
    partype: "BloodWell",
  },
];
const marksFilter = [
  {
    version: "6.24.1",
    id: "Ashe",
    key: "22",
    name: "Ashe",
    title: "the Frost Archer",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    blurb:
      "With each arrow she fires from her ancient ice-enchanted bow, Ashe proves she is a master archer. She chooses each target carefully, waits for the right moment, and then strikes with power and precision. It is with this same vision and focus that she ...",
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
    tags: ["Marksman", "Support"],
    partype: "MP",
  },
];
const testDateOrder =  [
  {
    version: "6.24.1",
    id: "Aatrox",
    key: "266",
    name: "Aatrox",
    title: "the Darkin Blade",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    blurb:
      "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ["Fighter", "Tank"],
    partype: "BloodWell",
  },
  {
    version: "6.24.1",
    id: "Ashe",
    key: "22",
    name: "Ashe",
    title: "the Frost Archer",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    blurb:
      "With each arrow she fires from her ancient ice-enchanted bow, Ashe proves she is a master archer. She chooses each target carefully, waits for the right moment, and then strikes with power and precision. It is with this same vision and focus that she ...",
    info: {
      attack: 7,
      defense: 3,
      magic: 2,
      difficulty: 4
    },
    tags: ["Marksman", "Support"],
    partype: "MP",
  },
  {
    version: "6.24.1",
    id: "Ahri",
    key: "103",
    name: "Ahri",
    title: "the Nine-Tailed Fox",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    blurb:
      "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...",
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ["Mage", "Assassin"],
    partype: "MP",
  },
  {
    version: "6.24.1",
    id: "Akali",
    key: "84",
    name: "Akali",
    title: "the Fist of Shadow",
    img:
      "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png",
    splash:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    blurb:
      "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...",
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ["Assassin"],
    partype: "Energy",
  },
];

describe('seeAssassinChampions', () => {
  it('is a function', () => {
    expect(typeof seeAssassinChampions).toBe('function');
  });
  it('retuns `un array`', () => {
    expect(seeAssassinChampions(testDate)).toEqual(assassinFilter);
  })
});
describe('seeFighterChampions', () => {
  it('is a function', () => {
    expect(typeof seeFighterChampions).toBe('function');
  });
  it('retuns `un array`', () => {
    expect(seeFighterChampions(testDate)).toEqual(fighterFilter);
  })
});
describe('seeMageChampions', () => {
  it('is a function', () => {
    expect(typeof seeMageChampions).toBe('function');
  });
  it('retuns `un array`', () => {
    expect(seeMageChampions(testDate)).toEqual(mageFilter);
  })
});
describe('seeSupChampions', () => {
  it('is a function', () => {
    expect(typeof seeSupChampions).toBe('function');
  });
  it('retuns `un array`', () => {
    expect(seeSupChampions(testDate)).toEqual(supFilter);
  })
});
describe('seeTankchampions', () => {
  it('is a function', () => {
    expect(typeof seeTankchampions).toBe('function');
  });
  it('retuns `un array`', () => {
    expect(seeTankchampions(testDate)).toEqual(tankFilter);
  })
});
describe('seeMarkchampions', () => {
  it('is a function', () => {
    expect(typeof seeMarkchampions).toBe('function');
  });
  it('retuns `un array`', () => {
    expect(seeMarkchampions(testDate)).toEqual(marksFilter);
  })
});
describe('orderDifficulty', () => {
  it('is a function', () => {
    expect(typeof orderDifficulty).toBe('function');
  });
  it('retuns `retorna data ordenada`', () => {
    expect(orderDifficulty(testDate)).toEqual(testDateOrder);
  })
});