

const text = document.createElement('textarea');
const div = document.createElement('div');
text.className = 'text';
div.className = 'container';
div.append(text)
document.body.append(div);
const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboardContainer';
div.append(keyboardContainer);




const keyboard = [
    {
        codeName: 'Backquote',
        rus: {
            Low: 'ё',
            Up: 'Ё',
            Caps:'Ё',
        },
        eng: {
            Low: '`',
            Up: '~',
            Caps: '`',
        },
    },
    {
        codeName: 'Digit1',
        rus: {
            Low: '1',
            Up: '!',
            Caps:'1',
        },
        eng: {
            Low: '1',
            Up: '!',
            Caps: '1',
        },
    },
    {
        codeName: 'Digit2',
        rus: {
            Low: '2',
            Up: '"',
            Caps:'2',
        },
        eng: {
            Low: '2',
            Up: '@',
            Caps: '2',
        },
    },
    {
        codeName: 'Digit3',
        rus: {
            Low: '3',
            Up: '№',
            Caps:'3',
        },
        eng: {
            Low: '3',
            Up: '#',
            Caps: '3',
        },
    },
    {
        codeName: 'Digit4',
        rus: {
            Low: '4',
            Up: ';',
            Caps:'4',
        },
        eng: {
            Low: '4',
            Up: '$',
            Caps: '4',
        },
    },
    {
        codeName: 'Digit5',
        rus: {
            Low: '5',
            Up: '%',
            Caps:'5',
        },
        eng: {
            Low: '5',
            Up: '%',
            Caps: '5',
        },
    },
    {
        codeName: 'Digit6',
        rus: {
            Low: '6',
            Up: ':',
            Caps:'6',
        },
        eng: {
            Low: '6',
            Up: '^',
            Caps: '6',
        },
    },
    {
        codeName: 'Digit7',
        rus: {
            Low: '7',
            Up: '?',
            Caps:'7',
        },
        eng: {
            Low: '7',
            Up: '&',
            Caps: '7',
        },
    },
    {
        codeName: 'Digit8',
        rus: {
            Low: '8',
            Up: '*',
            Caps:'8',
        },
        eng: {
            Low: '8',
            Up: '*',
            Caps: '8',
        },
    },
    {
        codeName: 'Digit9',
        rus: {
            Low: '9',
            Up: '(',
            Caps:'9',
        },
        eng: {
            Low: '9',
            Up: '(',
            Caps: '9',
        },
    },
    {
        codeName: 'Digit0',
        rus: {
            Low: '0',
            Up: ')',
            Caps:'0',
        },
        eng: {
            Low: '0',
            Up: ')',
            Caps: '0',
        },
    },
    {
        codeName: 'minus',
        rus: {
            Low: '-',
            Up: '_',
            Caps:'-',
        },
        eng: {
            Low: '-',
            Up: '_',
            Caps: '-',
        },
    },
    {
        codeName: 'plus',
        rus: {
            Low: '=',
            Up: '+',
            Caps:'=',
        },
        eng: {
            Low: '=',
            Up: '+',
            Caps: '=',
        },
    },
    {
        codeName: 'Backspace',
        rus: {
            Low: 'Backspace',
            Up: 'Backspace',
            Caps:'Backspace',
        },
        eng: {
            Low: 'Backspace',
            Up: 'Backspace',
            Caps: 'Backspace',
        },
    },
    {
        codeName: 'Tab',
        rus: {
            Low: 'Tab',
            Up: 'Tab',
            Caps:'Tab',
        },
        eng: {
            Low: 'Tab',
            Up: 'Tab',
            Caps: 'Tab',
        },
    },
    {
        codeName: 'q',
        rus: {
            Low: 'й',
            Up: 'Й',
            Caps:'Й',
        },
        eng: {
            Low: 'q',
            Up: 'Q',
            Caps: 'Q',
        },
    },
    {
        codeName: 'w',
        rus: {
            Low: 'ц',
            Up: 'Ц',
            Caps:'Ц',
        },
        eng: {
            Low: 'w',
            Up: 'W',
            Caps: 'W',
        },
    },
    {
        codeName: 'e',
        rus: {
            Low: 'у',
            Up: 'У',
            Caps:'У',
        },
        eng: {
            Low: 'e',
            Up: 'E',
            Caps: 'E',
        },
    },
    {
        codeName: 'r',
        rus: {
            Low: 'к',
            Up: 'К',
            Caps:'К',
        },
        eng: {
            Low: 'r',
            Up: 'R',
            Caps: 'R',
        },
    },
    {
        codeName: 't',
        rus: {
            Low: 'е',
            Up: 'Е',
            Caps:'Е',
        },
        eng: {
            Low: 't',
            Up: 'T',
            Caps: 'T',
        },
    },
    {
        codeName: 'y',
        rus: {
            Low: 'н',
            Up: 'Н',
            Caps:'Н',
        },
        eng: {
            Low: 'y',
            Up: 'Y',
            Caps: 'Y',
        },
    },
    {
        codeName: 'u',
        rus: {
            Low: 'г',
            Up: 'Г',
            Caps:'Г',
        },
        eng: {
            Low: 'u',
            Up: 'U',
            Caps: 'U',
        },
    },
    {
        codeName: 'i',
        rus: {
            Low: 'ш',
            Up: 'Ш',
            Caps:'Ш',
        },
        eng: {
            Low: 'i',
            Up: 'I',
            Caps: 'I',
        },
    },
    {
        codeName: 'o',
        rus: {
            Low: 'щ',
            Up: 'Щ',
            Caps:'Щ',
        },
        eng: {
            Low: 'o',
            Up: 'O',
            Caps: 'O',
        },
    },
    {
        codeName: 'p',
        rus: {
            Low: 'з',
            Up: 'З',
            Caps:'З',
        },
        eng: {
            Low: 'p',
            Up: 'P',
            Caps: 'P',
        },
    },
    {
        codeName: '[',
        rus: {
            Low: 'х',
            Up: 'Х',
            Caps:'Х',
        },
        eng: {
            Low: '[',
            Up: '{',
            Caps: '[',
        },
    },
    {
        codeName: ']',
        rus: {
            Low: 'ъ',
            Up: 'Ъ',
            Caps:'Ъ',
        },
        eng: {
            Low: ']',
            Up: '}',
            Caps: ']',
        },
    },
    {
        codeName: 'DEL',
        rus: {
            Low: 'DEL',
            Up: 'DEL',
            Caps:'DEL',
        },
        eng: {
            Low: 'DEL',
            Up: 'DEL',
            Caps: 'DEL',
        },
    },
    {
        codeName: 'Caps Lock',
        rus: {
            Low: 'Caps Lock',
            Up: 'Caps Lock',
            Caps:'Caps Lock',
        },
        eng: {
            Low: 'Caps Lock',
            Up: 'Caps Lock',
            Caps: 'Caps Lock',
        },
    },
    {
        codeName: 'a',
        rus: {
            Low: 'ф',
            Up: 'Ф',
            Caps:'Ф',
        },
        eng: {
            Low: 'a',
            Up: 'A',
            Caps: 'A',
        }
    },
    {
        codeName: 's',
        rus: {
            Low: 'ы',
            Up: 'Ы',
            Caps:'Ы',
        },
        eng: {
            Low: 's',
            Up: 'S',
            Caps: 'S',
        }
    },
    {
        codeName: 'd',
        rus: {
            Low: 'в',
            Up: 'В',
            Caps:'В',
        },
        eng: {
            Low: 'd',
            Up: 'D',
            Caps: 'D',
        }
    },
    {
        codeName: 'f',
        rus: {
            Low: 'а',
            Up: 'А',
            Caps:'А',
        },
        eng: {
            Low: 'f',
            Up: 'F',
            Caps: 'F',
        }
    },
    {
        codeName: 'g',
        rus: {
            Low: 'п',
            Up: 'П',
            Caps:'П',
        },
        eng: {
            Low: 'g',
            Up: 'G',
            Caps: 'G',
        }
    },
    {
        codeName: 'h',
        rus: {
            Low: 'р',
            Up: 'Р',
            Caps:'Р',
        },
        eng: {
            Low: 'h',
            Up: 'H',
            Caps: 'H',
        }
    },
    {
        codeName: 'j',
        rus: {
            Low: 'о',
            Up: 'О',
            Caps:'О',
        },
        eng: {
            Low: 'j',
            Up: 'J',
            Caps: 'J',
        }
    },
    {
        codeName: 'k',
        rus: {
            Low: 'л',
            Up: 'Л',
            Caps:'Л',
        },
        eng: {
            Low: 'k',
            Up: 'K',
            Caps: 'K',
        }
    },
    {
        codeName: 'l',
        rus: {
            Low: 'д',
            Up: 'Д',
            Caps:'Д',
        },
        eng: {
            Low: 'l',
            Up: 'L',
            Caps: 'L',
        }
    },
    {
        codeName: ';',
        rus: {
            Low: 'ж',
            Up: 'Ж',
            Caps:'Ж',
        },
        eng: {
            Low: ';',
            Up: ':',
            Caps: ';',
        }
    },
    {
        codeName: 'quaotes',
        rus: {
            Low: 'э',
            Up: 'Э',
            Caps:'Э',
        },
        eng: {
            Low: "'",
            Up: '"',
            Caps: "'",
        }
    },
    {
        codeName: 'enter',
        rus: {
            Low: 'ENTER',
            Up: 'ENTER',
            Caps:'ENTER',
        },
        eng: {
            Low: 'ENTER',
            Up: 'ENTER',
            Caps: 'ENTER',
        }
    },
    {
        codeName: 'Shift',
        rus: {
            Low: 'Shift',
            Up: 'Shift',
            Caps:'Shift',
        },
        eng: {
            Low: 'Shift',
            Up: 'Shift',
            Caps: 'Shift',
        }
    },

    {
        codeName: 'z',
        rus: {
            Low: 'я',
            Up: 'Я',
            Caps:'Я',
        },
        eng: {
            Low: 'z',
            Up: 'Z',
            Caps: 'Z',
        }
    },
    {
        codeName: 'x',
        rus: {
            Low: 'ч',
            Up: 'Ч',
            Caps:'Ч',
        },
        eng: {
            Low: 'x',
            Up: 'X',
            Caps: 'X',
        }
    },
    {
        codeName: 'c',
        rus: {
            Low: 'с',
            Up: 'С',
            Caps:'С',
        },
        eng: {
            Low: 'c',
            Up: 'C',
            Caps: 'C',
        }
    },
    {
        codeName: 'v',
        rus: {
            Low: 'м',
            Up: 'М',
            Caps:'М',
        },
        eng: {
            Low: 'v',
            Up: 'V',
            Caps: 'V',
        }
    },
    {
        codeName: 'b',
        rus: {
            Low: 'и',
            Up: 'И',
            Caps:'И',
        },
        eng: {
            Low: 'b',
            Up: 'B',
            Caps: 'B',
        }
    },
    {
        codeName: 'n',
        rus: {
            Low: 'т',
            Up: 'Т',
            Caps:'Т',
        },
        eng: {
            Low: 'n',
            Up: 'N',
            Caps: 'N',
        }
    },
    {
        codeName: 'm',
        rus: {
            Low: 'ь',
            Up: 'Ь',
            Caps:'Ь',
        },
        eng: {
            Low: 'm',
            Up: 'M',
            Caps: 'M',
        }
    },
    {
        codeName: ',',
        rus: {
            Low: 'б',
            Up: 'Б',
            Caps:'Б',
        },
        eng: {
            Low: ',',
            Up: '<',
            Caps: ',',
        }
    },
    {
        codeName: '.',
        rus: {
            Low: 'ю',
            Up: 'Ю',
            Caps:'Ю',
        },
        eng: {
            Low: '.',
            Up: '>',
            Caps: '.',
        }
    },
    {
        codeName: '/',
        rus: {
            Low: '.',
            Up: ',',
            Caps:'.',
        },
        eng: {
            Low: '/',
            Up: '?',
            Caps: '/',
        }
    },
    {
        codeName: 'arrowUp',
        rus: {
            Low: '',
            Up: '',
            Caps:'',
        },
        eng: {
            Low: '',
            Up: '',
            Caps: '',
        }
    },    {
        codeName: 'Shift',
        rus: {
            Low: 'Shift',
            Up: 'Shift',
            Caps:'Shift',
        },
        eng: {
            Low: 'Shift',
            Up: 'Shift',
            Caps: 'Shift',
        }
    },
    {
        codeName: 'Ctrl',
        rus: {
            Low: 'Ctrl',
            Up: 'Ctrl',
            Caps:'Ctrl',
        },
        eng: {
            Low: 'Ctrl',
            Up: 'Ctrl',
            Caps: 'Ctrl',
        }
    },
    {
        codeName: 'Win',
        rus: {
            Low: 'Win',
            Up: 'Win',
            Caps:'Win',
        },
        eng: {
            Low: 'Win',
            Up: 'Win',
            Caps: 'Win',
        }
    },
    {
        codeName: 'Alt',
        rus: {
            Low: 'Alt',
            Up: 'Alt',
            Caps:'Alt',
        },
        eng: {
            Low: 'Alt',
            Up: 'Alt',
            Caps: 'Alt',
        }
    },
    {
        codeName: 'space',
        rus: {
            Low: '',
            Up: '',
            Caps:'',
        },
        eng: {
            Low: '',
            Up: '',
            Caps: '',
        }
    },
    {
        codeName: 'Alt',
        rus: {
            Low: 'Alt',
            Up: 'Alt',
            Caps:'Alt',
        },
        eng: {
            Low: 'Alt',
            Up: 'Alt',
            Caps: 'Alt',
        }
    },
    {
        codeName: 'Ctrl',
        rus: {
            Low: 'Ctrl',
            Up: 'Ctrl',
            Caps:'Ctrl',
        },
        eng: {
            Low: 'Ctrl',
            Up: 'Ctrl',
            Caps: 'Ctrl',
        }
    },
    {
        codeName: 'arrowLeft',
        rus: {
            Low: '',
            Up: '',
            Caps:'',
        },
        eng: {
            Low: '',
            Up: '',
            Caps: '',
        }
    },
    {
        codeName: 'arrowDown',
        rus: {
            Low: '',
            Up: '',
            Caps:'',
        },
        eng: {
            Low: '',
            Up: '',
            Caps: '',
        }
    },
    {
        codeName: 'arrowRight',
        rus: {
            Low: '',
            Up: '',
            Caps:'',
        },
        eng: {
            Low: '',
            Up: '',
            Caps: '',
        }
    },
    

];



