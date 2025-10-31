const pressed = [];
      const secretCode = "thekonamicode";
      const popUp = document.querySelector("#popUp");
      window.addEventListener("keyup", (e) => {
        console.log(e.key);
        pressed.push(e.key);
        pressed.splice(
          -secretCode.length - 1,
          pressed.length - secretCode.length
        ); // goes backwards up 7 letters, so if the secretcode is 'wesbos',
        //  it wont take anymore than 6 (7 -1) letters.
        //
        // Turn into string...
        if (pressed.join("").includes(secretCode)) {
          //if matches secretcode, do this...
          console.log("DING DING!");
          popUp.style.display = "grid";
          popUp.style.opacity = "1";
        }

        console.log(pressed);
      });
      function closeFunction() {
        popUp.style.display = "none";
      }
