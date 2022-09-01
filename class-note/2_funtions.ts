// 함수의 파라미터에 타입을 정의하는 방식
function add(a :number,b : number ) {
    return a+b;
}

add(12,23);


// 함수의 반환값에 타입을 정의하는 방식
function f() :number{
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a:number, b: number) : number {
    return a+b;
}

// sum2(10,20,30,40); // 에러

// 함수의 옵셔널 파라미터

function log(a : string , b?: string , c?: string){

}

log('hello  world');
log('hello ts',"abc");