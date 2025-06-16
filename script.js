$(function () {
  const colors = ['red', 'lightblue', 'green', 'yellow', 'cyan', 'pink', 'lime', 'brown'];
  const $blocks = $('#blocks');

  const saved = JSON.parse(localStorage.getItem('blocks') || '[]');
  saved.forEach(c => addBlock(c));

  function addBlock(color) {
    $('<div class="block">').css('background', color).appendTo($blocks).click(function () {
      $(this).remove();
      saveBlocks();
    });
    console.log(color);
  }

  function saveBlocks() {
    const list = [];
    $('.block').each(function () {
      list.push($(this).css('background-color'));
    });
    localStorage.setItem('blocks', JSON.stringify(list));
  }

  $('#addBlock').click(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    addBlock(color);
    saveBlocks();
  });



  const lightStates = ['red', 'yellow', 'lime'];
  let currentIndex = parseInt(localStorage.getItem('light') || '0');

  function updateLights() {
    lightStates.forEach((color, index) => {
      $('#' + color).css('background-color', index === currentIndex ? color : 'lightslategray');
    });
  }

  $('#next-light').click(function () {
    currentIndex = (currentIndex + 1) % lightStates.length;
    updateLights();
    localStorage.setItem('light', currentIndex);
  });

  updateLights();
});
