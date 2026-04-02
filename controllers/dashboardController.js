const Record = require("../models/Record");

// Get summary
exports.getSummary = async (req, res) => {
  try {
    const records = await Record.find();

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach(r => {
      if (r.type === "income") totalIncome += r.amount;
      else totalExpense += r.amount;
    });

    const netBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      netBalance
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategorySummary = async (req, res) => {
  try {
    const records = await Record.find();

    const categoryTotals = {};

    records.forEach(r => {
      if (!categoryTotals[r.category]) {
        categoryTotals[r.category] = 0;
      }
      categoryTotals[r.category] += r.amount;
    });

    res.json(categoryTotals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};