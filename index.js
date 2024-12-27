// Probemos con estos elementos
const elementos = [1, 2, 3];
const longitud = 2;

function encontrarCombinaciones(elementos, longitud) {
    const resultado = [];
    
    function backtrack(inicio, combinacionActual) {
        console.log(`Estado actual - inicio: ${inicio}, combinacionActual: [${combinacionActual}]`);
        
        if (combinacionActual.length === longitud) {
            resultado.push([...combinacionActual]);
            return;
        }
        
        for (let i = inicio; i < elementos.length; i++) {
            // Agregamos el elemento
            combinacionActual.push(elementos[i]);
            console.log(`  Después de push: [${combinacionActual}]`);
            
            // Llamada recursiva
            backtrack(i + 1, combinacionActual);
            
            // Removemos el elemento
            combinacionActual.pop();
            console.log(`  Después de pop: [${combinacionActual}]`);
        }
    }
    
    backtrack(0, []);
    return resultado;
}

console.log(encontrarCombinaciones(elementos, 2));