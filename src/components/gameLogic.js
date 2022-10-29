export const gameLogic = (diffCount, colorBlock, gameBx, randomColor) => {    
    let i = 0;
    let pts = 0;
    let roundCount = 0;
    let greenColor = "#009700";
    let redColor = "#cc1b1b";
    const main = gameBx.parentNode;
    const nextRoundBtn = document.querySelector('.nextRound__btn');
    const roundCountText = document.querySelector('.round__count');
    const ptsCountText = document.querySelector('.round__pts');

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
            main.classList.add('popupActive');
            return;
        }

        main.classList.remove('popupActive');

        gameBx.innerHTML = "";
        i = 0;
        main.classList.remove('gameDisable');
        
        roundCountText.textContent = roundCount;

        for(i; i < diffCount; i++){
            const newBtn = document.createElement("button");
            newBtn.className = "game__btn";
            newBtn.textContent = randomColor();
            gameBx.appendChild(newBtn);
        }
    
        const colorNum = Math.round(Math.random() * (diffCount - 1));
        const newBtns = document.querySelectorAll('.game__btn');
        const correctColor = newBtns[colorNum].textContent;
    
        // Create color element to guess the color
        if(correctColor.includes('cmyk')){
            // Convert cmyk into rgb, because css doesn't support cmyk color space
            const cls = correctColor.substring(correctColor.indexOf('(') + 1);
            const cmykcls = cls.substring(0, cls.indexOf(')'));
            const numsPerc = cmykcls.split(', ');
            const nums = numsPerc.map(char => char.slice(0, -1));

            let c = (255 * nums[0]) / 100;
            let m = (255 * nums[1]) / 100;
            let y = (255 * nums[2]) / 100;
            let k = (255 * nums[3]) / 100;

            let r = Math.round(((255 - c) * (255 - k)) / 255) ;
            let g = Math.round((255 - m) * (255 - k) / 255) ;
            let b = Math.round((255 - y) * (255 - k) / 255) ;

            let rgb = `rgb(${r}, ${g}, ${b})`;

            colorBlock.style.backgroundColor = rgb;
        }
        else{
            colorBlock.style.backgroundColor = correctColor;
        }
    
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