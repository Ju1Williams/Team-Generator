const Employee = require ('../lib/employee');
const employee = new Employee('Steph','2', 'stephcurry@gmail')

describe("Employee", () => {
    describe('name', () => {
        it('Get name', () => {
            expect(employee.name).toBe('Steph')
        })
    })
    describe('id', () => {
        it('Get id', () => {
            expect(employee.id).toBe('2')
        })
    })
    describe('email', () => {
        it('Get email', () => {
            expect(employee.email).toBe('stephcurry@gmail')
        })
    })
    
})


