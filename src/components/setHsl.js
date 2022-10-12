export const setHsl = () => {
    function randDegree(){
        return Math.round(Math.random()*360);
    }
    function randNum(){
        return Math.round(Math.random()*100);
    }

    let hsl = `hsl(${randDegree()}, ${randNum()}%, ${randNum()}%)`;

    return hsl;
}