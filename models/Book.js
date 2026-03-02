const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Название книги обязательно"],
      minlength: [2, "Название должно быть не менее 2 символов"],
      maxlength: [20, "Название должно быть не более 20 символов"],
    },
    author: {
      type: String,
      required: [true, "Автор обязателен"],
      minlength: [2, "Имя автора должно быть не менее 2 символов"],
      maxlength: [20, "Имя автора должно быть не более 20 символов"],
    },
    year: {
      type: Number,
      required: [true, "Год выпуска обязателен"],
      min: [1900, "Год должен быть не меньше 1900"],
      max: [2024, "Год должен быть не больше 2024"],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Book", bookSchema);
