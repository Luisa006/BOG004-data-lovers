import { example, anotherExample, seeAssassinChampions } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

describe('seeAssassinChampions', () =>{
  it('seeAssassinChampions es un objeto', () =>{
    expect(typeof seeAssassinChampions).toBe('object');
  })
})