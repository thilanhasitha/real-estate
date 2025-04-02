import { Router } from "express";
import { getAllUsers } from "../controller/user.controller.js";

const route = Router();

route.get('/getusers',getAllUsers);

export default route;