function init() {
    let out = '';
    
    for(let i = 0;i<keyboard.length;i++) {
    if (i == 52){
    out += '<div class="keykey" id="upArr" >' + keyboard[i].eng.Low + '</div>'
    }
    if (i == 60){
        out += '<div class="keykey" id="leftArr" >' + keyboard[i].eng.Low + '</div>'
    }
    if (i == 61){
        out += '<div class="keykey" id="downArr" >' + keyboard[i].eng.Low + '</div>'
    }
    if (i == 62){
        out += '<div class="keykey" id="rightArr" >' + keyboard[i].eng.Low + '</div>'
    }
    out += '<div class="keykey" >' + keyboard[i].eng.Low + '</div>'

  }
    
    keyboardContainer.innerHTML = out;
}
init();

let keykey = document.querySelectorAll('.keykey');
for(let i = 0;i<keyboard.length;i++){
    keykey[i].classList.add(`numb${i}`)
}


let upArrow = new Image();
upArrow.src = 'up-arrow.png';
upArrow.id = 'arrowImg';

let leftArrow = new Image();
leftArrow.src = 'up-arrow.png';
leftArrow.id = 'left__arrow';

let downArrow = new Image();
downArrow.src = 'up-arrow.png';
downArrow.id = 'down__arrow';

