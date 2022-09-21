
function myOtp(min = 100000, max = 999999) {
    const N = max - min + 1;
    return Math.floor(Math.random() * N) + min;
}
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
function myID(min = 100000000000000, max = 999999999999999) {
  const N = max - min + 1;
  return Math.floor(Math.random() * N) + min;
}
module.exports = {myOtp,makeid,myID}