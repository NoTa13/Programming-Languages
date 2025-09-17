function getRange(start, end, step = 1) {
  const result = [];
  if (step === 0) throw new Error("Шаг не может быть равен 0");

  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

function generate() {
  const start = Number(document.getElementById("start").value);
  const end = Number(document.getElementById("end").value);
  const step = Number(document.getElementById("step").value) || 1;

  try {
    const range = getRange(start, end, step);
    document.getElementById("output").textContent = JSON.stringify(range);
  } catch (err) {
    document.getElementById("output").textContent = "Ошибка: " + err.message;
  }
}
