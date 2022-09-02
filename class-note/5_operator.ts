function logMessage(value : any){
    console.log(value);
}

logMessage('hello');
logMessage(100);
logMessage(false);



// 유니온타입
function message(value : string | number){
    if(typeof value === 'number'){
        value.toString;
    }

    if(typeof value === 'string'){
        value.toString();
    }

    throw new TypeError('value must be string or number');

}

message('hello');
message(10);

// 유니온타입
var cony : string | number | boolean;


interface Programmer {
    name : string
    skill : string
}

interface People {
    name :string
    age : number
}

function askSomeone(someone : Programmer | People) {
    // someone.age
    // someone.skill
    someone.name
}

function askSomeone2(someone : Programmer & People) {
    someone.age
    someone.skill
    someone.name
}


askSomeone({name : '디벨로퍼' ,skill  : "프론트"}); // 유니온
askSomeone({name : "캡틴" , age : 100}); // 유니온


askSomeone2({name : '디벨로퍼' ,skill  : "프론트", age : 23}); // 인터섹션

var cap : string & number & boolean; // never


