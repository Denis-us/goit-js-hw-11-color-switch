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



  

  const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {
      start: document.querySelector('button[data-action="start"]'),
      stop: document.querySelector('button[data-action="stop"]'),
      bodyColor: document.querySelector('body'),
  }

  const TIME_DELAY = 1000;
  let intervalId = null;

  refs.start.addEventListener('click', startColorSwitch);
  refs.stop.addEventListener('click', stopColorSwitch);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function randomColor () {
    const randomCol = colors[randomIntegerFromInterval(0, colors.length-1)];
   console.log(randomCol);

    refs.bodyColor.style.backgroundColor = randomCol;

};

  function startColorSwitch (e) {

    intervalId = setInterval(() => {
        randomColor();

    }, TIME_DELAY);
    e.target.disabled = 'true';
    refs.start.removeEventListener('click', startColorSwitch);
    refs.stop.addEventListener('click', stopColorSwitch);
  };

  function stopColorSwitch (e) {
    clearInterval(intervalId);

    refs.start.removeAttribute('disabled');
    refs.start.addEventListener('click', startColorSwitch);
    refs.stop.removeEventListener('click', stopColorSwitch);

  };