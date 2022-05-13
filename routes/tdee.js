const express = require("express");
const router = express.Router();
const calculate = require("../service/calculation")

router.route('/calculate-tdee')
  .get((req,res) => {
    let bmr = calculate.calculateBMR("female", 110, 5, 2, 45)
    let tdee = calculate.activityLevel(bmr, "Lightly")
  res.send({
    "bmr": bmr,
    "tdee": tdee
  })
})


module.exports = router;