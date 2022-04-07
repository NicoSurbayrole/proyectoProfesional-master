const db = require("./db");

const Categories = require("../models/categories");
const categoriesList = require("./lists/categoriList");

const Users = require("../models/User");
const usersList = require("./lists/userList");
const Products = require("../models/products")
const productsList = require("./lists/productsList")

const setupSeed = async () => {
  console.log("SEED STARTING");

  const categories = await Categories.bulkCreate(categoriesList);
  const products = await Products.bulkCreate(productsList);

  const users = await Promise.all(
    usersList.map(async (user) => {
      return await Users.create(user);
    })
  );

  console.log("Products Seed...");

  return Promise.all([categories,users,products]);
};

db.sync({ force: true })
  .then(setupSeed)
  .then(() => {
    console.log("Seed succesfully");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
