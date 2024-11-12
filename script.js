
/*Contador Simples*/

for (var i = 1 ;  i <= 5; i++){

    console.log(i)
  
  }
  
  /*Tabla de multiplicacion*/
  
  const entrada = 4;
  
  for (var k = 0; k <= 10 ; k++){
    console.log(`${entrada} x ${k} = ${k*entrada}`)
  }
  
  /*Suma elementos de un vetor*/
  
  const numero = [1 , 2, 3, 4, 5];
  
  let total = 0;
  
  for (var j = 0; j < numero.length ; j++ ){
  
    total += numero[j]
  
    console.log(total)
  
  }
  
  /*Bucle inverso*/
  
  const palabras = ["casa", "navio" , "barco"]
  
  console.log(palabras.length)
  
  for(var k = palabras.length - 1; k >= 0 ; k--){
    console.log(palabras[k])
  }
  
  /*Nidos para For*/
  
  for (var y = 1; y <= 3 ; y++){
    for (var w = 1; w <= 3 ; w++){
      console.log(`${y} x ${w} = ${w * y}`)
    }
  }