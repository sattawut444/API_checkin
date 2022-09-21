const bcrypt = require('bcrypt');
const fun = []; //ประกาศตัว function ทั้งหมด ของ fun

    // * เข้ารหัส ( register )
fun.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
    
};
    // * ตรวจสอบ password (Check password)
// fun.checkPassword = async (password, passwordDB) => {
//     console.log(password, passwordDB)
//     const isValid = await bcrypt.compare(password, passwordDB);
//     console.log(isValid)
//     return isValid;
// };

module.exports = fun;