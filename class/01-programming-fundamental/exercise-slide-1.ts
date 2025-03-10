// 1. Find rectangle area
const width1 = 5;
const length1 = 3;
const area = width1 * length1;
console.log(area);

// 2. Find perimeter of rectangle
const width2 = 5;
const length2 = 3;
const perimeter = 2 * (width2 + length2);
console.log(perimeter);

// 3 . Find diameter, circumference, area from a circle
const radius = 5;
const pi = 3.14;
// const pi = Math.PI;
console.log(Math.PI);
const diameter = 2 * radius;
console.log(diameter);
const circumference = 2 * pi * radius;
console.log(circumference.toFixed(2));
const circleArea = pi * radius ** 2;
console.log(circleArea);

// 4. Find the third angle
const firstAngle = 80;
const secondAngle = 65;
const thirdAngle = 180 - (firstAngle + secondAngle);
console.log(thirdAngle);

// 5. Convert days to years, month, and days
const days = 400;
const convertYear = Math.floor(days / 365);
const convertMonth = Math.floor((days % 365) / 30);
const convertDay = Math.floor((days % 365) % 30);
console.log(`${convertYear} year, ${convertMonth} month, ${convertDay} day`);

const totalDay = 1000;
const year = Math.floor(totalDay / 360);
console.log(year);
const remainingDays = totalDay % 365;
console.log(remainingDays);
const month = Math.floor(remainingDays / 30);
console.log(month);
const day = remainingDays % 30;
console.log(day);

// 6. Find the difference between two date
const date1: Date = new Date("2022-01-20");
const date2: Date = new Date("2022-02-20");
console.log(date1);
console.log(date2);
const diffDateInMS = date1.getTime() - date2.getTime();
console.log(diffDateInMS);
const diffDateInDays = Math.abs(diffDateInMS / (1000 * 60 * 60 * 24));
console.log(diffDateInDays);

console.log(new Date(1));
console.log(new Date().getTime());

/* ------------------------------- Math Object ------------------------------ */
console.log(Math.PI);
console.log(Math.floor(3.9));
console.log(Math.ceil(3.1));
console.log(Math.round(3.9));

console.log(95 % 10);
