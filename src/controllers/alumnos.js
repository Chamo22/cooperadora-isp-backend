const MDB_STUDENTS = require('../database/Schema/alumnos');

const obtenerAlumnos= async (req,res)=>{
    const response= await MDB_STUDENTS.find();
    
    res.send(response)
    console.log("Alumnos obtenidos")
}

const crearAlumno = async (req, res ) => {    
    
    const response = await MDB_STUDENTS.create({
        nombre: 'Fabian',
        apellido: 'Bobadilla',
        dni: 44292989,
        direccion: 'bustamante',
        telefono: '3498524229',
        email: 'fabianaguirre147@gmail.com',
        fecha_nacimiento: new Date()
    }) 
    res.send(response)
}

module.exports = {
    obtenerAlumnos,
    crearAlumno
}