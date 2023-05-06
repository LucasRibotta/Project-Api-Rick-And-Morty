const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
    const { id,name, image} = req.body;
    console.log(req.body)
    if (!name || !image  ) {
        return res.status(401).json({ message: "Faltan datos" });
      }
    try {
        const [fav, created] = await Favorite.findOrCreate({
            where: {id,name, image},
            /* defaults: { image} */
        });
        
        const favs = await Favorite.findAll()
          console.log(favs)
       

        res.status(200).json(favs)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = postFav; 

/* const Favorite = require('../DB_connection')

const postFav = async (req, res) => {

    const {name, image, species, gender, id} = req.body;

    try {
        if(!name || !image || !species || !gender || !id) res.status(401).json({message: 'Faltan datos'}) 
        //  await favHundlers(name, image, species, gender, id)
        const fav = await Favorite.Create({
            where: 
            {name, image, species, gender, id}
        });
// 
        const favAll = await Favorite.findAll()
        res.status(200).json(favAll)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
        
    
};

module.exports = postFav;  */