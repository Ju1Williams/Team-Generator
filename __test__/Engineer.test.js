const Engineer = require('../lib/engineer');
const engineer = new Engineer('Sandra','1', 'sandrabullock@gmail','sandyb' );

describe("Engineer", () => {
    describe('name', ()=> {
        it('Get name', () => {
            expect(engineer.name).toEqual('Sandra')
        })
    });
    describe('id', ()=> {
        it('Get 2001', () => {
            expect(engineer.id).toEqual('1')
        })
    });
    describe('email', ()=> {
        it('Get email', () => {
            expect(engineer.email).toEqual('sandrabullock@gmail')
        })
    });
    describe('github', ()=> {
        it('Get github', () => {
            expect(engineer.github).toEqual('sandyb')
        })
    });
});
