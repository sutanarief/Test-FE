const Event = require("../models/event.model");

class EventController {
  static showEvent(req, res) {
    console.log();
    Event.find()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(400).json("Error: " + err));
  }

  static addAplikasi(req, res) {
    const { title, location, participant, date, note, imageUrl } = req.body;
    const newData = new Event({
      title,
      location,
      participant,
      date,
      note,
      imageUrl,
    });

    newData
      .save()
      .then(() => res.status(201).json(`Data Added! ${newData.pendiri}`))
      .catch(err => res.status(400).json("Error: " + err));
  }
}

module.exports = EventController;
