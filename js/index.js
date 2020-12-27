const shiftNum = document.querySelector("#shift");
const message = document.querySelector("#message");
const result = document.querySelector("#result");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const proxy = new Proxy(alphabet, {
  get(target, prop) {
    if (!isNaN(prop)) {
      prop = parseInt(prop, 10);
      if (prop < 0) {
        prop += target.length;
      }
    }
    return target[prop];
  },
});
let end_text = "";
function encrypt() {
  end_text = "";
  let shiftVal = Number(shiftNum.value);
  let messageVal = message.value;
  if (messageVal === "" || shiftVal === "") {
    alert("Please fill all the required fields(shift number and message)");
  }

  shiftVal = shiftVal % 26;
  messageVal = messageVal.toLowerCase();
  messageVal.split("").forEach((str) => {
    let index = alphabet.indexOf(str);
    if (index === -1) {
      end_text += str;
    } else {
      let newPosition = index + shiftVal;
      end_text += alphabet[newPosition];
    }
  });
  result.value = end_text;
}
function decrypt() {
  end_text = "";
  let shiftVal = Number(shiftNum.value);
  let messageVal = message.value;
  if (messageVal === "" || shiftVal === "") {
    alert("Please fill all the required fields(shift number and message)");
  }
  shiftVal = shiftVal % 26;
  shiftVal *= -1;
  messageVal = messageVal.toLowerCase();
  messageVal.split("").forEach((str) => {
    let index = alphabet.indexOf(str);
    if (index === -1) {
      end_text += str;
    } else {
      let newPosition = index + shiftVal;
      end_text += proxy[newPosition];
    }
  });
  result.value = end_text;
}
