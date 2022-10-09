export const setRgb = (diffCount, colorBlock, gameBx) => {
    function randNum(){
        return Math.round(Math.random()*254);
    }

    function randRgb(){
        let r = randNum();
        let g = randNum();
        let b = randNum();

        const rgb = `rgb(${r}, ${g}, ${b})`;

        return rgb;
    }

    
    let i = 0;
    let greenColor = "#009700";
    let redColor = "#cc1b1b";
    
    for(i; i < diffCount; i++){
        const newBtn = document.createElement("button");
        newBtn.className = "game__btn";
        newBtn.textContent = randRgb();
        gameBx.appendChild(newBtn);
    }

    const colorNum = Math.round(Math.random() * (diffCount - 1));
    const newBtns = document.querySelectorAll('.game__btn');
    const correctColor = newBtns[colorNum].textContent;

    // Create color element to guess the color
    colorBlock.style.backgroundColor = correctColor;
    console.log(correctColor); //development only

    newBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const clickedBtnValue = btn.textContent;
            const main = gameBx.parentNode;

            main.classList.add('gameDisable');

            if(clickedBtnValue === correctColor){
                console.log('correct');
                
                btn.style.backgroundColor = greenColor;

                newGame();
            }
            else{
                console.log('wrong');

                btn.style.backgroundColor = redColor;
                newBtns[colorNum].style.backgroundColor = greenColor;

                newGame();
            }
        })
    })

    function newGame(){
        setTimeout(() => {
            console.log('its working');

            // and here it call function to get new game
        }, 3500);
    }
}