enum Shoes {
    Nike  = '나이키', 
    Adidas = '아디다스'
}

var myShoes = Shoes.Adidas; 
var yourShoes = Shoes.Nike; 
console.log(myShoes);




// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}


function askQuestion(answer : Answer){
    if(answer === Answer.Yes){

    }
    if(answer === Answer.No){

    }
}

askQuestion(Answer.No);
askQuestion(Answer.Yes);