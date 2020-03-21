const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

let MESSAGE = {"**********": ' '};

function decode(expr) { 
    let result = '';
    for (key in MORSE_TABLE) {
      MESSAGE[getNumber(key)] = MORSE_TABLE[key];
    } 
    for(i = 0; i < expr.length; i += 10) {
      let char = expr.substring(i, i + 10);
      result += MESSAGE[char];
    }
    return result;
  }
  
  function getNumber(str) {
    let numberStr = str.replace(/\./g, '10').replace(/\-/g, '11').padStart(10, '0');
    return numberStr;
  }

module.exports = {
    decode
}