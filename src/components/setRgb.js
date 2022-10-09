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
    let roundCount = 0;
    let greenColor = "#009700";
    let redColor = "#cc1b1b";
    const nextRoundBtn = document.querySelector('.nextRound__btn');
    const roundCountText = document.querySelector('.round__count');

    createNewGame();

    function createNewGame(){
        roundCount++;

        if(roundCount > 5){
            console.log('ende');
            // here it will throw popup with someting like new round
            return;
        }

        roundCountText.textContent = roundCount;

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
        const main = gameBx.parentNode;
        console.log(correctColor); //development only
    
        newBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const clickedBtnValue = btn.textContent;
    
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
            nextRoundBtn.addEventListener('click', nextRound)

            function nextRound(){
                gameBx.innerHTML = "";
                i = 0;
                main.classList.remove('gameDisable');

                clearTimeout(nextRoundTime);
                createNewGame();

                nextRoundBtn.removeEventListener('click', nextRound);
            }

            // eslint-disable-next-line
            const nextRoundTime = setTimeout(() => {
                // Delete gameBx buttons - only for next rounds
                gameBx.innerHTML = "";
                // Bcs i =  diffCount, so it cant create btns again - next rounds
                i = 0;
                // Delete disable class that player can click on btn
                main.classList.remove('gameDisable');
                
                createNewGame();
            }, 3500);
        }
    }
}