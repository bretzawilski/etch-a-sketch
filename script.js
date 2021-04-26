const containerNode = document.getElementById('container');

function createBoard() {
  for (i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement('div')
    newDiv.id = 'div-' + i;
    newDiv.classList.add('board');
    containerNode.appendChild(newDiv);
  }

  const paintDiv = document.getElementsByClassName('board');
  const painted = Array.from(paintDiv);

  function changeColor(event) {
    const specificDiv = event.currentTarget;
    specificDiv.classList.replace('board', 'painted-board');
  };

  function shake() {
    containerNode.innerHTML = '';
    createBoard();
  }

  painted.forEach(element => {
    element.addEventListener('mouseenter', changeColor);
  });

  const shakeButton = document.getElementById('shake');
  shakeButton.addEventListener('click', shake);
}



createBoard();