const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MasjidSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prayertimes: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Masjid", MasjidSchema);
