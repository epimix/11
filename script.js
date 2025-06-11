//1
const colors = ['red', 'cyan', 'violet', 'green', 'yellow', 'blue', 'black', 'gray'];
const blockContainer = document.getElementById('blocks');
const addBlockBtn = document.getElementById('addBlock');

function createBlock(color) {
  const block = document.createElement('div');
  block.className = 'block';
  block.style.backgroundColor = color;
  blockContainer.appendChild(block);
}

function addBlock() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  createBlock(color);
  const blocks = JSON.parse(localStorage.getItem('blocks') || '[]');
  blocks.push(color);
  localStorage.setItem('blocks', JSON.stringify(blocks));
}

function restoreBlocks() {
  const saved = JSON.parse(localStorage.getItem('blocks') || '[]');
  saved.forEach(color => createBlock(color));
}
//2
const states = ['red', 'yellow', 'lime'];
let current = 0;
const nextBtn = document.getElementById('nextBtn');

function updateLight() {
  states.forEach((color, index) => {
    const el = document.getElementById(color);
    el.style.backgroundColor = (index === current) ? color : 'lightblue';
  });
}

function nextLight() {
  current = (current + 1) % states.length;
  updateLight();
  localStorage.setItem('lightIndex', current);
}

function restoreLight() {
  const savedIndex = localStorage.getItem('lightIndex');
  if (savedIndex !== null) {
    current = parseInt(savedIndex);
  }
  updateLight();
}


window.onload = function() {
  restoreBlocks();
  restoreLight();
};

addBlockBtn.addEventListener('click', addBlock);
nextBtn.addEventListener('click', nextLight);
