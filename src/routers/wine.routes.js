import express from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});

// GET all wines
router.get("/wines", wineController.getAllWines);

// GET wine by id
router.get("/wines/:id", wineController.getWineById);

router.post("/wines", wineController.createWine);

router.put("/wines/:id", wineController.updateWine);

router.delete("/wines/:id", wineController.deleteWine);

export default router;