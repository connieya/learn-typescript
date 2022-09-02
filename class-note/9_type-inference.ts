// 타입 추론 기본 1
var a = 10;

function getB(b = 10){
    var c = 'hi';
    return b + c;
}


10 + '10' // 1010

// 타입 추론 기본 2

// interface DropdownItem<T>{
//     value : T;
//     title : string;
// }

// var ShopItems: DropdownItem<string> = {
//     value : "신발",
//     title : "조던"
// }

// 타입 추론 기본 3

interface DropdownItem<T>{
    value : T;
    title : string;
}

interface DetailedDropdown<T> extends DropdownItem<T> {
    description : string;
    tag : T
}

var ShopItems: DropdownItem<string> = {
    value : "신발",
    title : "조던"
}

var detailedItem : DetailedDropdown<number> = {
    title : 'abc',
    description : 'ㅎㅇ',
    value : 7,
    tag:  2
}



// best common type
var arr = [1,2,true,true,'a'];
