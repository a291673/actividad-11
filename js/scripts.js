
const actividad = (tarea,duracion,callback) => {
    setTimeout(() => {
        callback(tarea);
    }, duracion);
}
actividad("levantarse",5000, (tarea) => {
    console.log("tarea: "+ tarea);
    actividad("tender la cama",3000, (tarea) => {
        console.log("tarea: "+ tarea);
        actividad("bañarse",3000, (tarea) => {
            console.log("tarea: "+ tarea);
            actividad("Tomar clase de paradigmas",5000, (tarea) => {
                console.log("tarea: "+ tarea);
                actividad("desayunar",8000, (tarea) => {
                    console.log("tarea: "+ tarea);
                    actividad("Jugar",10000, (tarea) => {
                        console.log("tarea: "+ tarea);
                        
                    })
                })
            })
        })
    })
})