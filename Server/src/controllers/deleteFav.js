const {Favorite } = require("../DB_connection");


const deleteFav = async (req, res) => {
    const {id} = req.params
    try {
        const deletedCount = await Favorite.destroy({where: {id}})
        if(deletedCount === 0){
            res.status(404).json({message: "Personaje no encontrado"})
        }
        const favs = await Favorite.findAll();
        res.status(200).json(favs)
     } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = deleteFav;