const StringLength = require('./string-length');

test('elements strictly superior than 50 are : 2', () => {
  expect(
    StringLength(
      [
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition",
        "Test suite",
        "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500"
      ]
    )
  ).toBe(2);
});
