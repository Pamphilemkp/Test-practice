
const stringLength = require('./stringLength');

test(`that's not the correct length of the string`,() =>{
    expect(stringLength('test')).toBe(4);
})



