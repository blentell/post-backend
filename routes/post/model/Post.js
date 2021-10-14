const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            String,
        },
		post: {
			type: String,
		},
		comments: {
			type: String,
		},
		postOwner: { type: mongoose.Schema.ObjectId, ref: "user" },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("post", postSchema);
