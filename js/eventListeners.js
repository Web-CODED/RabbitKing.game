// Keyboard controls
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'w':
      player.jump();
      keys.w.pressed = true;
      break;
    case 'a':
      keys.a.pressed = true;
      break;
    case 'd':
      keys.d.pressed = true;
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'a':
      keys.a.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
});

// Create touch buttons for mobile input
document.addEventListener('DOMContentLoaded', () => {
  // Left button
  const leftButton = document.getElementById('left-button');
  leftButton.addEventListener('touchstart', () => keys.a.pressed = true);
  leftButton.addEventListener('touchend', () => keys.a.pressed = false);

  // Right button
  const rightButton = document.getElementById('right-button');
  rightButton.addEventListener('touchstart', () => keys.d.pressed = true);
  rightButton.addEventListener('touchend', () => keys.d.pressed = false);

  // Jump button
  const jumpButton = document.getElementById('jump-button');
  jumpButton.addEventListener('touchstart', () => player.jump());
});

// On return to game's tab, ensure delta time is reset
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    lastTime = performance.now();
  }
});