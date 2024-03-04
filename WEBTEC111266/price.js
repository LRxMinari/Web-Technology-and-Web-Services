const stampPrice = 30;
const pillowPrice = 50;
const emmaStamp = 33;

if (pillowPrice > emmaStamp) {
  console.log(
    "Emma need more " + ((pillowPrice - emmaStamp) * stampPrice + 1) + " baht."
  );
} else {
  console.log("Emma have enough stamp. But need more 1 baht to get pillow.");
}
