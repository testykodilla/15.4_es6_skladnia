//zadanie pierwsze 

const hello = "Helow";
const world = "world";
console.log(`${hello} ${world}`);

// zadanie drugie

const multiply = (x = 1, y = 1) => console.log(x*y);
multiply(4);

// zadanie trzecie

const average = (...nrs) => { 
    let sum = 0;
    nrs.forEach(nr => sum += nr);
    console.log(sum/nrs.length);
}
average(2, 2, 5);

// zadanie czwarte 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

// zadanie piąte
const tableWeird = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = tableWeird;
console.log(`Imię ${firstName} Nazwisko ${lastName}`)