document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");

  const description = document.querySelector(".description");

  const chgTxtBtn = document.getElementById("changeTextBtn");
  chgTxtBtn.addEventListener("click", () => {
    title.textContent = "Hacked DOM 😈";
    description.textContent = "by Pradipat";
  });

  const tglClsBtn = document.getElementById("toggleClassBtn");
  tglClsBtn.addEventListener("click", () => {
    description.classList.toggle("active");
    if (description.classList.contains("active")) {
      description.computedStyleMap.color = "green";
    } else {
      description.computedStyleMap.color = "black";
    }
  });

  const link = document.getElementById("link");
  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Link Clicked");
    document.addEventListener("DOMContentLoaded", () => {
      const title = document.getElementById("title");

      const description = document.querySelector(".description");

      const chgTxtBtn = document.getElementById("changeTextBtn");
      chgTxtBtn.addEventListener("click", () => {
        title.textContent = "Hacked DOM👾";

        description.textContent = "by Ponsakorn";
      });

      const tglClsBtn = document.getElementById("toggleClassBtn");
      tglClsBtn.addEventListener("click", () => {
        description.classList.toggle("active");
        if (description.classList.contains("active")) {
          description.style.color = "green";
        } else {
          description.style.color = "black";
        }
      });

      const link = document.getElementById("link");
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Link Clicked!!");
      });

      const gameArea = document.getElementById("gameArea");
      const scoreBoard = document.getElementById("score");
      const startBtn = document.getElementById("startBtn");
      let score = 0;

      startBtn.addEventListener("click", () => {
        score = 0;
        scoreBoard.textContent = score;
        startGame();
      });

      const startGame = () => {
        const coin = createCoin();
        gameArea.appendChild(coin);

        coin.addEventListener("click", () => {
          score++;
          scoreBoard.textContent = score;
          gameArea.removeChild(coin);
          startGame();
        });
      };

      const createCoin = () => {
        const coin = document.createElement("div");

        coin.classList.add("coin");
        coin.style.top = Math.random() * (gameArea.offsetHeight - 30) + "px";
        coin.style.left = Math.random() * (gameArea.offsetWidth - 30) + "px";

        return coin;
      };
    });
  });

  const gameArea = document.getElementById("gameArea");
  const scoreBoard = document.getElementById("score");
  const startBtn = document.getElementById("startBtn");
  let score = 0;

  startBtn.addEventListener("click", () => {
    score = 0;
    scoreBoard.textContent = score;
    startGame();
  });

  const startGame = () => {
    const coin = createCoin();
    gameArea.appendChild(coin);

    coin.addEventListener("click", () => {
      score++;
      scoreBoard.textContent = score;
      gameArea.removeChild(coin);
      startGame();
    });
  };

  const createCoin = () => {
    const coin = document.createElement("div");

    coin.classList.add("coin");
    coin.style.top = Math.random() * (gameArea.offsetHeight - 30) + "px";
    coin.style.left = Math.random() * (gameArea.offsetWidth - 30) + "px";
    return coin;
  };
});
