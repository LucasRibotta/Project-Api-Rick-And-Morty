const axios = require ('axios')

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
  try {
    const {id} = req.params
    const {data} = await axios.get(URL + id)
    const {name, image, specie } = data
    res.status(200).json({id, name, specie, image })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
} 



module.exports = getCharById;