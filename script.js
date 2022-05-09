let upArrow = new Image();
upArrow.src = 'up-arrow.png';

const div = document.createElement('div');
div.className = 'container';
document.body.append(div);
const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboardContainer';
div.append(keyboardContainer);
console.log(upArrow)

const keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 'Backspace', 'Tab', 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 'DEL', 'Caps Lock', 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 'ENTER', 'Shift', 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];



function init() {
    let out = '';
    
    for(let i = 0;i<keyboard.length;i++) {
        if(typeof keyboard[i] == 'number') {
            out += '<div class="keykey" >' +String.fromCharCode(keyboard[i])+ '</div>'
        } else {
            out += '<div class="keykey" >' + keyboard[i]+ '</div>';
        }
    }
    
    keyboardContainer.innerHTML = out;
}
init()
