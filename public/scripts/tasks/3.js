var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com');
var chatbox = document.getElementById('chatbox');
var connectionStatus = document.getElementById('connectionStatus');
var getConnectionStatus = connection.readyState;

connection.onmessage = function (message) {
  chatbox.innerHTML += message.data + '<br/>';
};

function sendText() {
  var text = document.getElementById('textInput').value;
  connection.send(text);
}

connection.addEventListener('open', function (event) {
  connectionStatus.textContent = "Connected";
});

connection.addEventListener('close', function (event) {
  connectionStatus.textContent = "Disconnected";
});
