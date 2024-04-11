// Variável para armazenar a próxima posição do botão móvel
var nextPositionIndex = 0;

// Coordenadas dos 4 cantos em relação ao botão fixo
var cornerCoordinates = [
  { left: -50, top: -50 },  // canto superior esquerdo
  { left: 50, top: -50 },   // canto superior direito
  { left: -50, top: 50 },   // canto inferior esquerdo
  { left: 50, top: 50 }     // canto inferior direito
];

// Adiciona um evento de clique ao botão móvel
document.getElementById("movableButton").addEventListener("click", function() {
  // Obtém referências aos botões móvel e fixo
  var movableButton = document.getElementById("movableButton");
  var fixedButton = document.getElementById("fixedButton");
  
  // Calcula a próxima posição do botão móvel
  var nextPosition = cornerCoordinates[nextPositionIndex];
  
  // Define a nova posição do botão móvel
  movableButton.style.left = (fixedButton.offsetLeft + nextPosition.left) + "px";
  movableButton.style.top = (fixedButton.offsetTop + nextPosition.top) + "px";
  
  // Atualiza o índice da próxima posição para circular entre os 4 cantos
  nextPositionIndex = (nextPositionIndex + 1) % cornerCoordinates.length;
});
