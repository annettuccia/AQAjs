function showMenu(){
    console.log("Меню:");
    console.log("1. Карамельный капучино (6 BYN * размер)");
    console.log("2. Ореховый латте (7 BYN * размер)");
    console.log("3. Ванильный раф (7.5 BYN * размер)");
    console.log("Доступные размеры кофе");
    console.log("- small (x1)");
    console.log("- medium (x1.15)");
    console.log("- large (x1.35)");
}

function getCoffeeRecipe(coffee){
    const recipies = {
        'Карамельный капучино': {
            ingredients: ['эспрессо (30мл)', 'подогретое молоко (150мл)', 'молочная пенка', 'карамельный сироп (15мл)', 'карамельная крошка'],
            steps: '1. Приготовьте эспрессо\n2. Добавьте карамельный сироп\n3. Вспеньте молоко\n4. Аккуратно влейте молоко в кофе\n5. Посыпьте карамельной крошкой'
        },
        'Ореховый латте': {
            ingredients: ['эспрессо (30мл)', 'подогретое молоко (200мл)', 'ореховый сироп (20мл)', 'взбитые сливки', 'измельченные орехи'],
            steps: '1. Приготовьте эспрессо\n2. Добавьте ореховый сироп\n3. Вспеньте молоко\n4. Смешайте с кофе\n5. Украсьте взбитыми сливками и орехами'
        },
        'Ванильный раф': {
            ingredients: ['эспрессо (30мл)', 'сливки 10% (150мл)', 'ванильный сироп (20мл)', 'ванильный сахар (5г)', 'ванильная палочка для украшения'],
            steps: '1. Нагрейте сливки с ванильным сиропом и ванильным сахаром\n2. Взбейте смесь до появления пенки\n3. Приготовьте эспрессо\n4. Смешайте эспрессо с ванильной смесью\n5. Украсьте ванильной палочкой'
        }
    }

    return recipies[coffee] || null;
}

function calculatePrice(price, size){
    const sizeMultiplier = {
        'small': 1,
        'medium': 1.5,
        'large': 2
    };
    return price * sizeMultiplier[size]
}

function orderCoffe(coffee, size){
    basePrice = {
        'Карамельный капучино': 6,
        'Ореховый латте': 7,
        'Ванильный раф': 7.5
    };

    if(basePrice[coffee] === undefined){
        console.log("К сожалению выбранного вами кофе в меню нет!");
        return;
    }

    const recipe = getCoffeeRecipe(coffee);
    if (recipe === null){
        console.log("Рецепт не найден");
        return;
    }

    const price = calculatePrice(basePrice[coffee], size);

    console.log(`\n${coffee}`);
    console.log(`Размер: ${size.toUpperCase()}`);
    console.log(`Стоимость: ${price} BYN`);
    console.log("\nРецепт:");
    console.log("Ингредиенты:");
    recipe.ingredients.forEach((ingredient, index) => { console.log(`${index + 1}. ${ingredient}`); });
    console.log("Приготовление:");
    console.log(recipe.steps);
}

showMenu();
orderCoffe("Ореховый латте", "medium");
