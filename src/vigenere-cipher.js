const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(name=true) {
      this.name = name;
  }

  encrypt(message, key) {
      if (message === undefined || key === undefined ) throw new Error(`Incorrect arguments!`);

      while (key.length < message.length) {
          key += key;
      }

      key=key.toUpperCase().split('');
      message = message.toUpperCase().split('');
      
      message = message.map((el, index) => {
          if (el.charCodeAt()<65 || el.charCodeAt()>90) {
              key.splice(index, 0, ' ');
              return el;
          }
          let code = el.charCodeAt() + key[index].charCodeAt() - 65;
          if (code <=90) {
              return String.fromCharCode(code)
          } else return String.fromCharCode(code-26);
      })

     return this.name ? message.join('') : message.reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined ) throw new Error(`Incorrect arguments!`);
      while (key.length < message.length) {
          key += key;
      }

      key=key.toUpperCase().split('');
      message = message.toUpperCase().split('');
      
      message = message.map((el, index) => {
          if (el.charCodeAt()<65 || el.charCodeAt()>90) {
              key.splice(index, 0, ' ');
              return el;
          }
          let code = el.charCodeAt() - key[index].charCodeAt() + 65;
          if (code >=65) {
              return String.fromCharCode(code)
          } else return String.fromCharCode(code+26);
      })

    return this.name ? message.join('') : message.reverse().join('');
      }
      
}

module.exports = {
  VigenereCipheringMachine
};
