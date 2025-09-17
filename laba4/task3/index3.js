function maskCard(card, maskChar = 'X') {
  if (card === null || card === undefined) {
    throw new Error('Не передан номер карты');
  }

  const s = String(card);
  if (s.length < 10) {
    return s;
  }
  
  const mask = (typeof maskChar === 'string' && maskChar.length > 0) ? maskChar[0] : 'X';

  const firstSix = s.slice(0, 6);
  const lastFour = s.slice(-4);
  const middleLen = s.length - 10;

  const middleMasked = mask.repeat(middleLen);

  return firstSix + middleMasked + lastFour;
}

document.addEventListener('DOMContentLoaded', () => {
  const cardInput = document.getElementById('cardInput');
  const maskCharInput = document.getElementById('maskChar');
  const output = document.getElementById('output');
  const btn = document.getElementById('maskBtn');

  btn.addEventListener('click', () => {
    const card = cardInput.value.trim();
    let maskChar = maskCharInput.value;

    try {
      if (maskChar === '') maskChar = 'X';
      const masked = maskCard(card, maskChar);
      output.textContent = masked;
    } catch (err) {
      output.textContent = 'Ошибка: ' + err.message;
    }
  });
});
