let myFavorites = [];

const postFav = (req, res) => {
    const {character} = req.body;
    console.log(character)
    myFavorites.push(character);
    res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    myFavorites = myFavorites.filter((fav) => fav.id !== parseInt(id));
    res.json(myFavorites)
}

module.exports = {postFav, deleteFav}