
/*--get --include 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/videos/search?excludeingredients=mustard&includeingredients=chicken&maxLength=999&minLength=0&number=10&offset=0&query=chicken+soup' \
-H 'X-Mashape-Key: A5GAP2g5p4mshGFhXh7HgC4ac5vfp1wycEBjsnT3NXTsXtsxpZ' \
-H 'Accept: application/json'
*/
let videoList = document.querySelector('#videoList');
let videoItem = document.createElement("li");
videoItem.id = 'videoURL';


axios.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/videos/search?cuisine=asian&minLength=0&number=3&offset=0', {
    headers: {
      "X-Mashape-Key" : "A5GAP2g5p4mshGFhXh7HgC4ac5vfp1wycEBjsnT3NXTsXtsxpZ",
      "Accept" : "application/json"
    }
        }).then(result => {
        console.log(result);
        let data = result.data.videos;
        console.log(data);
        //data.forEach(element=>{
            data.forEach(element => {
                videoItem.innerHTML = element.thumbnail;
                videoList.appendChild(videoItem);
            });
     
    })
    

