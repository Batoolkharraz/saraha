import { verifyToken } from "../../../Services/generateAndVerify.js";

export const profile=async (req,res)=>{

    try{
    return res.json("profile");
    }
    catch(error){
        return res.json({message:"catch error",error:error.stack});
    }

}