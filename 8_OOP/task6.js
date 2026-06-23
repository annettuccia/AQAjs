class Person {
    constructor(name, age, gender) {
        if (this.constructor === Person) {
            throw new Error('Нельзя создать экземпляр абстрактного класса');
        }
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo() {
        return `${this.name} (${this.age} лет, ${this.gender}) - ${this.constructor.name}`;
    }
}

class Student extends Person {
    constructor(name, age, gender, course, major, gpa) {
        super(name, age, gender);
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }

    getInfo() {
        return `${super.getInfo()}, ${this.course} курс, специальность: ${this.major}, средний балл: ${this.gpa.toFixed(2)}`;
    }
}

class Teacher extends Person {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender);
        this.salary = salary;
        this.workHours = workHours;
    }

    getInfo() {
        return `${super.getInfo()}, зарплата: ${this.salary} руб., часы работы: ${this.workHours} ч.`;
    }
}

class Dean extends Teacher {
    constructor(name, age, gender, baseSalary, workHours) {
        const deanSalary = baseSalary * 2;
        const bonus = deanSalary;
        super(name, age, gender, deanSalary, workHours);
        this.bonus = bonus;
        this.baseSalary = baseSalary;
    }

    getInfo() {
        return `${super.getInfo()}, годовой бонус: ${this.bonus} руб.`;
    }
}

class Director extends Dean {
    constructor(name, age, gender, baseSalary, workHours) {
        const deanSalary = baseSalary * 2;
        const directorSalary = deanSalary * 1.5;
        const directorBonus = directorSalary * 2;
        
        super(name, age, gender, baseSalary, workHours);
        
        this.salary = directorSalary;
        this.bonus = directorBonus;
        this.deanSalary = deanSalary;
    }

    getInfo() {
        return `${this.name} (${this.age} лет, ${this.gender}) - Директор, зарплата: ${this.salary} руб., часы работы: ${this.workHours} ч., годовой бонус: ${this.bonus} руб.`;
    }
}

class School {
    constructor() {
        this.director = null;
        this.dean = null;
        this.teachers = [];
        this.students = [];
    }

    addPerson(person) {
        if (person instanceof Director) {
            this.director = person;
        } else if (person instanceof Dean) {
            this.dean = person;
        } else if (person instanceof Teacher) {
            this.teachers.push(person);
        } else if (person instanceof Student) {
            this.students.push(person);
        }
    }

    valedictorian() {
        if (this.students.length === 0) {
            return null;
        }
        
        const bestStudent = this.students.reduce((best, current) => {
            return current.gpa > best.gpa ? current : best;
        });
        
        return bestStudent;
    }

    displayAllInfo() {
        if (this.director) {
            console.log('Директор:');
            console.log(this.director.getInfo());
        }

        if (this.dean) {
            console.log('\nДекан:');
            console.log(this.dean.getInfo());
        }

        if (this.teachers.length > 0) {
            console.log('\nУчителя:');
            this.teachers.forEach((teacher, index) => {
                console.log(`${index + 1}. ${teacher.getInfo()}`);
            });
        }

        if (this.students.length > 0) {
            console.log('\nСтуденты:');
            this.students.forEach((student, index) => {
                console.log(`${index + 1}. ${student.getInfo()}`);
            });
        }
    }
}

const school = new School();

const director = new Director('Иван Петрович', 55, 'Мужской', 75000, 40);
school.addPerson(director);

const dean = new Dean('Мария Ивановна', 50, 'Женский', 75000, 35);
school.addPerson(dean);

const teachers = [
    new Teacher('Анна Сергеевна', 45, 'Женский', 60000, 30),
    new Teacher('Сергей Викторович', 40, 'Мужской', 55000, 28),
    new Teacher('Елена Михайловна', 38, 'Женский', 58000, 32)
];
teachers.forEach(teacher => school.addPerson(teacher));

const students = [
    new Student('Алексей Смирнов', 20, 'Мужской', 3, 'Информатика', 3.8),
    new Student('Мария Петрова', 19, 'Женский', 2, 'Математика', 3.9),
    new Student('Дмитрий Иванов', 21, 'Мужской', 4, 'Физика', 4.0),
    new Student('Ольга Соколова', 18, 'Женский', 1, 'Биология', 3.5),
    new Student('Екатерина Морозова', 20, 'Женский', 3, 'Информатика', 3.2)
];
students.forEach(student => school.addPerson(student));

school.displayAllInfo();

console.log(`\nЗарплата директора школы: ${school.director.salary} руб.`);

const bestStudent = school.valedictorian();
if (bestStudent) {
    console.log(`\nЛучший студент (valedictorian): ${bestStudent.name} со средним баллом ${bestStudent.gpa.toFixed(2)}`);
}
