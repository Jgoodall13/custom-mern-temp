import mongoose, { Schema, Document } from "mongoose";

export interface ICount extends Document {
  value: number;
}

const TodoSchema: Schema = new Schema({
  value: { type: Number, required: true },
});

// Export the model and return your ITodo interface
export default mongoose.model<ICount>("Count", TodoSchema);
