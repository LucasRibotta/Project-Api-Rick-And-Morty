const express = require ('express')
const { getCharById, login, postFav, deleteFav, postUser} = require('../controllers/index')
const router = express.Router();

router.get("/login", login);
router.post("/login", postUser)
router.get("/character/:id", getCharById);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;