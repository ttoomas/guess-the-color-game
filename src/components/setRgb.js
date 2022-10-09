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

            if(clickedBtnValue === correctColor){
                alert('correct');
            }
            else{
                alert('wrong');
            }
        })
    })
}