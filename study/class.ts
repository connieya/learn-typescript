abstract class User {
    constructor(
        private firstName : string,
        private lastName : string,
        public nickname : string
    ) {}
}

class Player extends User{
    
}

const nico = new Player("park","geon-hee","코니");