const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const bodyEl = document.querySelector('body')
  const buttonsEl = document.querySelectorAll('button')
  // console.log(buttonsEl[0].dataset.action)
  // console.log(buttonsEl[1].dataset.action)

  // console.log(buttonsEl)

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };