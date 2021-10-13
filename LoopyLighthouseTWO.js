function loopyLighthouse(range, multiples, words){
  for(let i = range[0]; i < range[1] + 1; i++){
    multiple1 = i % multiples[0] == 0;
    multiple2 = i % multiples[1] == 0;
    if (multiple1 && multiple2){
      console.log(words[0] + words[1])
    } else if (multiple1){
      console.log(words[0])
    } else if (multiple2){
      console.log(words[1])
    } else {
      console.log(i)
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);