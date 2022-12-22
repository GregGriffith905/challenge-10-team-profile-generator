const Engineer = require('../lib/engineer');

const engineer = new Engineer('Chadoni',1234,'chadoni@challenge10.com','Chadoni')
 
describe('Engineer', () => {
  describe('Name', () => {
    it('should return the name', () => {
        expect(engineer.getName()).toBe('Chadoni');
    })
  });
  describe('Id', () => {
    it('should return the id number', () => {
        expect(engineer.getId()).toBe(1234);
    })
  });
  describe('Email', () => {
    it('should return the email address', () => {
        expect(engineer.getEmail()).toBe('chadoni@challenge10.com');
    })
  });
  describe('GitHub', () => {
    it('should return the engineer github account', () => {
        expect(engineer.getGitHub()).toBe('Chadoni');
    })
  });
  describe('Role', () => {
    it('should return the engineer role', () => {
        expect(engineer.getRole()).toBe('Engineer');
    })
  });
});