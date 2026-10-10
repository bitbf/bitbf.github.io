const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const countdownElement = document.getElementById('countdown');
      const scoreElement = document.getElementById('score');
      let snake = [{ x: 200, y: 200 }, { x: 180, y: 200 }, { x: 160, y: 200 }];
      let direction = { x: 20, y: 0 };
      let food = { x: 100, y: 100 };
      let score = 0;
      let intervalId;
      let gameStarted = false;
      let countdownStarted = false;

      function createFood() {
        food = {
          x: Math.floor(Math.random() * 20) * 20,
          y: Math.floor(Math.random() * 20) * 20
        };
      }

      function clearBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      function drawSnake() {
        snake.forEach(part => {
          ctx.fillStyle = 'green';
          ctx.fillRect(part.x, part.y, 20, 20);
        });
      }

      function drawFood() {
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, 20, 20);
      }

      function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
          score += 10;
          scoreElement.textContent = score;
          createFood();
        } else {
          snake.pop();
        }

        if (head.x < 0 || head.x > canvas.width - 20 || head.y < 0 || head.y > canvas.height - 20) {
          endGame();
        }

        for (let i = 1; i < snake.length; i++) {
          if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
          }
        }
      }

      function gameLoop() {
        clearBoard();
        drawFood();
        drawSnake();
        moveSnake();
      }

      function startGame() {
        createFood();
        gameStarted = true;
        intervalId = setInterval(gameLoop, 100);
      }

      function endGame() {
        clearInterval(intervalId);
        const options = document.querySelector('.options');
        options.style.display = 'flex';
        if (score >= 100) {
          document.getElementById('screen5').style.display = 'none';
          document.getElementById('screen6').style.display = 'flex';
        } else {
          document.getElementById('screen5').style.display = 'none';
        }
      }

      function startCountdown(time) {
        countdownElement.textContent = `开始倒计时：${time}`;
        if (time === 0) {
          countdownElement.textContent = '';
          startGame();
          return;
        }
        setTimeout(() => startCountdown(time - 1), 1000);
      }

      document.getElementById('start').addEventListener('click', () => {
        if (!gameStarted && !countdownStarted) {
          countdownStarted = true;
          startCountdown(3);
        }
      });

      document.querySelectorAll('.controls button').forEach(button => {
        button.addEventListener('click', () => {
          const directions = ['up', 'left', 'down', 'right'];
          if (directions.includes(button.id)) {
            const newDirection = {'up': {x: 0, y: -20}, 'left': {x: -20, y: 0}, 'down': {x: 0, y: 20}, 'right': {x: 20, y: 0}}[button.id];
            if (newDirection.x !== -direction.x || newDirection.y !== -direction.y) {
              direction = newDirection;
            }
          }
        });
      });

      document.getElementById('restart').addEventListener('click', () => {
        location.reload();
      });

      document.getElementById('skip').addEventListener('click', () => {
        document.getElementById('screen5').style.display = 'none';
        document.getElementById('screen13').style.display = 'flex';
      });
