var _ = require('lodash');
var order = {
    'red': 50,
    'green': 40,
    'blue': 30,
    'yellow': 50,
    'pink': 80,
    'purple': 90,
    'orange': 120,
};
function percentage(num, per) {
    return (num / 100) * per;
}
function cal_order(datas, member) {
    if (!Array.isArray(datas) || (typeof member) !== "boolean" || _.uniq(Object.keys(order).concat(datas)).length > 7) {
        return 'fail';
    }
    let total = datas.reduce((accumulator, currentValue) => accumulator + order[currentValue], 0);
    let is_dupOrange = datas.filter((d) => d.includes(['orange',])).length == 2 ? true : false;;
    let is_dupGreen = datas.filter((d) => d.includes(['green',])).length == 2 ? true : false;;
    let is_dupPink = datas.filter((d) => d.includes(['pink',])).length == 2 ? true : false;
    if (member) {
        total = total - percentage(total, 10); // ismember -10%
    }
    if (is_dupOrange || is_dupGreen || is_dupPink) {
        return total - percentage(total, 5) // -5%
    } else {
        return total;
    }
}
module.exports = {
    cal_order,
};