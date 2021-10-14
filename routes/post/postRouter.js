const jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
const {
	createPost,
	updatePost,
	deletePost,
	// getPostInfo,
} = require("./controller/postController");

const {
	checkIsEmpty,
	checkIsUndefined,
	validateCreateData,
	validateLoginData,
	jwtMiddleware,
	validateUpdateData,
} = require("../users/lib/authMiddleware");

// router.get("/", jwtMiddleware, getPostInfo);

router.post(
    "/create-post",
    jwtMiddleware,
	createPost
);

// router.post("/login", checkIsEmpty, checkIsUndefined, validateLoginData, login);

router.put(
	"/update-post",
	jwtMiddleware,
	checkIsUndefined,
	checkIsEmpty,
	validateUpdateData,
	updatePost,
);

router.delete("/delete-post-by-id/:id", deletePost);

module.exports = router;
