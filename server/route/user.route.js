import { Router } from "express";
import { addUsers, getAllUsers } from "../controller/user.controller.js";

const route = Router();

route.get('/getusers',getAllUsers);
route.post('/adduser',addUsers);

export default route;