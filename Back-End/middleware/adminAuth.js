import jwt from 'jsonwebtoken'

const adminAuth = async(req,res,next) =>{

    try {
      const {token} = req.headers

      if(!token){
        res.json({status:404 , message:"Not authorized Login again"})
      }
      const token_decode = jwt.verify(token,process.env.JWT_SECRET);

      if (token_decode !== process.env.ADMIN_EMIAL + process.env.ADMIN_PASSWORD) {
         res.json({status:404 , message:"Not authorized Login again"})
      }
      next()
    }
    catch(e){
        res.json({status:500 , message:e.message})
    }

}

export default adminAuth