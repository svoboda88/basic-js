const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let emailToArr = email.split('').reverse();
  console.log(emailToArr);
  const pesun = emailToArr.indexOf("@");
  const newArr = emailToArr.filter((el, i) => {
      return i < pesun;
  })
  return newArr.reverse().join('');

}

module.exports = {
  getEmailDomain
};
