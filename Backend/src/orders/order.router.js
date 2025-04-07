const { createOrder, getOrders } = require('./order.controller');

const router = require('express').Router();

router.post('/', createOrder);
router.get('/:email', getOrders);
module.exports = router;

