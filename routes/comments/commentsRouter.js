const jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
const {
	createComments,
	updateComments,
	deleteComments,
	// getPostInfo,
} = require("./controller/commentsController");

const {
	checkIsEmpty,
	checkIsUndefined,
	jwtMiddleware,
	validateUpdateData,
} = require("../users/lib/authMiddleware");

// router.get("/", jwtMiddleware, getPostInfo);

router.post("/create-comment", jwtMiddleware, createComments);

// router.post("/login", checkIsEmpty, checkIsUndefined, validateLoginData, login);

router.put(
	"/update-comment",
	jwtMiddleware,
	checkIsUndefined,
	checkIsEmpty,
	validateUpdateData,
	updateComments
);

router.delete("/delete-comment-by-id/:id", deleteComments);

module.exports = router;
