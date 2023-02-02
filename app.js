persona_random();

async function persona_random (){
    const response = await fetch('https://randomuser.me/api');
    const archivo_datos = await response.json();
    const ficha_de_persona = archivo_datos.results[0];
    cargar_datos_personales(ficha_de_persona);
}

<<<<<<< HEAD
=======
async function persona_experiencia (){
    const response2 = await fetch('/jason.json');
    const archivo_datos2 = await response2.json();
    let presentacion = document.getElementById("Presentacion");
    presentacion.innerHTML = `${archivo_datos2.presentacion}` ;
}


>>>>>>> d5a95871290e498196916a93b154b53a210a2d73
function cargar_datos_personales(ficha){

    let imagen_foto = document.getElementById("foto");
    imagen_foto.setAttribute('src', `${ficha.picture.large}`);

    //Para el encabezado de datos personales.
    cargar_al_id( `${ficha.name.title} ${ficha.name.first} ${ficha.name.last}` , "nombre-completo");

    //Para la seccion de Experiencias
    cargar_al_id( `${ficha.name.first} ${ficha.name.last}` , "nombre-apellido");
    cargar_al_id( `${ficha.location.city}` , "ciudad");
    cargar_al_id( `${ficha.location.state}` , "estado");
    
    //Para la tarjeta de Datos Personales
    cargar_al_id( `${ficha.name.first}` , "DP-nombre")
    cargar_al_id( `${ficha.name.last}` , "DP-apellido")
    cargar_al_id( `${ficha.dob.age}` , "DP-edad")
    cargar_al_id( `${ficha.nat}` , "DP-nacionalidad")
    
    //Para la tarjeta de Datos de Contacto
    cargar_al_id( `${ficha.phone}`, "DC-telefono")
    cargar_al_id( `${ficha.cell}`,"DC-celular");
    cargar_al_id( `${ficha.email}` ,"DC-email");
    cargar_al_id( `${ficha.location.street.number} ${ficha.location.street.name}`, "DC-direccion");
    cargar_al_id( `${ficha.location.city}, ${ficha.location.state} (${ficha.location.postcode})` , "DC-ubicacion");
}

function cargar_al_id(un_texto, un_id){
    let elemento_by_id = document.getElementById(un_id);
    elemento_by_id.innerHTML = un_texto;
}
