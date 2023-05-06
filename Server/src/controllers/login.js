const {User} = require("../DB_connection");

const login = async (req, res) => {
    const {email, password} = req.query;
    try {
       if(!email || !password) {
        res.status(400).json({message: "Faltan Datos"});
    }   
       const user = await User.findOne({where: {email}})

       if(!user) {
        res.status(404).json({message: "Usuario no encontrado."});
    }
       if(user.password !== password) {
        res.status(403).json({message: "Contraseña incorrecta"});
    
    }
       res.status(200).json({access: true})

    } catch (error) {
        console.log("Se cayo Armando")
        res.status(500).json({message: "error de Armando"})
    }
}

module.exports = login; 


/* const {User }= require('../DB_connection')

const login = async (req, res) => {
    const {email, password} = req.query
    try {
        if(!email || !password) return res.status(400).json({error: 'Faltan datos'})
        const findOneLogin = await User.findOne({where: {email}});
        if(!findOneLogin) return res.status(404).json({error: 'Usuario no encontrado'});
        findOneLogin.password === password
            ? res.status(200).json({access: true}) 
            : res.status(403).json({error: 'Contraseña incorrecta'});
        
    } catch (error) {
        res.status(500).json(error.message);
    }
    
}

module.exports = login;  */