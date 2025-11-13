
let x = 0;
let y = 50;
let direction = 1; 

function moveBackground() {
    x += 0.05 * direction; 
    if (x > 100 || x < 0) direction *= -1; 
    document.body.style.backgroundPosition = `${x}% ${y}%`;
    requestAnimationFrame(moveBackground);
}


moveBackground();

// Formatação telefone
const telInput = document.getElementById('telefone');

telInput.addEventListener('input', (e) => {
  let valor = e.target.value;

  valor = valor.replace(/\D/g, '');

  // 051 = 51
  if (valor.length >= 3 && valor.startsWith("0")) {
    valor = valor.substring(1);
  }

  // Aplica o formato
  if (valor.length > 2 && valor.length <= 7) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
  } else if (valor.length > 7) {
    valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7, 11)}`;
  }

  e.target.value = valor;
});
