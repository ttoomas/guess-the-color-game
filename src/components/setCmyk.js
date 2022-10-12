export const setCmyk = () => {
    function randPerc(){
        return (Math.round(Math.random()*100) + '%');
    }

    let cmyk = `cmyk(${randPerc()}, ${randPerc()}, ${randPerc()}, ${randPerc()})`

    return cmyk;
}