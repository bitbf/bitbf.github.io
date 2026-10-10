document.querySelectorAll('.arrow').forEach(button => {
      button.addEventListener('click', function () {
        const currentScreen = this.closest('.screen');
        const nextScreen = currentScreen.nextElementSibling;
        if (nextScreen) {
          currentScreen.style.display = 'none';
          nextScreen.style.display = 'flex';
        }
      });
    });
    document.querySelectorAll('#yes').forEach(button => {
      button.addEventListener('click', function () {
        const currentScreen = this.closest('.screen');
        const nextScreen = currentScreen.nextElementSibling;
        if (nextScreen) {
          currentScreen.style.display = 'none';
          nextScreen.style.display = 'flex';
        } console.log("点击了yes");
      });
    });
    let screen12 = document.getElementById('screen12');
    document.querySelectorAll('#no').forEach(button => {
      button.addEventListener('click', function () {
        const currentScreen = this.closest('.screen');
        const nextScreen = screen12;
        if (nextScreen) {
          currentScreen.style.display = 'none';
          nextScreen.style.display = 'flex';
        }
        console.log("点击了no");
      });
    });
