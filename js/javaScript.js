//It allows to get a random word by the API of herokuapp (github = https://github.com/mcnaveen/Random-Words-API)
async function fetchText() {
    try{
        let response = await fetch('https://random-word-api.herokuapp.com/word?lang=es');   //Get the response. 
        return response.json().then(v => v[0]);     //Return the word that the API provide.
    }catch(e){
        alert("Something went wrong.\n"+ e);    //In case of error, we alert the user about it.
        return "API ERROR";
    }
}

//It allow to show the random word to the user by changing the inner text of the HTML.
document.querySelector('#main_btn').onclick = async function(){
    document.querySelector('#random_word').innerText = await fetchText(); //Change the text of the element of id = "random_word". 
}