const express = require("express");

const {check: check,validationResult: validationResult,} = require("express-validator");
const Item = require("../models/item");

const recycleRouter = express.Router();

//@route    GET /recycledIntake
//@desc     gets all items
//@access   public
recycleRouter.get("/", async (req, res) => {
  try {
    const{name} = req.query;

    let items = null;  
    //currently name must be exact match to be found...change to a regex at later date
    if(Object.keys(req.query).length === 0){
        //starts with the last item added first
        items = await Item.find().sort({dateAdded: -1}).limit(32);
    }else{
        items = await Item.find({ name: name});
    }

    res.status(200).json({ items });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

//@route    POST /recycleIntake
//@desc     Add new recyle item
//@access   public
recycleRouter.post(
  "/",
  [
    check("name", "name must be a string").isString(),
    check("name", "name is required").not().isEmpty(),
    check("recyclable", "recyclable must be a boolean").isBoolean(),
    check("recyclable", "recyclable must have a boolean").not().isEmpty(),
    check("quantity", "quanity must be a numeric").isNumeric(),
    check("quantity", "quanity must have a number").not().isEmpty(),
    check("price", "price per unit must be a numeric").optional().isNumeric(),
    check("dateAdded", "date cannot be entered").isEmpty(),
    check("dateModified", "date cannot be entered").isEmpty(),
    check("datesModified", "dates cannot be entered").isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, recyclable, quantity, price } = req.body;

    try {
      const newItem = new Item({
        name,
        description,
        recyclable,
        quantity,
        price,
      });

      const item = await newItem.save();

      res.status(201).json(item);
    } catch (err) {
      console.error(err);
      res.status(500).send("server error");
    }
  }
);

//@route    PUT /recycleIntake/:id
//@desc     Update and modify exisiting item
//@access   public
recycleRouter.put(
  "/:id",
  [
    //these checks prevent a 500 error and instead send a 400 error
    check("name", "name must be a string").optional().isString(),
    check("description", "description must be a string").optional().isString(),
    check("recyclable", "recyclable must be a boolean").optional().isBoolean(),
    check("quantity", "quanity must be a numeric").optional().isNumeric(),
    check("price", "price per unit must be a numeric").optional().isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, recyclable, quantity, price } = req.body;
    const { id } = req.params;

    try {
      let item = await Item.findById(id);

      if (!item) return res.status(404).json({ msg: "Contact not found" });

      const itemFields = {dateModified: Date.now()};
      if (name) itemFields.name = name;
      if (description) itemFields.description = description;
      if (recyclable || !recyclable) itemFields.recyclable = recyclable;
      if (quantity) itemFields.quantity = quantity;
      if (price) itemFields.price = price;
    

      item = await Item.findByIdAndUpdate(
        id,
        { $set: itemFields, $push: {datesModified: Date.now()}},
        { new: true }
      );

      res.status(200).json(item);
    } catch (err) {
      console.error(err);
      res.status(500).send("server error");
    }
  }
);

//need to reoptimize possibly? delete probably shouldn't send the items,
//but the front end would call a get anyway so the operations are roughly eq

//@route    DELETE /recycleIntake/:id
//@desc     delete recyle item
//@access   public
recycleRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let item = await Item.findById(id);

    if (!item) return res.status(404).json({ msg: "Contact not found" });

    item = await Item.findByIdAndRemove(id);

    let items = await Item.find().sort({dateAdded: -1}).limit(32);

    res.status(200).json({ msg: `item ${id} deleted`, items:  items});
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

//@route    Get /recycleIntake/:id
//@desc     get ONE recyle item by _id
//@access   public
recycleRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id);

    if (!item) return res.status(404).json({ msg: "Contact not found" });

    res.status(200).json({ item });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = recycleRouter;
