import express from 'express'
import { protect } from '../middlewares/protect.mjs'
import { Me ,Login, Register,Logout} from '../controllers/User.controller.mjs'


const router=express.Router()

router.get('/me',protect,Me)


router.post('/login',Login)

router.post('/register',Register)

router.post('/logout', Logout);
export default router