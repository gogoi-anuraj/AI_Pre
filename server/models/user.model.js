const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    notes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Notes",
      default: [],
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
