import { setRgb } from "./setRgb";
import { setHex } from "./setHex";
import { setHsl } from "./setHsl";
import { setCmyk } from "./setCmyk";

export const getGameData = (gameInfo, main) => {
    const diffId = gameInfo.diffId;
    const colorId = gameInfo.colorId;

    let diffColorCount;

    switch(diffId){
        case 0:
            diffColorCount = 2;
            break;
        case 1:
            diffColorCount = 3;
            break;
        case 2:
            diffColorCount = 5;
            break;
        case 3:
            diffColorCount = 7;
            break;
        case 4:
            diffColorCount = 9;
            break;
        default:
            console.error("Difficulty id is not correct, please refresh page", 500);
    }

    let testT;

    switch(colorId){
        case 0:
            testT = setRgb(diffColorCount, main);
            break;
        case 1:
            setHex(diffColorCount, main);
            break;
        case 2:
            setHsl(diffColorCount, main);
            break;
        case 3:
            setCmyk(diffColorCount, main);
            break;
        default:
            console.error("Color space id is not correct, please refresh page", 500);
    }

   return testT;
    

    // easy = 2 options
    // medium = 3 options
    // hard = 5 options
    // expert = 7 options
    // impossible = 9 options
}