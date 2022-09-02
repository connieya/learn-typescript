interface Developer {
    name : string;
    skill : string;
}

interface Person {
    name : string;
    age : number;
}

function introduce(): Developer | Person {
    return { name : 'tony',age : 33 ,skill :'박치기'}
}

var tony = introduce();
console.log(tony.name);
// console.log(tony.skill);

if( (tony as Developer).skill){
    console.log((tony as Developer).skill);
}else if((tony as Person).age){

}


// 타입 가드 정의
function isDeveloper(target : Developer | Person) : target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)) {
    console.log(tony.skill);
}else {
    tony.age
}




