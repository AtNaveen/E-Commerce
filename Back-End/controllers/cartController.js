import userModel from "../models/userModel.js";

const addtoCart = async(req,res) =>{
    try {
    const { itemId, size}  = req.body;
    const userId = req.userId;

    const userData = await userModel.findById(userId)
     if (!userData) {
            return res.status(404).json({ status: 404, msg: "User not found" });
        }

        let cartData = userData.cartData || {};
        
      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
           cartData[itemId][size] += 1
        }
        else {
           cartData[itemId] [size] = 1
        }
        } else {
           cartData[itemId] = {}
           cartData[itemId][size] = 1
        }
    await userModel.findByIdAndUpdate(userId, {cartData})
    res.json({success:true , msg:"Added To Cart"})
    }
    catch(e){
    console.log(e)
    res.json({success:false ,message:e.message})
   }

}

const UpdateCart = async(req,res) =>{
    try {
        const {itemId, size, quantity } = req.body;
        const userId = req.userId;

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({ success: true, message: "Cart Updated" })

        }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        }
    
}


const getUserCart = async(req,res) =>{
    try {
        
       const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ success:false, message: "Missing user id" });
        }

        const userData = await userModel.findById(userId)

       if (!userData) {
            return res.status(404).json({ success:false, message: "User not found" });
       }

      let cartData = userData.cartData || {};  

        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
    }   
    
}


export {addtoCart,UpdateCart,getUserCart};