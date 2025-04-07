const Order = require('./order.model');

const createOrder = async (req,res)=>{
    try{
      const newOrder = await Order(req.body);
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    }catch(error){
       console.log('creating order error',error);
       res.status(500).json({message: 'Internal server error'});
    }
}

const getOrders = async (req,res)=>{
  try{
    const email = req.params.email;
    const orders = await Order.find({email});
    if(!orders){
      return res.status(404).json({message: 'No orders found'});
    }
    res.status(200).json(orders);
  }catch(error){
     console.log('getting orders error',error);
     res.status(500).json({message: 'Internal server error'});
  }
}

module.exports = {
    createOrder,
    getOrders
}