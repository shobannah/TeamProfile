const Intern = require('../lib/Intern')

test('can set new intern',
() =>{
    const newIntern = new Intern('Moe', 123, "test@email.com", 'school')
    expect(newIntern.name).toBe("Moe")
    expect(newIntern.empId).toBe(123)
    expect(newIntern.email).toBe("test@email.com")
    expect(newIntern.school).toBe('school')
    expect(newIntern.getRole()).toBe("Intern")
})