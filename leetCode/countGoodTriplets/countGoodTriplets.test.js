const {
  countGoodTriplets,
  tripletPermeations,
  isGoodTriplet,
} = require('./countGoodTriplets');
describe('countGoodTriplets.js', () => {
  describe('tripletPermeations', () => {
    // Lookup nPr Permutations (n <- object count , r <- sample size)
    // formula: P(n,r)=n!/(n−r)!  (r === 3)
    it('is a function', async () => {
      expect(typeof tripletPermeations).toBe('function');
    });

    it('returns array of length 6 when given array of length 3', async () => {
      expect(tripletPermeations([1, 2, 3]).length).toBe(6);
    });
    it('returns array of length 24  when given array of length 4', async () => {
      expect(tripletPermeations([1, 2, 3, 4]).length).toBe(24);
    });

    it('returns empty array when given array of less than three', async () => {
      expect(tripletPermeations([1]).length).toBe(0);
      expect(tripletPermeations([1]).length).toBe(0);
      expect(tripletPermeations([1, 2]).length).toBe(0);
    });
  });
  describe('isGoodTriplet', () => {
    it('is a function', async () => {
      expect(typeof isGoodTriplet).toBe('function');
    });
    describe('Returns good for all samples', () => {
      const a = 7;
      const b = 2;
      const c = 3;
      const isGoodTripletABC = isGoodTriplet(a, b, c);
      const goodTriplets = [[[3, 0, 1]], [[3, 0, 1]], [[3, 1, 1]], [[0, 1, 1]]];
      test.each(goodTriplets)('given %p, returns true', (goodTriplet) => {
        expect(isGoodTripletABC(goodTriplet)).toBe(true);
      });
    });
  });
  describe('countGoodTriplets', () => {
    it('is a function', async () => {
      expect(typeof countGoodTriplets).toBe('function');
    });
    describe('Passes these examples', () => {
      // arr,a,b,c,results
      const examples = [
        [[3, 0, 1, 1, 9, 7], 7, 2, 3, 4],
        [[1, 1, 2, 2, 3], 0, 0, 1, 0],
      ];
      test.each(examples)(
        'given arr: %p a: %p b: %p c: %p, returns %p',
        (arr, a, b, c, results) =>
          expect(countGoodTriplets(arr, a, b, c)).toBe(results)
      );
    });
  });
});