let rightArrow = new Image();
rightArrow.src = 'up-arrow.png';
rightArrow.id = 'right__arrow';

let upArr = document.querySelector('#upArr');
upArr.appendChild(upArrow);
let leftArr = document.querySelector('#leftArr');
leftArr.appendChild(leftArrow);
let downArr = document.querySelector('#downArr');
downArr.appendChild(downArrow);
let rightArr = document.querySelector('#rightArr');
rightArr.appendChild(rightArrow);

let win = document.querySelector('.numb56');
win.addEventListener('click',()=>{
    
    let out = ''
    for(let i = 0;i<keyboard.length;i++) {
        if (i == 52){
        out += '<div class="keykey" id="upArr" >' + keyboard[i].rus.Up + '</div>'
        }
        if (i == 60){
            out += '<div class="keykey" id="leftArr" >' + keyboard[i].rus.Up + '</div>'
        }
        if (i == 61){
            out += '<div class="keykey" id="downArr" >' + keyboard[i].rus.Up + '</div>'
        }
        if (i == 62){
            out += '<div class="keykey" id="rightArr" >' + keyboard[i].rus.Up + '</div>'
        }
        out += '<div class="keykey" >' + keyboard[i].rus.Low + '</div>'
      }
keyboardContainer.innerHTML = out;

let upArrow = new Image();
upArrow.src = 'up-arrow.png';
upArrow.id = 'arrowImg';

let leftArrow = new Image();
leftArrow.src = 'up-arrow.png';
leftArrow.id = 'left__arrow';

let downArrow = new Image();
downArrow.src = 'up-arrow.png';
downArrow.id = 'down__arrow';

let rightArrow = new Image();
rightArrow.src = 'up-arrow.png';
rightArrow.id = 'right__arrow';

let upArr = document.querySelector('#upArr');
upArr.appendChild(upArrow);
let leftArr = document.querySelector('#leftArr');
leftArr.appendChild(leftArrow);
let downArr = document.querySelector('#downArr');
downArr.appendChild(downArrow);
let rightArr = document.querySelector('#rightArr');
rightArr.appendChild(rightArrow);

})

document.onkeypress = function(event) {
    for(let i = 0;i<keyboard.length;i++){
        if (event.key == keyboard[i].eng.Low || event.key == keyboard[i].eng.Up) {
            console.log(this)
        }
    }
}





