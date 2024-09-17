function prueba(text) {

}


const funcionOneLine = () => {
    let i = "hola mundo"
    //arrays
    var boots = [1, 2, 3, 4, 'gola', { 'hola': 1, 'mundo': 2 }, { 'hola': 1, 'mundo': 2 }, i]
    // prueba de indice
    /*   console.log(boots[5].mundo)
      console.log(boots[6]['hola']) */

    for (let i = 0; i < boots.length; i++) {
        console.log(boots[i]);
    }

    while (i < boots.length) {
        console.log(boots[i]);
        i++
    }

    boots.forEach(function (boot, i) {
        console.log(boot);
        console.log(i);

    })

    let recorridoBoot = boots.map(function (boot, i) {
        console.log(boot);
        console.log(i);

    })

    console.log(recorridoBoot);

    //objetos
    let camp = { 'hola': 1, 'mundo': boots, saludar: function () { return "Hola bienvenidos" } }

    let personas = { nombres: 'Jose luis', edad: 24, ciudad: 'Bogota', sexo: "M" }

    for (let clave in personas) {
        console.log(clave + " : " + personas[clave]);
    }

    Object.keys(personas).forEach(function (clave) {
        console.log(clave + " : " + personas[clave]);
    });

    Object.values(personas).forEach(function (valor) {
        console.log(valor)
    });

    Object.entries(personas).forEach(function ([clave, valor]) {
        console.log(clave + " : " + valor);
    })

    const bootscamps = () => {
        return "Hola este es mi valor"
    }


    const functionToFilter = (data) => {
        if (data != null) {
            return data.filter((item) => item == "andres" || item == "Santiago" || item == "jorge");
        }
    }

    console.log(functionToFilter(['name0', 'name1', 'fabian', 'andres', 'felipe', 'Santiago', 'jorge', 'pineda']));

    const functionToReduce = (data) => {
        if (data != null) {
            return data.reduce((acc, item) => acc + item, 0);
        }
    }

    console.log(functionToReduce([85, 85]));


    const functionToFind = (data) => {
        if (data != null) {
            return data.find((item) => item == "felipe");
        }
    }

    console.log(functionToFind(['name0', 'name1', 'fabian', 'felipe', 'Santiago', 'jorge', 'pineda']));


    const functionToSort = (data) => {
        if (data != null) {
            // let ascent = data.sort((a, b) => a - b);
            let descent = data.sort((a, b) => b - a);
            console.log(descent);

        }
    }

    functionToSort(["as", "bs", "js", "ts"])

    const functionToSplice = (data) => {
        if (data != null) {
            let spliced = data.splice(1, 2, "andres");
            console.log(spliced);
        }
    }

    functionToSplice(["name0", "name1", "fabian", "felipe", "Santiago", "jorge", "pineda"])


    let tareas = {
        'asignacion': "Ejecutar onclick",
        'asignacion': "Ejecutar onchange",
        'asignacion': "Ejecutar onMouseOver",
        'asignacion': "Ejecutar onKeypress",
    }

    localStorage.setItem('tareas', JSON.stringify(tareas));
    localStorage.removeItem('tareas');
    localStorage.clear();
    let tareasStorage = localStorage.getItem('tareas');
    console.log(JSON.parse(tareasStorage));


}