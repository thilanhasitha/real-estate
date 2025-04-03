import bcryptjs from 'bcryptjs';
import User from '../model/user.model.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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

export const signin = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        // firstly check the email is valid or not after check the password 
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler(404,'User not found'));

        //password check
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword) return next(errorHandler(404,'wrong credentials'));

        //create the token
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        //that is another thing
        const{password:pass,...rest} = validUser._doc;

        //token should be save inside the cookie
        res
        .cookie('access_token',token, {httpOnly:true,})
        .status(200)
        .json(rest);



    }
    catch(error){

    }

}


