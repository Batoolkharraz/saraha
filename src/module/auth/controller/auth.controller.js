import userModel from "../../../../DB/model/user.model.js"
import { generateToken } from "../../../Services/generateAndVerify.js";
import { compare, hash } from "../../../Services/hashAndCompare.js";

export const signup =async (req,res)=>{
    const {userName,email,password}=req.body;
    const user = await userModel.findOne({email});
    if(user){
        return res.status(409).json({message:"email already exists"});
    }

    const hashPassword =hash(password);
    const createUser = await userModel.create({userName,email,password:hashPassword});
    return res.status(201).json({meessage:"done",user:createUser._id});
    return res.json({meessage:"done",user:createUser._id});
}

export const signin = async(req,res)=>{
    const {email,password}=req.body;
    //email ="dddd@gmail.com";
    const user = await userModel.findOne({email});
    if(!user){
        return res.status(404).json({message:"email ont exists"});
    }
    else{
        const match = compare(password,user.password);
        if(!match){
            return res.json({message:"invalid password"});
        }else{
            const token = generateToken({id:user._id});
            return res.status(200).json({message:"done",token});
        }
    }
}