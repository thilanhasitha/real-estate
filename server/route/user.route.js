import { Router } from "express";
import { addUsers, getAllUsers, signin } from "../controller/user.controller.js";

const route = Router();

route.get('/getusers',getAllUsers);
route.post('/adduser',addUsers);
route.post('/sign-in',signin)

export default route;