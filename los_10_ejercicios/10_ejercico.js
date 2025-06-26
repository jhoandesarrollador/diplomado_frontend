/*

## Problemas

### Problema 1: Calculadora de Descuento

Crea una función llamada **`calcularDescuento`** que reciba dos parámetros: **`precioOriginal`** (un número) y **`porcentajeDescuento`** (un número entre 0 y 100). La función debe devolver el precio final después de aplicar el descuento. Si el porcentaje de descuento no es válido (menor que 0 o mayor que 100), la función debe devolver un mensaje de error como: "El porcentaje de descuento no es válido".

### Problema 2: Clasificador de Edades

Escribe una función llamada **`clasificarEdad`** que tome un número entero **`edad`** como argumento. La función debe devolver:
* "Niño" si la edad es menor de 13.
* "Adolescente" si la edad está entre 13 y 17 (inclusive).
* "Adulto" si la edad es 18 o mayor.

### Problema 3: Par o Impar

Crea una función llamada **`esParOImpar`** que reciba un número entero. La función debe devolver la cadena "Es par" si el número es par, y "Es impar" si el número es impar. Usa el operador módulo.

### Problema 4: Área de un Triángulo

Escribe una función llamada **`calcularAreaTriangulo`** que reciba dos parámetros: **`base`** y **`altura`**. Ambos son números. La función debe devolver el área del triángulo. Si alguno de los valores es negativo o cero, la función debe devolver: "La base y la altura deben ser valores positivos."

### Problema 5: Mayor de Tres Números

Crea una función llamada **`encontrarMayor`** que reciba tres números como argumentos. La función debe devolver el número más grande de los tres. No utilices arreglos.

### Problema 6: Conversor de Temperatura

Diseña una función llamada **`convertirTemperatura`** que reciba dos parámetros: **`valor`** (un número) y **`unidad`** (una cadena, puede ser "C" para Celsius o "F" para Fahrenheit). La función debe convertir el valor a la otra unidad.
* Si la unidad es "C", convierte a Fahrenheit ($$F = C \times 9/5 + 32$$).
* Si la unidad es "F", convierte a Celsius ($$C = (F - 32) \times 5/9$$).
* Si la unidad no es "C" ni "F", devuelve "Unidad no válida".

### Problema 7: Calculadora de Índice de Masa Corporal (IMC)

Crea una función llamada **`calcularIMC`** que reciba **`peso`** (en kilogramos) y **`altura`** (en metros). La función debe devolver el IMC ($$IMC = peso / (altura \times altura)$$). Además, la función debe clasificar el IMC y devolver:
* "Bajo peso" si IMC < 18.5
* "Normal" si 18.5 <= IMC < 24.9
* "Sobrepeso" si 25 <= IMC < 29.9
* "Obesidad" si IMC >= 30
Considera casos donde el peso o la altura sean no válidos (cero o negativos) y devuelve un mensaje de error.

### Problema 8: Día de la Semana (Usando Switch)

Escribe una función llamada **`obtenerNombreDia`** que reciba un número del 1 al 7 (donde 1 es Lunes y 7 es Domingo). La función debe devolver el nombre del día correspondiente. Utiliza una estructura **`switch`**. Si el número no está en el rango, devuelve "Número de día no válido".

### Problema 9: Redondeo Especial

Crea una función llamada **`redondearNumero`** que reciba un número decimal. La función debe redondear el número:
* Al entero más cercano si la parte decimal es .5 o mayor (ej. 3.5 -> 4, 3.7 -> 4).
* Hacia abajo si la parte decimal es menor que .5 (ej. 3.4 -> 3).
* **Pista:** Investiga los métodos de la librería **`Math`** para lograr esto.

### Problema 10: Comparación de Cadenas Ignorando Mayúsculas/Minúsculas

Escribe una función llamada **`compararCadenas`** que reciba dos cadenas de texto. La función debe devolver `true` si las cadenas son iguales, ignorando si están en mayúsculas o minúsculas, y `false` en caso contrario. Por ejemplo, "Hola" y "hola" deberían considerarse iguales.

*/

// ==================== SOLUCIONES ====================

// Problema 1: Calculadora de Descuento
function calcularDescuento(precioOriginal, porcentajeDescuento) {
    // Primero verifico si el porcentaje es válido
    if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
        return "El porcentaje de descuento no es válido";
    }
    
    // Calculo el descuento
    var descuento = precioOriginal * (porcentajeDescuento / 100);
    var precioFinal = precioOriginal - descuento;
    
    return precioFinal;
}

