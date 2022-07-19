const capitalise = require('./capitalise');

test('the first letter of the string should be capitalise',()=>{
    expect(capitalise('pamphile')).toBe("Pamphile");
    expect(capitalise('mkp chill')).toBe("Mkp chill");
    
})