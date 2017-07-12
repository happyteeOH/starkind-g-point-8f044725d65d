const data = require('data');

var events = {
  getAllEvents: () => {
    return data
  },

  getEventById: (id) => {
    for (let i in data) {
      if (data[i].id === id) return data[i]
    }
  }

}

module.exports = events

