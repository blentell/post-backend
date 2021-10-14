const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
		},
		lastName: {
			type: String,
		},
		username: {
			type: String,
			unique: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
		},
		posts: [{ type: mongoose.Schema.ObjectId, ref: "posts" }],
		comments: [{ type: mongoose.Schema.ObjectId, ref: "comments" }],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("user", userSchema);
