$(document).ready(function(){
    console.log("Ready!");

    $("#get-from-api").on("click", async() => {       
        let searchTerm = $("#search-field").val();
        let limitValue = $("#GIF-field").val();
        // console.log($("#search-field").val());
        // console.log($("#GIF-field").val());

        let url = "https://api.giphy.com/v1/gifs/search?api_key=i2WLb8zCXTk3RPER0hdoUV2OFWCzY3nf&q=" + searchTerm + "&limit=" + limitValue;
        
        fetch(url)
        .then((results) => {
            return results.json();
        })
        .then((giphyResponse) => {

            let resultsHTML = "";

            for (let image of giphyResponse.data)
            {
                let imgHTML = `<img class="col-12 col-lg-4" src=${image.images.original.url}/>`;
                resultsHTML = resultsHTML + imgHTML;
                $("#search-results").html(resultsHTML);
            }
        })
    })
});