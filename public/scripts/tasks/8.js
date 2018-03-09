$( document ).ready(function() {

  var updatePage = function( resp ) {
    $.each(resp, function(index, value) {

      var a = $('<a />', {
        "target" : "_blank",
        "href" : 'mailto:'+value.email,
        "text" : value.email
      });

      var p = $('<p />').append(value.name + ', Email: ').append(a);
      $("#target").append(p)
    });

  };

  var printError = function( req, status, err ) {
    console.log( 'something went wrong', status, err );
  };

  var ajaxOptions = {
    url: 'http://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp',
    dataType: 'jsonp',
    jsonpCallback: 'jsonCallback',
    success: updatePage,
    error: printError
  };

  $('#loadPerson').on('click', function() {
    $.ajax(ajaxOptions);
  });

});
