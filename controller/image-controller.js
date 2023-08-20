import { request, response } from "express";
import File from "../model/file.js";


export const uploadImage=async(request,response)=>{
    const fileOBJ={
        path:request.file.path,
        name:request.file.originalname
    }
try {
    const file=await File.create(fileOBJ);
    response.status(200).json({path: `http://localhost:8000/file/${file._id}`})
} catch (error) {
    console.log(error.message);
    response.status(500).json({error:error.message})
}
}

export const downloadImage=async (request,response)=>{
    try {
       const file=await File.findById(request.params.fileId);
       file.downloadContent++;
       await  file.save();

       response.download(file.path,file.name)
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({error:error.message})
    }
}