function solve(input) {
    let quantityOfFood = input[0]
    let hay = input[1]
    let cover = input[2]
    let pigsWeight = input[3]
  
    for (let i = 1; i <= 30; i++) {
      quantityOfFood -= 0.3;
      if (i % 2 === 0) {
        let x = quantityOfFood * 0.05;
        hay -= x;
      }
      if (i % 3 === 0) {
        cover = cover - pigsWeight / 3;
      }
    }
  
    if (quantityOfFood >= 0 && hay >= 0 && cover >= 0) {
      console.log(
        `Everything is fine! Puppy is happy! Food: ${quantityOfFood.toFixed(
          2
        )}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`
      );
    } else {
      console.log("Merry must go to the pet store!");
    }
  }