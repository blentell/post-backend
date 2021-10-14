const User = require("../../users/model/User");
const Post = require("../model/Post");
const errorHandler = require("../../utils/errorHandler/errorHandler");

// async function getPostInfo(req, res, next) {
// 	try {
// 		const decodedData = res.locals.decodedData;
// 		const foundPost = await Post.findOne({ email: decodedData.email }).populate(
// 			"orderHistory",
// 			"-orderOwner -_v"
// 		);
// 		res.json({ message: "success", payload: foundPost });
// 	} catch (e) {
// 		res.status(500).json({ message: "error", error: errorHandler(e) });
// 	}
// }

async function createPost(req, res) {
	try {
		const { post, comments, title } = req.body;
		const decodedData = res.locals.decodedData;
		console.log(decodedData);

		let foundUser = await User.findOne({ email: decodedData.email });
		console.log(foundUser);
		const createdPost = new Post({
			postOwner: foundUser._id,
			post,
            comments,
            title,
		});

		let savedPost = await createdPost.save();
		foundUser.posts.push(savedPost._id);
		await foundUser.save();
		res.json({ message: "success", payload: createdPost });
	} catch (error) {
		res.status(500).json({ message: "error", error: errorHandler(error) });
	}
}

async function updatePost(req, res) {
    try {
        const { post, title } = req.body;
        let foundUser = await User.findOne({ email: decodedData.email });
        const decodedData = res.locals.decodedData;
        let updatedPost = await Post.findOneAndUpdate(post, { new: true });
        res.json({
			message: "success",
			payload: updatedPost,
		});
	} catch (e) {
		res.status(500).json({ message: "error", error: e.message });
	}
}

async function deletePost(req, res) {
	const { post, comments } = req.body;
	try {
		let deletedPost = await Post.findByIdAndDelete(req.params.id, req.body);
		res.json({ message: "success", payload: deletedPost });
	} catch (error) {
		res.status(500).json({ message: "failure", error: error.message });
	}
}

module.exports = {
	createPost,
	updatePost,
	deletePost,	
};
