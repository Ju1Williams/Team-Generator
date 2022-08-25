const Intern = require('../lib/intern');
const intern = new Intern('Stacy','3', 'stacy@gmail','283-282-1111');

describe("Engineer", () => {
    describe('name', ()=> {
        it('Get name', () => {
            expect(intern.name).toBe('Stacy')
        })
    });
    describe('id', ()=> {
        it('Get 2001', () => {
            expect(intern.id).toBe('3')
        })
    });
    describe('email', ()=> {
        it('Get email', () => {
            expect(intern.email).toBe('stacy@gmail')
        })
    });
    describe('github', ()=> {
        it('Get github', () => {
            expect(intern.fax).toBe('283-282-1111')
        })
    });
});