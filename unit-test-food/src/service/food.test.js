const food = require('./food')

describe('test cal_order function', () => {
  test('calculate input order is_not_member', () => {
    expect(food.cal_order(['yellow','pink'], false)).toBe(130);
  });
  test('calculate input order is_member', () => {
    expect(food.cal_order(['yellow','pink'], true)).toBe(117);
  });
  test('calculate input order -5% is_member', () => {
    expect(food.cal_order(['yellow','orange','orange'], true)).toBe(247.95);
  });
  test('calculate input order -5% is_not_member', () => {
    expect(food.cal_order(['yellow','orange','orange'], false)).toBe(275.5);
  });
  test('calculate outof order is_not_member', () => {
    expect(food.cal_order(['yellow','orange','test'], false)).toBe('fail');
  });
  test('calculate outof order is_member', () => {
    expect(food.cal_order(['yellow','orange','test'], true)).toBe('fail');
  });
  test('calculate empty order is_member', () => {
    expect(food.cal_order([], true)).toBe(0);
  });
  test('calculate empty order is_member', () => {
    expect(food.cal_order([], false)).toBe(0);
  });
});