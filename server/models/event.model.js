const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: String,
      required: true,
    },
    participant: [String],
    date: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
