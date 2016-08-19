'use strict';
function shouldMakeError() {
  const millis = new Date().getMilliseconds()
  return millis % 3 === 0;
}

module.exports = function () {
  if (shouldMakeError()) {
    return new Error('my-error');
  }
  return null;
};
