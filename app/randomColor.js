// export const randomColor = Math.floor(Math.random() * 16777215).toString(16);

export const  randomColor=()=>{
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `${randColor.toUpperCase()}`
}