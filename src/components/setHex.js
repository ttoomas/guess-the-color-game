export const setHex = () => {
    function randNumOrLetter(){
        let randNum = Math.round(Math.random()* 15);

        return randNum.toString(16); // Convert number into string, also into hex
    }

    let hex = '#';

    for(let i = 0; i < 8; i++){
        hex += randNumOrLetter();
    }

    return hex;
}