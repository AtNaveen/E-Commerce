import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";


const createToken = (id) => {
   return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async(req,res) => {

    try {
    const {email , password}=req.body;
   
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({message:"User Need to be registered"})
    }
    const compare = bcrypt.compareSync(password,user.password)
   if(!compare){
        return res.status(404).json({message:"Invalid Password"})
    }
     
    if(compare) {
    const token = createToken(user._id)
    res.json({status:200, message:"User Login Successfully",token})
    }
    else {
        res.json({status:404 , message:"Invalid credentials"})
    }
    
    }catch(err){
        
     return res.status(500).json({message:err.message})
}
    

}

const registerUser = async(req,res) => {
      
    try {
      const {name , email , password}= req.body;

      const exists = await userModel.findOne({email})

      if(exists) {
        res.json({status:404 ,msg:"User already exists in this email"})
      }
      if(!validator.isEmail(email)) {
        res.json({status:404 ,msg:"Not a valid email"})
      }
      if(password < 8) {
        res.json({status:404 ,msg:"Give a strong password"})
      }
   
      const hashedpassword = bcrypt.hashSync(password,10)


      const newUser = new userModel({
        name,
        email,
        password:hashedpassword
      })

      const user = await newUser.save()

   const token = createToken(user._id)
 
      res.json({status:200,token})

    }
   catch(e){
        res.json({status:500 , msg:e.message})
   }
}


const adminLogin = async(req,res) => {
    try {
      const {email , password} = req.body;

      if(email === process.env.ADMIN_EMIAL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({status:200 ,token})
      }
      else{
        res.json({status:404 ,message:"Invalid Credentials"})
      }
    }
    catch(e){
        res.json({status:500 , msg:e.message})
   }

}

export {loginUser , registerUser , adminLogin}