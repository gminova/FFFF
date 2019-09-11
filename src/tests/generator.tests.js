const test = require('tape');
const { generator, getRandomInteger } = require('../model/data_generator/generator');

test('Check that we\'re ready for gen testing', t => {
    t.assert(true, true, 'Must return true');
    t.assert(process.env.NODE_ENV, 'test', 'Must be in testing environment');
    t.end();
});

test('Check generator returns an array', t => {
    const actual = Array.isArray(generator(1, 2, 3));
    const expected = Array.isArray([]);
    t.deepEquals(expected, actual, 'Check gen returns an array');
    t.end();
});

test('Check generator returns an array with appropriate length', t => {
    const actual = generator(6, 5, 7).length;
    const expected = 36;
    t.deepEquals(expected, actual, 'Check gen returns an array');
    t.end();
});

test('Check random number gen returns an int between 1 and 4', t => {
    const actual = getRandomInteger(1, 4);
    const min = actual >= 1;
    const max = actual <= 4;
    t.equals(min, true, 'Check random number gen returns an int between 1 and 4');
    t.equals(max, true, 'Check random number gen returns an int between 1 and 4');
    t.end();
});

test('Check random number gen when run multimple times', t=>{
    for (let i=0;i<100;i++){
     const actual = getRandomInteger(1, 4);
     t.equals(actual,Math.floor(actual));
     t.equals(actual>=1 && actual<=4,true);
    }
    t.end()
})