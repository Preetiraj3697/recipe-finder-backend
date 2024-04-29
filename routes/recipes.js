
import express from "express";
import {Recipe} from "../model/recipeFinder.model.js";

const router = express.Router();

// Route to get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const payload = req.body;
      try{
          const new_recipe = new Recipe(payload);
          await new_recipe.save();
          res.send("Created the new recipe");
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Route to search recipes by name
router.get("/search", async (req, res) => {
  const { name } = req.query;

  try {
    const recipes = await Recipe.find({ name: { $regex: name, $options: "i" } });
    res.json(recipes);
  } catch (error) {
    console.error("Error searching recipes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;
