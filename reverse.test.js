const reverse = require('./reverse');
test("the function should reverse the string",()=>{
    expect(reverse('book')).toBe('koob');
    expect(reverse('good')).toBe('doog')
})
