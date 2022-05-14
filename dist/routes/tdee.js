"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const calculation_1 = require("../service/calculation");
exports.router = express_1.default.Router();
exports.router.route('/calculate-tdee')
    .post((req, res) => {
    let bmr = (0, calculation_1.calculateBMR)(req.body.gender, req.body.weight, req.body.heightFeet, req.body.heightInches, req.body.age, req.body.activeLevel);
    let tdee = (0, calculation_1.activityLevel)(bmr, req.body.activeLevel);
    res.send({
        "bmr": bmr,
        "tdee": tdee
    });
});
