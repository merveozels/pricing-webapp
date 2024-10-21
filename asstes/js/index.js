

rangeInput.addEventListener('input',hesapla);

function hesapla(){
  pageCounter.innerText = `${rangeInput.value}.00₺ `;
}