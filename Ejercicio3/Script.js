var Alumnos=[
    {Nombre:'Juan Gomez',nota:7},
    {Nombre:'Pedro Rodriguez',nota:4},
    {Nombre:'Roxana Garcia',nota:8},
    {Nombre:'Luciano Lopez',nota:5},
    {Nombre:'Fernanda Gimenez',nota:6},
    {Nombre:'Florencia Martinez',nota:10},
    {Nombre:'Raul Sanchez',nota:7},
    {Nombre:'Snadra figueroa',nota:8}
    
]

const Aprobados = Alumnos.filter(num => num.nota >=7 )

for(var i=0; i<Aprobados.length; i++){
    document.write(`<p>Alumno: ${Aprobados[i].Nombre}, Nota:${Aprobados[i].nota}</p>`)
}