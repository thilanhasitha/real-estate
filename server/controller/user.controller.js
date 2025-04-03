import bcryptjs from 'bcryptjs';
import User from '../model/user.model.js';
import { errorHandler } from '../utils/error.js';

export const getAllUsers = (req, res, next) => {
    try {
        res.status(200).json({
            msg: "users are displayed!"
        });
    } catch (error) {
        next(error);
    }
};
export const addUsers = async(req,res,next)=>{
    const { username,email,password } = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,email,password:hashPassword,
    });
    try{
        await newUser.save();
        res.status(200);
        res.json({
            msg:"users created"
        })
    }
    catch(error){
        res.status(400)
        next(errorHandler(550,'error from the function'));
    }
};


