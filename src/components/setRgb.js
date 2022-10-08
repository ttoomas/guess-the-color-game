export const setRgb = (diffCount, main) => {
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
        newBtn.innerHTML = randRgb();
        main.appendChild(newBtn);
    }

    const correctColor = Math.round(Math.random() * (diffCount - 1));
    const newBtns = document.querySelectorAll('button');
    const correctValue = newBtns[correctColor].textContent;

    console.log(correctValue);

    document.body.style.backgroundColor = correctValue;

    newBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const clickedBtnValue = btn.textContent;

            if(clickedBtnValue === correctValue){
                alert('correct');
            }
            else{
                alert('wrong');
            }
        })
    })
}