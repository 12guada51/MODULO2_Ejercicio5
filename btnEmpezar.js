var COLORES = ['VERDE', 'AMARILLO', 'ROJO', 'VERDE']
var i=0 
const semaforoImg = document.querySelector('#semaforo-img')

const botonEmp = document.querySelector ('btnEmpezar')
function btnEmpezar() {
  function cambioLuz() {
      while (i<=3) {
      let colorEspecifico = COLORES.at(i);
      i = i + 1
      console.log(colorEspecifico)
      if (!COLORES.length)
      COLORES = ['VERDE', 'AMARILLO', 'ROJO', 'VERDE']
      semaforoImg.src = colorEspecifico + ".png"
      return colorEspecifico
      }
      alert("Recarga la página para volver a funcionar.")
    }
    intervalID = setInterval(cambioLuz, 1000)
}