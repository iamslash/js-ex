const person = 'Mike';
const age = 28;
const score = 10;

function myTag(strings, personExp, ageExp, aaaExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? 'centenarian' : 'youngster';

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}${aaaExp}`;
}

const thatOutput = myTag`That ${person} is a ${age}. ${score}`;
const thisOutput = myTag`This ${person} is a ${age}. ${score}`;

console.log(thatOutput);
// That Mike is a youngster. 10
console.log(thisOutput);
// This Mike is a youngster. 10
