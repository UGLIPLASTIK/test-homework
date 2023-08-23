import chekHealth from "../app.js"

test.each([
  ['healthy', 50, 'healthy'],
  ['wounded', 30, 'wounded'],
  ['critical', 10, 'critical'],
])('check health level %s status and %i value', (status, value, expexted) => {
  const unit = {name: 'Маг', health: value};
  const result = chekHealth(unit);
  expect(result).toBe(expexted)
});