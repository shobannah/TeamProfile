const Engineer = require('../lib/Engineer')

test('can set new engineer',
() =>{
    const newEngineer = new Engineer('Dave', 123, "test@email.com", "username")
    expect(newEngineer.name).toBe("Dave")
    expect(newEngineer.empId).toBe(123)
    expect(newEngineer.email).toBe("test@email.com")
    expect(newEngineer.github).toBe("username")
    expect(newEngineer.getRole()).toBe("Engineer")
})