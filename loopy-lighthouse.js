for(let i = 100; i < 201; i++){
    const multipleOfThree = i % 3 == 0;
    const multipleOfFour = i % 4 == 0;
    
    if (multipleOfThree && multipleOfFour){
        console.log("LoopyLighthouse");
        continue;
    } else if (multipleOfThree){
        console.log("Loopy");
        continue;
    } else if (multipleOfFour){
        console.log("Lighthouse");
        continue;
    } else {
        console.log(i);
    }
}