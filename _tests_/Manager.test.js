const Manager = require('../lib/manager');

const manager = new Manager('Chadoni',1234,'chadoni@challenge10.com','416-999-9999')
 
describe('Manager', () => {
  describe('name', () => {
    it('should return the name', () => {
        expect(manager.getName()).toBe('Chadoni');
    })
  });
  describe('id', () => {
    it('should return the id number', () => {
        expect(manager.getId()).toBe(1234);
    })
  });
  describe('email', () => {
    it('should return the email address', () => {
        expect(manager.getEmail()).toBe('chadoni@challenge10.com');
    })
  });
  describe('officeNumber', () => {
    it('should return the manager office number', () => {
        expect(manager.getOfficeNumber()).toBe('416-999-9999');
    })
  });
  // describe('role', () => {
  //   it('should return the manager role', () => {
  //       expect(manager.getRole()).toBe('Manager');
  //   })
  // });
});