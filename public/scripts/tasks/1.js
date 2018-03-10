// Model
function PersonsModel() {
  this.allPersons = new Array();
  this.changeListeners = new Array();

  this.addNewPerson = function(addable) {
    this.allPersons.push(addable);
    this.notifyChange();
  }

  this.notifyChange = function() {
    this.changeListeners.forEach(function(changeListener){
      changeListener();
    });
  }

  this.addNewListener = function(newListener) {
    this.changeListeners.push(newListener);
  }
}

// View
function requestAddPerson() {
  var name = document.getElementById("nameInput").value;
  if (name.length != 0) {
    controllerAddPerson(name);
  }
}

function renderList(personList) {
  var listTags = "";
  for (var i=0; i<=personList.length-1; i++) {
    listTags += "<li>" + personList[i] + "</li>";
  }
  document.getElementById("personList").innerHTML = listTags;
}

// Controller
var personsModel = new PersonsModel();
registerListeners();

function controllerAddPerson(newName) {
  personsModel.addNewPerson(newName);
}

function registerListeners() {
  personsModel.addNewListener(updatePersonsList);
}

function updatePersonsList() {
  var personList = [];
  personsModel.allPersons.forEach(function(element) {
    personList.push(element);
  });
  renderList(personList);
}
