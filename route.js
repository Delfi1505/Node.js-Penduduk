const express = require('express')
const router = express.Router()

const {
    getAllPenduduk,
    getPenduduk,
    postPenduduk,
    deletePenduduk,
    putPenduduk
} = require('../controllers/controller')

router.route('/:id').get(getPenduduk).put(putPenduduk).delete(deletePenduduk)
router.route('/').get(getAllPenduduk).post(postPenduduk)

module.exports = router