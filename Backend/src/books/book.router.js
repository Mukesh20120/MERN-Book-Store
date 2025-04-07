const router = require("express").Router();
const { verifyAdminToken } = require("../middleware/verifyAdminToken");
const {
  getAllBooks,
  getSingleBook,
  postABook,
  UpdateBook,
  deleteABook,
} = require("./book.controller");

router.route("/").post(verifyAdminToken, postABook).get(getAllBooks);
router
  .route("/:id")
  .put(verifyAdminToken, UpdateBook)
  .get(getSingleBook)
  .delete(verifyAdminToken, deleteABook);

module.exports = router;
