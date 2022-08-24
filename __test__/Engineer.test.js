const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Sandra','2001', 'sandrabullock@gmail','sandyb' );

test('make sure they run', () => {
    expect(engineer.name).toBe('Sandra');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual('sandrabullock@gmail');
    expect(engineer.github).toEqual('sandyb');

});
    

test("name", () => {
    expect(engineer.getName()).toBe('Sandra');
});

test("id", () => {
    expect(engineer.getId()).toBe('2001');
});

test("email", () => {
    expect(engineer.getEmail()).toBe('sandrabullock@gmail');
});

test("github", () => {
    expect(engineer.getGithub()).toBe('sandyb');
});


