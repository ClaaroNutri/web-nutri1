function calcularIMC() {

    var peso = document.getElementById("peso").value;

    var altura = document.getElementById("altura").value;
    
    var calcularIMC = Math.round(peso / (altura * altura));

    
    
    if (calcularIMC <18.5) {
        alert(`Su indice de masa corporal es de: ${calcularIMC} y su clasificación es Bajo peso`);
        
    } else if (calcularIMC >= 18.5 && calcularIMC <= 24.9) {
        alert(`Su indice de masa corporal es de: ${calcularIMC} y su clasificación es Normo peso`); 
        
    } else if (calcularIMC >= 25 && calcularIMC <= 29.9) {
        alert(`Su indice de masa corporal es de: ${calcularIMC} y su clasificación es Sobrepeso`);
    }
    else if (calcularIMC >= 30 && calcularIMC <= 34.9) {
        alert(`Su indice de masa corporal es de: ${calcularIMC} y su clasificación es Obesidad grado 1`);
    }
    else if (calcularIMC >= 35 && calcularIMC <= 39.9) {
        alert(`Su indice de masa corporal es de: ${calcularIMC} y su clasificación es Obesidad grado 2`);
    }
    else if (calcularIMC >= 40) {
        alert(`Su indice de masa corporal es de: ${calcularIMC} y su clasificación es Obesidad mórbida`);
    } 
}