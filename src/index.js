//  ./node_modules/.bin/babel src/index.js --out-dir lib
const fn = () => {
  console.log("hello babel");
  const a = 1;
  a++;
  const b = 2;
  console.log("hello babel");
  Number(b);
};
