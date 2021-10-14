const User = require("../../users/model/User");
const Post = require("../model/Comments");
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

async function createComments(req, res) {
	try {
		const { comments } = req.body;
		const decodedData = res.locals.decodedData;
		console.log(decodedData);

		let foundUser = await User.findOne({ email: decodedData.email });
		console.log(foundUser);
		const createdComments = new Comments({
			commentOwner: foundUser._id,
			parentPost,
			comments,
		});

		let savedComments = await createdComments.save();
		foundUser.comments.push(savedComments._id);
		await foundUser.save();
		res.json({ message: "success", payload: createdComments });
	} catch (error) {
		res.status(500).json({ message: "error", error: errorHandler(error) });
	}
}

async function updateComments(req, res) {
	try {
		const { comments } = req.body;
		let foundUser = await User.findOne({ email: decodedData.email });
		const decodedData = res.locals.decodedData;
		let updatedComments = await Comments.findOneAndUpdate(comments, {
			new: true,
		});
		res.json({
			message: "success",
			payload: updatedComments,
		});
	} catch (e) {
		res.status(500).json({ message: "error", error: e.message });
	}
}

async function deleteComments(req, res) {
	const { post, comments } = req.body;
	try {
		let deletedComments = await Comments.findByIdAndDelete(
			req.params.id,
			req.body
		);
		res.json({ message: "success", payload: deletedComments });
	} catch (error) {
		res.status(500).json({ message: "failure", error: error.message });
	}
}

module.exports = {
	createComments,
	updateComments,
	deleteComments,
};
