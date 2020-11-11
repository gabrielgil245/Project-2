$(document).ready(function(){
    console.log("Ready!");

    $("#get-from-api").on("click",async() => {
        console.log("Search button was clicked!");
        //"NOTE: keyword = "nintendo" is a placeholder example
        //"NOTE: limit of 10 GIFs is a placeholder example too"
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=i2WLb8zCXTk3RPER0hdoUV2OFWCzY3nf&q=nintendo&limit=10`)
        .then((results) => {
            return results.json();
        })
        .then((giphyResponse) => {
            for (let image of giphyResponse.data)
            {
                let imgHtml = `<img src=${image.images.original.url}/>`
                $("#search-results").append(imgHtml);
            }
        })
    })
});