import lint from '../lint';

describe('lint', () => {
  test('finds zero errors with minimal valid style', () => {
    const expected = [];
    const actual = lint({
      version: 8,
      sources: {},
      layers: []
    });
    expect(actual).toEqual(expected);
  });

  test('finds one error with missing layers', () => {
    const actual = lint({
      version: 8,
      sources: {}
    });

    expect(actual.length).toEqual(1);
  });

  test('finds one error with invalid layer property', () => {
    const actual = lint({
      version: 8,
      sources: {},
      layers: [
        {
          "id": "land",
          "type": "background",
          "paint": {
            "background-color": "hsl(46, 49%, 93%)",
            "abcdefg": 5
          }
        }
      ]
    });

    expect(actual.length).toEqual(1);
  });

  test('finds one error with misplaced layout property in layer', () => {
    const actual = lint({
      version: 8,
      sources: {},
      layers: [
        {
          "id": "land",
          "type": "background",
          "paint": {
            "background-color": "hsl(46, 49%, 93%)"
          },
          "line-cap": "round"
        }
      ]
    });

    expect(actual.length).toEqual(1);
  });

  test('finds one error with misplaced paint property in layer', () => {
    const actual = lint({
      version: 8,
      sources: {},
      layers: [
        {
          "id": "land",
          "type": "background",
          "paint": {
            "background-color": "hsl(46, 49%, 93%)"
          },
          "line-width": 5
        }
      ]
    });

    expect(actual.length).toEqual(1);
  });
});
