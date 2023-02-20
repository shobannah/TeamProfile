const Manager = require('../lib/Manager')

test('can set new manager',
() =>{
    const newManager = new Manager('Alice', 123, "test@email.com", 123456)
    expect(newManager.name).toBe("Alice")
    expect(newManager.empId).toBe(123)
    expect(newManager.email).toBe("test@email.com")
    expect(newManager.phone).toBe(123456)
    expect(newManager.getRole()).toBe("Manager")
})