/*

Given a string s consisting of small English letters, 
find and return the first instance of a non-repeating 
character in it. If there is no such character, return '_'.
*/

function firstNotRepeatingCharacter(s) {
  const characterCount = s.split('').reduce((charMap, char) => {
    const currentCount = charMap.get(char) || 0;
    charMap.set(char, currentCount + 1);
    return charMap;
  }, new Map());

  for (const [char, count] of characterCount.entries()) {
    if (count == 1) return char;
  }
  return '_';
}
