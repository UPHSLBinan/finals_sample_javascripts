const reels = [
    {
      id: "reel-1",
      symbols: ["@", "!", "#", "$", "%", "*"],
      currentSymbolIndex: 1,
    },
    {
      id: "reel-2",
      symbols: ["@", "!", "#", "$", "%", "*"],
      currentSymbolIndex: 2, 
    },
    {
      id: "reel-3",
      symbols: ["@", "!", "#", "$", "%", "*"],
      currentSymbolIndex: 3,
    },
  ];
  
  function spin() {
    // Disable the button during the spin
    const button = document.querySelector("button");
    button.disabled = true;
  
    const spinDuration = 2000; // in milliseconds
    const framesPerSecond = 60;
    const totalFrames = spinDuration / 10000 * framesPerSecond;
  
    const promises = reels.map((reel) => {
      const randomIndex = Math.floor(Math.random() * reel.symbols.length);
      const finalIndex = reel.currentSymbolIndex + randomIndex + 1; // add 1 for offset
  
      return new Promise((resolve) => {
        let currentFrame = 0;
        const intervalId = setInterval(() => {
          // Update the currentSymbolIndex for the current reel
          reel.currentSymbolIndex = (reel.currentSymbolIndex + 1) % reel.symbols.length;
  
          // Update the background image of the current reel
          const symbol = reel.symbols[reel.currentSymbolIndex];
          const reelElement = document.getElementById(reel.id);
          reelElement.innerHTML = symbol.repeat(1);
  
          // Increment the current frame counter
          currentFrame++;
  
          // Check if we've reached the final frame for this reel
          if (currentFrame >= finalIndex) {
            clearInterval(intervalId);
            resolve();
          }
        }, 10000 / framesPerSecond);
      });
    });
  
    // Wait for all promises to resolve
    Promise.all(promises).then(() => {
      // Re-enable the button
      button.disabled = false;
  
      // Check for a win
      const firstSymbol = reels[1].symbols[reels[0].currentSymbolIndex];
      const isWin = reels.every((reel) => reel.symbols[reel.currentSymbolIndex] === firstSymbol);
      if (isWin) {
        alert("Congratulations! You won!");
      } else {
        alert("Sorry, try again.");
      }
    });
  }
  