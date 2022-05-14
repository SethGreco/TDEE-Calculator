import express, {Router, Request, Response} from 'express';
import {activityLevel, calculateBMR} from '../service/calculation'

export const router: Router = express.Router();

router.route('/calculate-tdee')
  .post((req: Request ,res: Response) => {
    let bmr: number = calculateBMR(
      req.body.gender,
      req.body.weight, 
      req.body.heightFeet, 
      req.body.heightInches, 
      req.body.age,
      req.body.activeLevel)

    let tdee: number = activityLevel(bmr, req.body.activeLevel)
  res.send({
    "bmr": bmr,
    "tdee": tdee
  })
})