/*$.getJSON('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?&number=1&X-Mashape-Key=xMeUE9K1VvmshbUTroj0OCpI5kLup1O0Kv4jsnYkeHi4eYh0oO', function(data) {
    console.log(data);
});
*/

axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?&number=1', {
    headers: {
      "X-Mashape-Key" : "xMeUE9K1VvmshbUTroj0OCpI5kLup1O0Kv4jsnYkeHi4eYh0oO",
      "Accept" : "application/json"
    }
}).then(result => {
    console.log(result);
    let data = result.data.recipes;
    let recipeDiv = document.querySelector('#recipeShowcase');
    let recipeImage = document.querySelector('#recipeImage');
    let linkTag = document.querySelector('#linkTag');
    let ranRecipe = document.createElement('p');
    let image = document.createElement('img');
    let link = document.createElement('a');
    let linkIURL = data.sourceURL;
    //let wrapper = ranRecipe, image, link;

    console.log(data);

    data.forEach(element=>{
        
       
        //link.href = element.sourceURL;
        image.src = element.image;
        image.setAttribute("style", "min-height: 30rem;",
        "background-size: cover");
        link.innerHTML.href=element.sourceURL;
        ranRecipe.innerHTML = element.title;
        link.innerHTML ='<a href="' + element.sourceURL + '">Link</a>';
        image.innerHTML = element.image;
        linkTag.appendChild(link) + 
        recipeDiv.appendChild(ranRecipe) 
        + recipeImage.appendChild(image);
        document.getElementById(link.innerHTML).setAttribute("href", data.sourceURL); 
    })
    
})

axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?&number=1', {
    headers: {
      "X-Mashape-Key" : "xMeUE9K1VvmshbUTroj0OCpI5kLup1O0Kv4jsnYkeHi4eYh0oO",
      "Accept" : "application/json"
    }
}).then(result => {
    console.log(result);
    let data = result.data.recipes;
    let recipeDiv2 = document.querySelector('#recipeName2');
    let recipeImage2 = document.querySelector('#recipeImage2');
    let linkTag2 = document.querySelector('#linkTag2');
    let ranRecipe = document.createElement('p');
    let image = document.createElement('img');
    let link = document.createElement('a');
    let linkIURL = data.sourceURL;
    //let wrapper = ranRecipe, image, link;

    console.log(data);

    data.forEach(element=>{
        
       
        //link.href = element.sourceURL;
        image.src = element.image;
        image.setAttribute("style", "min-height: 30rem;",
        "background-size: cover");
        link.innerHTML.href=element.sourceURL;
        ranRecipe.innerHTML = element.title;
        link.innerHTML ='<a href="' + element.sourceURL + '">Link</a>';
        image.innerHTML = element.image;
        linkTag2.appendChild(link) + 
        recipeDiv2.appendChild(ranRecipe) 
        + recipeImage2.appendChild(image);
        document.getElementById(link.innerHTML).setAttribute("href", data.sourceURL); 
    })
    
})

axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?&number=1', {
    headers: {
      "X-Mashape-Key" : "xMeUE9K1VvmshbUTroj0OCpI5kLup1O0Kv4jsnYkeHi4eYh0oO",
      "Accept" : "application/json"
    }
}).then(result => {
    console.log(result);
    let data = result.data.recipes;
    let recipeDiv3 = document.querySelector('#recipeName3');
    let recipeImage3 = document.querySelector('#recipeImage3');
    let linkTag3 = document.querySelector('#linkTag3');
    let ranRecipe = document.createElement('p');
    let image = document.createElement('img');
    let link = document.createElement('a');
    let linkIURL = data.sourceURL;
    //let wrapper = ranRecipe, image, link;

    console.log(data);

    data.forEach(element=>{
        
       
        //link.href = element.sourceURL;
        image.src = element.image;
        image.setAttribute("style", "min-height: 30rem;",
        "background-size: cover");
        link.innerHTML.href=element.sourceURL;
        ranRecipe.innerHTML = element.title;
        link.innerHTML ='<a href="' + element.sourceURL + '">Link</a>';
        image.innerHTML = element.image;
        linkTag3.appendChild(link) + 
        recipeDiv3.appendChild(ranRecipe) 
        + recipeImage3.appendChild(image);
        document.getElementById(link.innerHTML).setAttribute("href", data.sourceURL); 
    })
    
})


// These code snippets use an open-source library. http://unirest.io/java
/*

axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?&number=3', {
    headers: {
      "X-Mashape-Key" : "xMeUE9K1VvmshbUTroj0OCpI5kLup1O0Kv4jsnYkeHi4eYh0oO",
      "Accept" : "application/json"
    }
}).then(result => {
    console.log(result);
    let data = result.data.recipes;
    let recipeDiv = document.querySelector('#recipeShowcase');
    let recipeImage = document.querySelector('#recipeImage');
    let linkTag = document.querySelector('#linkTag');

    console.log(data);
    data.forEach(element=>{
        let ranRecipe = document.createElement('p');
        let image = document.createElement('img');
        let link = document.createElement('a');
        link.setAttribute("href", element.sourceURL);
        //link.href = element.sourceURL;
        image.src = element.image;
        ranRecipe.innerHTML = element.title;
        link.innerHTML =element.sourceURL;
        image.innerHTML = element.image;
        linkTag.appendChild(link) + 
        recipeDiv.appendChild(ranRecipe) 
        + recipeImage.appendChild(image);
    })
})
*/
