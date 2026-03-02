const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Имя обязательно"],
      minlength: [2, "Имя должно быть не менее 2 символов"],
      maxlength: [20, "Имя должно быть не более 20 символов"],
    },
    surname: {
      type: String,
      required: [true, "Фамилия обязательна"],
      minlength: [2, "Фамилия должна быть не менее 2 символов"],
      maxlength: [20, "Фамилия должна быть не более 20 символов"],
    },
    username: {
      type: String,
      required: [true, "Username обязателен"],
      minlength: [5, "Username должен быть не менее 5 символов"],
      maxlength: [5, "Username должен быть не более 5 символов"],
      unique: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
