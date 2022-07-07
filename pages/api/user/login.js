import Joi from "joi"
import {withIronSessionApiRoute} from "iron-session/next"
import createHandler from "../../../lib/middlewares/nextConnect"
import validate from "../../../lib/middlewares/validation"
import {login} from "../../../modules/user/user.service"
import {ironConfig} from "../../../lib/middlewares/ironSession"

const loginSchema = Joi.object({    
  userOremail: Joi.string().required(),
  password: Joi.string().required()
})
                 
const handler = createHandler()   

handler.post(validate({body: loginSchema}), async(req,res) => { 
  try{
    const user = await login(req.body)
    req.session.user = {
      id: user._id,
      user: user.user
    }
    await req.session.save({ok: true})
    res.send(user)
  }catch(err){
    console.error(err)
    throw err
  }
})


export default withIronSessionApiRoute(handler,ironConfig)