import { model, Schema } from "mongoose";

const interestSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Interest = model("Interest", interestSchema);
export default Interest;
