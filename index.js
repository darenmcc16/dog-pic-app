function getDogImage(query, display){
  fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
  .then(response => response.json())
  .then(responseJson => {
    console.log(responseJson);
    return responseJson;
  })
  .then(responseJson => display(responseJson))
  .catch(error => alert('Something went wrong, try again later.'))
}

function displayResults(responseJson){
  return`
  <div>
    <br>
    <img src="${responseJson}" class="results-img">
  </div>
  `
}

function dogSearchData(data){
  let results = data.message.map((item, index)=>displayResults(item));
  $('.js-results').html(results);

  $('.results').removeClass('hidden');
}

function listenToInput(){
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('.js-query');
    let query = queryTarget.val();
    queryTarget.val('3');
    getDogImage(query, dogSearchData);
  });
}

$(function(){
  console.log('App Loaded and Ready');
  listenToInput();
});