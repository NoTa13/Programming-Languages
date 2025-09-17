function myReverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]; 
  }
  return result;
}

function runReverse() {
  const input = document.getElementById("inputStr").value;
  const reversed = myReverse(input);
  document.getElementById("output").textContent = reversed;
}
