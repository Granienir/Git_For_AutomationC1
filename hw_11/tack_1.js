function waitFor1sec(text, timeout) {
  setTimeout(() => {
    console.log(text);
  }, timeout);
}

waitFor1sec("Wait 1_1 second", 1000);
