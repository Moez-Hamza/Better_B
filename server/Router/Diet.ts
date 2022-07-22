import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { DietModel } from "../database/diets";
const router = express.Router();
router.get("/api/diets", async (req: Request, res: Response) => {
  const diet = await DietModel.find({});
  return res.status(200).send(diet);
});
// router.post("/api/diets", async (req:Request,res:Response)=>{
//     const name=req.body.name
//     const imgurl=req.body.imgurl
//     const desc=req.body.desc
//     const newDiet= new DietModel({
//         _id: new mongoose.Types.ObjectId(),
//         name: name,
//         img: imgurl,
//         description: desc
//     })
//     newDiet
// .save().then(results=>{return res.json(`${results.name} was added`)}).catch(error=>console.log(error))
// })

// getting recipes by type
router.get(`/api/diets/:type`, async (req: Request, res: Response) => {
  const recipe = await DietModel.find({ category: req.params.type });
  return res.send(recipe);
});
router.get(`/api/search/:term`, async (req: Request, res: Response) => {
  const recipe = await DietModel.find({
    nameReceipe: { $regex: req.params.term, $options: "i" },
  }).exec();
  return res.send(recipe);
});

router.get(`/api/oneDiet/:id`,async (req:Request, res:Response)=>{
  console.log(req.params.id)
   const recipe = await DietModel.findById(req.params.id).exec();
    res.send(recipe)
})

export { router as Dietrouter };
