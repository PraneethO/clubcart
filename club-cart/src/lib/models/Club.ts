import mongoose from "mongoose";

const clubSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  school: { type: String, required: true },
  list: [{ type: String, required: true }],
  fees: [{ type: String, required: true }],
});

export default (mongoose.models.Club
  ? mongoose.models.Club
  : mongoose.model("Club", clubSchema)) as any;

// module.exports = mongoose.models.Club || mongoose.model("Club", clubSchema);
