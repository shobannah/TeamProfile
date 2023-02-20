const Employee = require('../lib/Employee')

test('can set new employee',
() =>{
    const newEmployee = new Employee('Rachel', 123, "test@email.com", "getName", "getId","getEmail")
    expect(newEmployee.name).toBe("Rachel")
    expect(newEmployee.empId).toBe(123)
    expect(newEmployee.email).toBe("test@email.com")
    expect(newEmployee.getName).toBe("getName")
    expect(newEmployee.getId).toBe("getId")
    expect(newEmployee.getEmail).toBe("getEmail")
})