// Pruebas Problema 1
console.log("1. Calculadora de Descuento:");
console.log(calcularDescuento(100, 20)); // 80
console.log(calcularDescuento(50, 150)); // "El porcentaje de descuento no es válido"


// Problema 2: Clasificador de Edades
function clasificarEdad(edad) {
    if (edad < 13) {
        return "Niño";
    } else if (edad >= 13 && edad <= 17) {
        return "Adolescente";
    } else {
        return "Adulto";
    }
}

// Pruebas Problema 2
console.log("\n2. Clasificador de Edades:");
console.log(clasificarEdad(10)); // "Niño"
console.log(clasificarEdad(15)); // "Adolescente"
console.log(clasificarEdad(25)); // "Adulto"

// Problema 3: Par o Impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "Es par";
    } else {
        return "Es impar";
    }
}


// Pruebas Problema 3
console.log("\n3. Par o Impar:");
console.log(esParOImpar(4)); // "Es par"
console.log(esParOImpar(7)); // "Es impar"



// Problema 4: Área de un Triángulo
function calcularAreaTriangulo(base, altura) {
    // Verifico que los valores sean positivos
    if (base <= 0 || altura <= 0) {
        return "La base y la altura deben ser valores positivos.";
    }
    
    // Calculo el área
    var area = (base * altura) / 2;
    return area;
}

// Pruebas Problema 4
console.log("\n4. Área de Triángulo:");
console.log(calcularAreaTriangulo(10, 5)); // 25
console.log(calcularAreaTriangulo(-5, 10)); // "La base y la altura deben ser valores positivos."

// Problema 5: Mayor de Tres Números
function encontrarMayor(num1, num2, num3) {
    var mayor = num1;
    
    if (num2 > mayor) {
        mayor = num2;
    }
    
    if (num3 > mayor) {
        mayor = num3;
    }
    
    return mayor;
}


// Pruebas Problema 5
console.log("\n5. Mayor de Tres:");
console.log(encontrarMayor(5, 10, 3)); // 10


// Problema 6: Conversor de Temperatura
function convertirTemperatura(valor, unidad) {
    if (unidad === "C") {
        // Convierto de Celsius a Fahrenheit
        var fahrenheit = valor * 9 / 5 + 32;
        return fahrenheit;
    } else if (unidad === "F") {
        // Convierto de Fahrenheit a Celsius
        var celsius = (valor - 32) * 5 / 9;
        return celsius;
    } else {
        return "Unidad no válida";
    }
}


// Pruebas Problema 6
console.log("\n6. Conversor de Temperatura:");
console.log(convertirTemperatura(0, "C")); // 32
console.log(convertirTemperatura(32, "F")); // 0


// Problema 7: Calculadora de IMC
function calcularIMC(peso, altura) {
    // Verifico que los valores sean válidos
    if (peso <= 0 || altura <= 0) {
        return "El peso y la altura deben ser valores positivos";
    }
    
    // Calculo el IMC
    var imc = peso / (altura * altura);
    
    // Clasifico el IMC
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}


// Pruebas Problema 7
console.log("\n7. Calculadora de IMC:");
console.log(calcularIMC(70, 1.75)); // "Normal"


// Problema 8: Día de la Semana
function obtenerNombreDia(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número de día no válido";
    }
}


// Pruebas Problema 8
console.log("\n8. Día de la Semana:");
console.log(obtenerNombreDia(1)); // "Lunes"
console.log(obtenerNombreDia(8)); // "Número de día no válido"


// Problema 9: Redondeo Especial
function redondearNumero(numero) {
    // Obtengo la parte decimal
    var parteDecimal = numero - Math.floor(numero);
    
    if (parteDecimal >= 0.5) {
        // Redondeo hacia arriba
        return Math.ceil(numero);
    } else {
        // Redondeo hacia abajo
        return Math.floor(numero);
    }
}

// Pruebas Problema 9
console.log("\n9. Redondeo Especial:");
console.log(redondearNumero(3.7)); // 4
console.log(redondearNumero(3.4)); // 3


// Problema 10: Comparación de Cadenas
function compararCadenas(cadena1, cadena2) {
    // Convierto ambas cadenas a minúsculas y las comparo
    var cadena1Minuscula = cadena1.toLowerCase();
    var cadena2Minuscula = cadena2.toLowerCase();
    
    if (cadena1Minuscula === cadena2Minuscula) {
        return true;
    } else {
        return false;
    }
}


// Pruebas Problema 10
console.log("\n10. Comparación de Cadenas:");
console.log(compararCadenas("Hola", "hola")); // true
console.log(compararCadenas("Casa", "Perro")); // false




