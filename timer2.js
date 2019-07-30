const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout

//const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

stdin.on("data", key => {
  if (key === "\u0062") {
    process.stdout.write("." + "\n");
  } else if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("." + "\n");
    }, key * 1000);
  } else {
    //if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});
