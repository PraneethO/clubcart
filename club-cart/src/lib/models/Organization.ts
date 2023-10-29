import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  school: { type: String, required: true },
});

export default (mongoose.models.Organization
  ? mongoose.models.Organization
  : mongoose.model("Organization", organizationSchema)) as any;

// module.exports =
//   mongoose.models.Organization ||
//   mongoose.model("Organization", organizationSchema);
