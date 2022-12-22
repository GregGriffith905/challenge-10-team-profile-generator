const Employee = require('../lib/employee');

const employee = new Employee('Chadoni',1234,'chadoni@challenge10.com')
 
describe('Employee', () => {
  describe('Name', () => {
    it('should return the name', () => {
        expect(employee.getName()).toBe('Chadoni');
    })
  });
  describe('Id', () => {
    it('should return the id number', () => {
        expect(employee.getId()).toBe(1234);
    })
  });
  describe('Email', () => {
    it('should return the email address', () => {
        expect(employee.getEmail()).toBe('chadoni@challenge10.com');
    })
  });
  describe('Role', () => {
    it('should return the employee role', () => {
        expect(employee.getRole()).toBe('Employee');
    })
  });
});