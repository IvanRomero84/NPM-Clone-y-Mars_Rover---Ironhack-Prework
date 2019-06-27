// Rover Object Goes Here
var roverUno = {
  name: "Rover1",
  direction : "N",
  coorX: 4,
  coorY: 4,
  travelLog: [],
}

var roverDos = {
  name: "Rover2",
  direction : "N",
  coorX: 7,
  coorY: 7,
  travelLog: [],
}

// ======================

// ======================

var zone = [                  //Zona de obstaculos para el rover.
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "X", null, null, null, null, null],
  [null, null, null, null, null, null, null, "X", null, null],
  [null, null, "X", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, "X", null],
  [null, null, "X", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "X", null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

function turnLeft(params){          //Giro hacia la izquierda.
  switch(params.direction) {
    case "N":
    params.direction = "W";
    break;
    case "W":
    params.direction = "S";
    break;
    case "S":
    params.direction = "E";
    break;
    case "E":
    params.direction = "N";
    break;
  }
  console.log(`Rumbo actual del ${params.name}: ${params.direction}`);
}

function turnRight(params){          //Giro hacia la derecha.
  switch(params.direction) {
    case "N":
    params.direction = "E";
    break;
    case "E":
    params.direction = "S";
    break;
    case "S":
    params.direction = "W";
    break;
    case "W":
    params.direction = "N";
    break;
  }
  console.log(`Rumbo actual del ${params.name}: ${params.direction}`);
}

function moveForward(params){        //Desplazamiento frontal y guardado de coordenadas.
  for (let i=0; i<zone.length; i++){  //Bucle para localizar abstaculos.
    var row = params.coorX;
    var column = params.coorY;
    var stone = zone[row][column];
    if(stone === "X"){
      console.log(`${params.name} hemos topado con una roca en las coordenadas (${row},${column}) y no podemos proseguir...`);
      break;
    }else{
      if((roverUno.coorX === roverDos.coorX)&&(roverUno.coorY === roverDos.coorY)){ // control del colisiones entre rover's.
        console.log(`Hey! mira por donde vas, no estas trabajado solo! (Posible colisión de rover's en coordenadas [${params.coorX},${params.coorY}])`);
      }else{
  if(params.coorX>=0 && params.coorY>=0) {        //Limites por debajo de 0.
    if (params.coorX<=10 && params.coorY<=10) {     //Limites por encima de 10.
      switch(params.direction){
        case "N":
        params.coorY--;
        break;
        case "S":
        params.coorY++;
        break;
        case "W":
        params.coorX--;
        break;
        case "E":
        params.coorX++;
        break;
      }
    }else{
     console.log(`${params.name} estas en los limites establecidos, da la vuelta!`);
    }
  }else{
   console.log(`${params.name} estas en los limites establecidos, da la vuelta!`);
  }
    console.log(`${params.name} avanzas rumbo: ${params.direction}`);
    console.log(params.coorX, params.coorY);
    params.travelLog.push([params.coorX, params.coorY]);
    break;
    }
  }
  }
}

function moveBackward(params){      //Marcha atras y guardado de coordenadas.
  for (let i=0; i<zone.length; i++){  //Bucle para localizar abstaculos.
    var row = params.coorX;
    var column = params.coorY;
    var stone = zone[row][column];
    if(stone === "X"){
      console.log(`${params.name} hemos topado con una roca en las coordenadas (${row},${column}) y no podemos proseguir...`);
      break;
    }else{
      if((roverUno.coorX === roverDos.coorX)&&(roverUno.coorY === roverDos.coorY)){  // control del colisiones entre rover's.
        console.log(`Hey! mira por donde vas, no estas trabajado solo! (Posible colisión de rover's en coordenadas [${params.coorX},${params.coorY}])`);
      }else{
  if(params.coorX>=0 && params.coorY>=0) {        //Limites por debajo de 0.
    if (params.coorX<=10 && params.coorY<=10) {     //Limites por encima de 10.
      switch(params.direction){
        case "N":
        params.coorY++;
        break;
        case "S":
        params.coorY--;
        break;
        case "W":
        params.coorX++;
        break;
        case "E":
        params.coorX--;
        break;
      }
    }else{
      console.log(`${params.name} estas en los limites establecidos, da la vuelta!`);
    }
  }else{
    console.log(`${params.name} estas en los limites establecidos, da la vuelta!`);
  }
    console.log(`${params.name} marcha atras....tu rumbo sigue siendo: ${params.direction}`);
    console.log(params.coorX, params.coorY);
    params.travelLog.push([params.coorX, params.coorY]);
    break;
    }
  }
  }
}

function rute(arg){            //Ruta del rover y guardado de la misma en la propiedad travelLog.
  for(let i=0 ;i<arg.length; i++){

    if(arg[i] === "f"){
      moveForward(roverUno);
      moveForward(roverDos);
    } else if(arg[i] === "r"){
      turnRight(roverUno);
      turnRight(roverDos);
    } else if(arg[i] === "l"){
      turnLeft(roverUno);
      turnLeft(roverDos);
    } else if(arg[i] === "b"){
      moveBackward(roverUno);
      moveBackward(roverDos);
    }else{
      console.log(`${params.name} comando no reconocido....intruduce en el rumbo solo f->(adelante), r->(derecha), l->(izquierda) o b->(atras) el comando ${arg[i]} no existe`);
      break;
    }
  }
  console.log([roverUno.travelLog, roverDos.travelLog]);
}



