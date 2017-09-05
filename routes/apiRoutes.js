var express = require("express");

var searchController = require("../controller/searchController");

var router = new express.Router();

// Get all quotes (or optionally a specific quote with an id)
// router.get("/search/:id?", quotesController.index);
// // Create a new quote using data passed in req.body
// router.post("/search", quotesController.create);
// // Update an existing quote with a speicified id param, using data in req.body
// router.patch("/quotes/:id", quotesController.update);
// // Delete a specific quote using the id in req.params.id
// router.delete("/quotes/:id", quotesController.destroy);

router.get("/search", searchController.search);
router.post("/saved", searchController.saveArticle);
router.get("/saved", searchController.getArticles);
router.delete("/saved/:id", searchController.deleteArticle);




module.exports = router;
