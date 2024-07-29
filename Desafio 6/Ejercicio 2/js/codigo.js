let ingresoTotal = Number.parseInt (prompt (" ingreso total: " )) 
let gastosNecesarios = ( ingresoTotal % 50 )
let gastosOpcionales= (ingresoTotal % 30)
let ahorro = (ingresoTotal % 20)

console.log ("gastos necesarios: " , gastosNecesarios , " , gastos opcionales: " , gastosOpcionales ,
             ", ahorro e inversión:", ahorro )