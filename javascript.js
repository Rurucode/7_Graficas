let api = async () => {
    try{
        let respuesta = await fetch("https://swapi.dev/api/films");
        let aJson = await respuesta.json();
        let arrayPeliculas = []
        let arrayAnos = []
        for(let i = 0; i < aJson.results.length; i++) {
            arrayPeliculas.push(aJson.results[i].title);
        }
        for(let i = 0; i < aJson.results.length; i++) {
            arrayAnos.push(aJson.results[i].release_date);
        }
        let conversor = arrayAnos.map((a)=> parseInt(a))
        let peliYear = {
            titulo: arrayPeliculas,
            year: conversor
        }
        return peliYear;
    }
    catch{
        console.log(`TIENES UN ERROOOOR: ${error.stack}`);
    }
}




api()
.then(datos=> {
    console.log(datos);
    var data = {
    labels: datos.titulo,
      series: [datos.year]
  };
  
  var options = {
    low: 1975,
    max: 2005,
    height: "600px",
    seriesBarDistance: 15,
    axisY:{
        onlyInteger: true
    }
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      seriesBarDistance: 10,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
    }],
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  
  new Chartist.Line('#chart1', data, options, responsiveOptions);
    
}) 





