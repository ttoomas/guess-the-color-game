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
    let pts = 0;
    let roundCount = 0;
    let greenColor = "#009700";
    let redColor = "#cc1b1b";
    const main = gameBx.parentNode;
    const nextRoundBtn = document.querySelector('.nextRound__btn');
    const roundCountText = document.querySelector('.round__count');
    const ptsCountText = document.querySelector('.round__pts');
    const mainPopup = document.querySelector('.main__popup');

    // Reset game after new round set
    gameBx.innerHTML = "";
    i = 0;
    pts = 0;
    main.classList.remove('gameDisable');
    ptsCountText.textContent = pts;

    createNewGame();

    function createNewGame(){
        roundCount++;

        if(roundCount > 5){
            main.classList.remove('gameDisable');   // To disable round loader
            mainPopup.classList.add('popupActive');
            return;
        }

        mainPopup.classList.remove('popupActive');

        gameBx.innerHTML = "";
        i = 0;
        main.classList.remove('gameDisable');
        
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
    
        newBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const clickedBtnValue = btn.textContent;
    
                main.classList.add('gameDisable');
    
                if(clickedBtnValue === correctColor){
                    btn.style.backgroundColor = greenColor;
                    // Add points
                    pts++;
                    ptsCountText.textContent = pts;
    
                    newGame();
                }
                else{
                    btn.style.backgroundColor = redColor;
                    newBtns[colorNum].style.backgroundColor = greenColor;
    
                    newGame();
                }
            })
        })
    
        function newGame(){
            nextRoundBtn.addEventListener('click', nextRound)

            function nextRound(){
                clearTimeout(nextRoundTime);
                createNewGame();

                nextRoundBtn.removeEventListener('click', nextRound);
            }

            // eslint-disable-next-line
            const nextRoundTime = setTimeout(() => {
                createNewGame();
            }, 2800);
        }
    }
}