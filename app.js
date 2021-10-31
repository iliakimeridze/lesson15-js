// 1
const currentDay = new Date().getDay();

 switch (currentDay) {
    case 0:
        console.log("დღეს კვირაა");
        break;
    case 1:
        console.log("დღეს ორშაბათია");
        break;
    case [2]:
        console.log("დღეს სამშაბათია");
        break;
    case 3:
        console.log("დღეს ოთხშაბათია");
        break;
    case 4:
        console.log("დღეს ხუთშაბათია");
        break;
    case 5:
        console.log("დღეს პარასკევია");
        break;
    case 6:
        console.log("დღეს კვირაა");
        break;
    default:
        console.log("day not found")
    }

// 2
for (let i = 0; i<100; i++) {
		console.log(i);
	}
// აქ ინიცირება, პირობა და i-ს გაზრდა for -ის შიგნით იწერება 

//  3
let i=0;
	while(i<50){
		console.log(i);
		i++;
	}
// აქ გარეთ იწერება ინდექსის მნიშვნელობა, შემდეგ შიგნით პირობა 
// და როცა უკვე შესრულდება ეს ორი, შემდეგ გადავცემთ, რომ გაიზარდოს 
// ინდექსი i++.

// 4
i=0;
do{
    i++;
    console.log(i);
}
while(i<150);
// აქ do-ში ეთითება რა უნდა გამოიტანოს კონსოლმა , while- რის შემთხვევაში...

// 5

const emptyArray = [];
for(let i=1; i<10000; i++){
    emptyArray.push(i*i);
}
console.log(emptyArray);

// 6



