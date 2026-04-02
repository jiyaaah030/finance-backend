const Record = require("../models/Record");

// Create record
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category } = req.body;

    // Validation
    if (!amount || !type || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!["income", "expense"].includes(type)) {
      return res.status(400).json({ message: "Invalid type" });
    }

    const record = await Record.create(req.body);

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all records
exports.getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

// Update record
exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(record);
};

// Delete record
exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Record deleted" });
};