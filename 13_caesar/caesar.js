const caesar = function(message, key) {
  let encrypted = '';
  let n = key % 26;
for (i = 0; i < message.length; i++) {
  let code = message.charCodeAt(i);

  if (code >= 65 && code <= 90) {
  code = code + n;
  
  if (code > 90) {
    code = code - 26;
  } else if (code < 65) {
    code = code + 26;
  }
  }

  if (code >= 97 && code <= 122) {
    code = code + n;
    
    if (code > 122) {
      code = code - 26;
    } else if (code < 97) {
      code = code + 26;
    }
    }

  encrypted += String.fromCharCode(code);
} 
return encrypted;
};
// Do not edit below this line
module.exports = caesar;
