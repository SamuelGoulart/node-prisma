import { FindCategoryController } from './controllers/FindCategoryController';
import { Router } from "express";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductWithExistCategory } from "./controllers/CreateProductWithExistCategory";
import { FindProductController } from "./controllers/FindProductController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWithExistCategory = new CreateProductWithExistCategory();
const findProduct = new FindProductController();
const findCategory = new FindCategoryController();


router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", createProductCategory.handle);
router.post("/productWithCategory", createProductWithExistCategory.handle);
router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);


export { router };