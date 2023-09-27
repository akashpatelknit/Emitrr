exports.createQuestions = async (req, res) => {
	try {
		const questions = await Question.insertMany(data);
		res.status(201).json({ questions });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
