function getAllLabels() {
  var labels = document.getElementsByTagName("label");
  return labels;
}

window.onload = function () {
  // query for all html label tags
  var labels = getAllLabels();
};
