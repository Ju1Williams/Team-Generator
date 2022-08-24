const Employee = require ('../lib/employee');
const employee = new Employee('Steph','2', 'stephcurry@gmail')

describe("Employee", () => {
    describe('name', () => {
        it('Get name', () => {
            expect(employee.name).toEqual('Steph')
        })
    })
    describe('id', () => {
        it('Get id', () => {
            expect(employee.id).toEqual('2')
        })
    })
    describe('email', () => {
        it('Get email', () => {
            expect(employee.email).toEqual('stephcurry@gmail')
        })
    })
    
})


