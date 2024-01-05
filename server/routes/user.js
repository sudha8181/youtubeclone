import express from "express"
import {login} from '../controller/auth.js';
import { updateChanelData,getAllChanels} from "../controller/chanel.js";


const routes=express.Router();
routes.post('/login',login)
routes.post('/update/:id',updateChanelData)
routes.get('/getAllChanels',getAllChanels);


export default routes;