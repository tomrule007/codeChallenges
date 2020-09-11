const {
  countGoodTriplets,
  tripletOrderedCombinations,
  isGoodTriplet,
} = require('./countGoodTriplets');
describe('countGoodTriplets.js', () => {
  describe('tripletOrderedCombinations', () => {
    // *This is the correct formula as it eliminates the need to filter for ordered indexs
    // Lookup nCr Combinations (n <- object count , r <- sample size)
    // C(n,r)=n!/((n−r)!r!)
    it('is a function', async () => {
      expect(typeof tripletOrderedCombinations).toBe('function');
    });

    it('given Array (length = 3), return Array (length = 1)', async () => {
      expect(tripletOrderedCombinations([1, 2, 3]).length).toBe(1);
    });
    it('given Array (length = 4), return Array (length = 4)', async () => {
      expect(tripletOrderedCombinations([1, 2, 3, 4]).length).toBe(4);
    });

    it('returns empty array when given array of less than three', async () => {
      expect(tripletOrderedCombinations([1]).length).toBe(0);
      expect(tripletOrderedCombinations([1]).length).toBe(0);
      expect(tripletOrderedCombinations([1, 2]).length).toBe(0);
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
    describe('Failed test: heap out of memory', () => {
      const largeInput = [
        [
          52,
          66,
          102,
          109,
          147,
          147,
          186,
          59,
          9,
          96,
          119,
          120,
          71,
          21,
          93,
          23,
          87,
          162,
          190,
          55,
          17,
          137,
          81,
          83,
          17,
          23,
          138,
          44,
          99,
          31,
          44,
          178,
          114,
          80,
          46,
          180,
          24,
          97,
          36,
          18,
          13,
          170,
          146,
          128,
          10,
          142,
          194,
          105,
          51,
          5,
          168,
          67,
          194,
          176,
          105,
          64,
          155,
          63,
          154,
          134,
          114,
          181,
          142,
          161,
          84,
          53,
          152,
          50,
          71,
          180,
          189,
          49,
          154,
          130,
          125,
          170,
          91,
          182,
          17,
          43,
          105,
          150,
          91,
          118,
          136,
          156,
          69,
          86,
          44,
          98,
          100,
          18,
          30,
          132,
          174,
          10,
          43,
          92,
          76,
          41,
        ],
        82,
        79,
        95,
      ];
      it('uses less memory to solve this problem', () => {
        // Will use function speed to test this. Currently ~150 ms on my rig (from ~300-400 on old version).
        // Compared to simple tests at ~1ms
        expect(countGoodTriplets(...largeInput)).toBe(66268);
      });
    });
  });
});
