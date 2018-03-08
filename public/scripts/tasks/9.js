$('#searchButton').on('click', function() {
  $('.grid').empty();
  searchTerm = $('#searchBox').val();
  console.log(searchTerm);
  var options = {
      method: 'flickr.photos.search',
      api_key: 'aa7ace0ae45c0eba50047748215df4c5',
      sort: 'relevance',
      text: searchTerm,
      extras: 'url_m',
      per_page: 50,
      format: 'json',
      nojsoncallback: 1
  };
  $.get('https://api.flickr.com/services/rest/', options, function(res){
      var images;
      if (res.stat === "ok") {
          $.each(res.photos.photo, function(index, value){
            console.log(value);
            $('.grid').append($('<img>',{
              src: value.url_m,
            }));
          });
      }
      else {
          console.log('Error', res);
      }
  });
});
