let count = 1;

while (count <= 100) {
  if (count % 5 === 0 && count % 3 === 0) {
    console.log("fizz buzz");
  } else if (count % 5 === 0) {
    console.log("buzz");
  } else if (count % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(count);
  }

  count++;
}
