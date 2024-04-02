import express from "express";
import multer from "multer";
const productImageRouter = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/product");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

productImageRouter.post("/car/image", upload.single("image"), (req, res) => {
  const filename = req.file.filename;
  console.log(req.file);
  // console.log(req.body,"body")
res.json({filename})
});

export default productImageRouter;
