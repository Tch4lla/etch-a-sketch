const container = document.querySelector('#container');

const createBlocks = (numberOfRows, numberOfColumns) => {
  const blockSize = Math.min(100 / numberOfColumns, 100 / numberOfRows); // Calculate the size based on the smaller dimension

  for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.style.width = `${blockSize}% `;
      block.style.height = `${blockSize}% `;
      container.appendChild(block);
    }
  }
};
const addHoverClass = () => {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach((block) =>
    block.addEventListener('mouseover', () => {
      block.classList.add('hover');
    })
  );
};

const clearBlocks = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
const resetBlocks = () => {
  clearBlocks();
  createBlocks(16, 16);
  addHoverClass();
};

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetBlocks);

createBlocks(16, 16);

addHoverClass();

const squaresButton = document.querySelector('#squares');
squaresButton.addEventListener('click', () => {
  const gridNumber = prompt('Enter a number of squares 100 or less');
  const gridNumberValue = parseInt(gridNumber);

  if (isNaN(gridNumberValue)) {
    alert('Please enter a number');
  } else if (gridNumberValue > 100) {
    alert('Please enter a value less than 100');
  }
  clearBlocks();
  createBlocks(gridNumberValue, gridNumberValue);
  addHoverClass();
});
