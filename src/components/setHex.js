export const setHex = () => {
    function randNumOrLetter(){
        let randNum =  Math.round(Math.random()* 15);

        if(randNum > 9){
            let obj = String.fromCharCode(87 + randNum);
            return obj;
        }
        else{
            return toString(randNum);
        }
    }
    

    let hex = '';

    for(let i = 0; i < 8; i++){
        console.log(randNumOrLetter());
    }

    console.log(hex);

    // return hex;
}