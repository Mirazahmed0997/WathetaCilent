// import jwt from "jsonwebtoken";
import CONSTANT from "@/configs/constant.config";
import { jwtVerify } from 'jose';

// const verifyToken = (token) => {
//     if (!token) throw new Error("Token is missing");
//     if (!CONSTANT?.JWT?.SECRET_KEY) throw new Error("JWT Secret Key is missing");

//     return jwt.verify(token, CONSTANT.JWT.SECRET_KEY);
// };


const verifyToken = async (token) => {
    if (!token) throw new Error("Token is missing");
    if (!CONSTANT?.JWT?.SECRET_KEY) throw new Error("JWT Secret Key is missing");

    const secret = new TextEncoder().encode(CONSTANT.JWT.SECRET_KEY);
    const { payload } = await jwtVerify(token, secret);    
    return payload;
};

const jwtValidation = { verifyToken };
export default jwtValidation;
