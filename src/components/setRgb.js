export const setRgb = () => {
    function randNum(){
        return Math.round(Math.random()*255);
    }

    let r = randNum();
    let g = randNum();
    let b = randNum();

    const rgb = `rgb(${r}, ${g}, ${b})`;

    return rgb;
}