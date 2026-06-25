// 1. Функция подсчета повторений слов
function countWordOccurrences(text) {
    const wordMap = new Map();
    const words = text.toLowerCase().split(/\s+/); // разбиваем по пробелам
    
    for (const word of words) {
        // Удаляем знаки препинания
        const cleanWord = word.replace(/[.,!?;:()"]/g, '');
        if (cleanWord) {
            wordMap.set(cleanWord, (wordMap.get(cleanWord) || 0) + 1);
        }
    }
    
    return wordMap;
}

const text = "JavaScript is great. JavaScript is powerful and JavaScript is fun!";
const wordCount = countWordOccurrences(text);
console.log('Количество повторений слов:');
wordCount.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// 2. Группировка сотрудников по отделам
function groupEmployeesByDepartment(employeesMap) {
    const departmentMap = new Map();
    
    employeesMap.forEach((department, name) => {
        if (departmentMap.has(department)) {
            departmentMap.get(department).push(name);
        } else {
            departmentMap.set(department, [name]);
        }
    });
    
    return departmentMap;
}

const employees = new Map([
    ['Анна', 'IT'],
    ['Борис', 'Маркетинг'],
    ['Виктория', 'IT'],
    ['Григорий', 'HR'],
    ['Дарья', 'Маркетинг']
]);

const employeesByDept = groupEmployeesByDepartment(employees);
console.log('\nСотрудники по отделам:');
employeesByDept.forEach((names, dept) => {
    console.log(`${dept}: ${names.join(', ')}`);
});

// 3. Фильтрация по возрасту (> 18)
function filterAdults(peopleMap) {
    const adultsMap = new Map();
    for (const [name, age] of peopleMap) {
        if (age > 18) {
            adultsMap.set(name, age);
        }
    }
    
    return adultsMap;
}

const people = new Map([
    ['Алексей', 25],
    ['Мария', 17],
    ['Иван', 32],
    ['Елена', 16],
    ['Петр', 19]
]);

const adults = filterAdults(people);
console.log('\nВзрослые (> 18 лет):');
adults.forEach((age, name) => {
    console.log(`${name}: ${age} лет`);
});

// 4. Удаление дубликатов из массива
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const numbers = [1, 2, 3, 2, 4, 3, 5, 1, 6];
const uniqueNumbers = removeDuplicates(numbers);
console.log('\nУникальные числа:', uniqueNumbers);