const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
	{
		Parentpost: { type: mongoose.Schema.ObjectId, ref: "post" },
		comments: {
			type: String,
		},
		commentOwner: { type: mongoose.Schema.ObjectId, ref: "user" },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("comments", commentsSchema);
