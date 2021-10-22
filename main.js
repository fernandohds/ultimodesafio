
let equipo = prompt("Ingresa uno de los 5 grandes en mayuscula");
//Repetimos hasta que se ingresa "ESC"
while(equipo != "ESC" ){
   switch (equipo) {
        case "INDEPENDIENTE":
            alert("CLUB ATLETICO INDEPENDIENTE");
            break;
        case "RIVER":
            alert("CLUB ATLETICO RIVER PLATE");
            break;
        case "BOCA":
                alert("CLUB ATLETICO BOCA JUNIORS");
            break;
        case "RACING":
                alert("CLUB ATLETICO RACING CLUB");
            break;    
        case "SAN LORENZO":
                alert("CLUB ATLETICO SAN LORENZO DE ALMAGRO");
            break;        
       default:
           alert("ESE NO ES UN EQUIPO GRANDE")
           break;
   }
   equipo= prompt("Ingresa otro club");
}
