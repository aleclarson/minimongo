
module.exports = {
  Error: function (message) {
    var e = new Error(message);
    e.name = "MinimongoError";
    return e;
  }
};
