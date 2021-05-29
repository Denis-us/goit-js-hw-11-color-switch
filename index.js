const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const buttonsEl = document.querySelectorAll('button')
  const DELAY = 1000

  buttonsEl[0].addEventListener('click', startColorsChange)
  buttonsEl[1].addEventListener('click', stopColorsChange)

  // const intervalId = setInterval(addBodyRandomColor, DELAY)
  // clearInterval(intervalId)

  // function addBodyRandomColor() {
  //   const randomIntegerFromInterval = (min, max) => {
  //     return Math.floor(Math.random() * (max - min + 1) + min);
  //   }

  //   if(startColorsChange) {
  //     document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]}
  // }

  function startColorsChange() {
    buttonsEl[0].setAttribute('disabled', true)
  }

  function stopColorsChange() {
    buttonsEl[0].setAttribute('disabled', false)
    // if (startColorsChange) {
    //   clearInterval(intervalId)
    // }
  }



  
