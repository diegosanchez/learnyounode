var sum = 0;
var trimmed = process.argv.slice(2);

for( var e in trimmed) {
  sum += Number(trimmed[e]);
}
console.log(sum);
