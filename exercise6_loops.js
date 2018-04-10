//number1
var count = 0;

console.log('LOOPING PERTAMA');
while (count < 20) {
  count=count+2;
  console.log(count + ' - I love coding');
}

var count = 20;
console.log('LOOPING KEDUA');
while (count > 0) {
  console.log(count + ' - I will become fullstack developer');
  count=count-2;
}

//number2
console.log('LOOPING PERTAMA');

for(i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');

for(i = 20; i > 0; i--) {
  console.log(i + ' - I will become fullstack developer');
}

//number3

for (i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
                console.log(i + " GENAP");
        }
        else {
                console.log(i + " GANJIL");
        }
}

for (i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
                console.log(i + " KELIPATAN 3");
        }
        else {
                console.log(" ");
        }
}

for (i = 1; i <= 100; i++) {
        if (i % 6 === 0) {
                console.log(i + " KELIPATAN 6");
        }
        else {
                console.log(" ");
        }
}

for (i = 1; i <= 100; i++) {
        if (i % 10 === 0) {
                console.log(i + " KELIPATAN 10");
        }
        else {
                console.log(" ");
        }
}
