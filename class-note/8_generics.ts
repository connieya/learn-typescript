// function logText(text){
//     console.log();
//     return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이

// function logText<T>(text : T):T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이');


// function logText(text : string) {
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number){
//     console.log(num);
//     return num;
// }

// function logText(text : string | number){
//     console.log(text);
//     return text;
// }

// const a = logText('a');
//  a.split('');
// logText(10);
//  logText(true);



function logText<T>(text : T ) : T{
    console.log(text);
    return text;
}

const hi = logText<string>("하이");
hi.split('');

const login = logText<boolean>(true);


// interface Dropdown {
//     value : string;
//     selected : boolean;
// }

// const ob : Dropdown = {
//     value : "abc",
//     selected : false;
// };


interface Dropdown<T>{
    value : T;
    selected : boolean;
}


// 정의된 타입 이용하기
interface LengthType {
    length : number;
}

function logTextLength<T extends LengthType>(text :T) : T {
    text.length;
    return text;
}

logTextLength('a');

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name : string;
    price : number;
    stock : number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T) : T {
    return itemOption;
}


// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");