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

function decode(expr) {
    var answer = '';
    for (let i = 0; i < expr.length; i += 10) {
        if (expr[i] === '*') {
            answer += ' ';
            continue;  }
        var char = '';
        for (let j = i; j < i + 10; j += 2) {       
          switch (expr.slice(j, j + 2)) {
                case '11': char += '-';
                    break; 
                case '10': char += '.';
                    break;
                default:
                    break;    }            
        }                
     answer += MORSE_TABLE[char];
    }

    return answer;
    // write your solution here
}

module.exports = {
    decode
}