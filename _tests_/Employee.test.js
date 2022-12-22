const Employee = require('../lib/employee');

const employee = new Employee('Chadoni',1234,'chadoni@challenge10.com')
 
describe('Employee', () => {
  describe('name', () => {
    it('should return the name', () => {
        expect(employee.getName()).toBe('Chadoni');
    })
  });
  describe('id', () => {
    it('should return the id number', () => {
        expect(employee.getId()).toBe(1234);
    })
  });
  describe('email', () => {
    it('should return the email address', () => {
        expect(employee.getEmail()).toBe('chadoni@challenge10.com');
    })
  });
  describe('role', () => {
    it('should return the employee role', () => {
        expect(employee.getRole()).toBe('Employee');
    })
  });
});