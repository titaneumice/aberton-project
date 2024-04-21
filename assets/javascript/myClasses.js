class gameFile {
    //various properties needed to save and load
    /*such as:
        - current character stats and states
        - inventory
        - date and time
        - events flags (i believe they are called) indicated whether an event has been triggered or not */
    constructor(){
        //property names in between () for creation, they need to be defined in here
    }
}

class chProfile {
    //to hold stats and states of characters
    constructor(name){
        //burp
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

export {gameFile, chProfile};