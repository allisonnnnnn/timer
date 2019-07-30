const args = process.argv.slice(2).map(num => {
  return Number(num);
});

// args.sort((a, b) => {
//   return a - b;
// });

// console.log(args);

// console.log(args);

for (let i = 0; i < args.length; i++) {
  setTimeout(() => {
    process.stdout.write("." + "\n");
  }, args[i] * 1000);
}
