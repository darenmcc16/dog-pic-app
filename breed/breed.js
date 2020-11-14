function getDogImage(query, display){
  let url = `https://dog.ceo/api/breed/${query}/images/random/`
  console.log(url)
  fetch(url)

  //Step 2c - success scenario (call the function to display the results)
  .then(response => {
          if (response.ok) {
              return response.json();
          }
          // DISPLAY ERRORS if the server connection works but the json data is broken
          throw new Error(response.statusText);
      })
      .then(responseJson => dogSearchData(responseJson))

  // Step 2d - failure scenario  (DISPLAY ERRORS if the server connection fails)
  .catch(err => {
      console.log(err);
  });
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
    console.log(data);
    let results = data.message.map((item, index)=>displayResults(item));
    $('.js-results').html(results);
    console.log('results pin');
  
    $('.results').removeClass('hidden');
  }
  
  function listenToInput(){
    $('.js-search-form').submit(event => {
      event.preventDefault();
      let queryTarget = $(event.currentTarget).find('.js-query');
      let query = queryTarget.val();
      console.log(query);
      getDogImage(query, dogSearchData);
    });
  }
  
  $(function(){
    console.log('App Loaded and Ready');
    listenToInput();
  });


// let feedback = ['We found that breed!', "Sorry we don't know that breed."]

//   function givePositiveFeedback (){
//       $('.results').text(feedback[0]);
//   }

//   function giveNegativeFeedback (){
//       $('.results').text(feedback[1]);
//   }