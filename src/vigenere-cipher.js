const { NotImplementedError } = require('../lib');

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

  encrypt(message, key) {
    if (message === undefined || key === undefined) return 'Incorrect arguments!';
    if (message === null || key === null) return 'Incorrect arguments!';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';//'abcdefghijklmnopqrstuvwxyz';//'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetLength = alphabet.length;

    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const keyChar = key[i % key.length];

      const messageIndex = alphabet.indexOf(messageChar.toLowerCase())//getCharIndex(messageChar);
      const keyIndex = alphabet.indexOf(keyChar.toLowerCase());

      if (messageIndex !== -1) {
        const encryptedIndex = (messageIndex + keyIndex) % alphabetLength;
        encryptedMessage += alphabet[encryptedIndex];
      } else {

        encryptedMessage += messageChar;
      }
    }
    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) return 'Incorrect arguments!';
    if (encryptedMessage === null || key === null) return 'Incorrect arguments!';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetLength = alphabet.length;

    let decryptedMessage = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      const keyChar = key[i % key.length];

      const encryptedIndex = alphabet.indexOf(encryptedChar.toLowerCase());
      const keyIndex = alphabet.indexOf(keyChar.toLowerCase());

      if (encryptedIndex !== -1) {
        const decryptedIndex = (encryptedIndex - keyIndex + alphabetLength) % alphabetLength;
        decryptedMessage += alphabet[decryptedIndex];
      } else {
        decryptedMessage += encryptedChar;
      }
    }
    return decryptedMessage;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
