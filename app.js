const pressed = [];
const secretCode = 'wesbos';
// How to detect a sequence of pressed and trigger somthing(Gameshark Days up,up,down,down,left,right,left)
window.addEventListener('keyup', e => {
  pressed.push(e.key);
  console.log(pressed)
  pressed.splice(0, pressed.length - secretCode.length);

  if(pressed.join('').includes(secretCode)) {
    console.log('yaYYYYYYY')
    cornify_add();
  }
});