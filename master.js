$(function() {
    // call get info from here need to install jquery tho

    getInfo("ESL_SC2");
    getInfo("freecodecamp");
    $("#button").click(function(event) {
      getInfo(prompt("Add a channel"));
    });
})



function getInfo(channelName) {

    var settings = {
        "async": true,
        "url": "https://wind-bow.gomix.me/twitch-api/streams/" + channelName,
        "method": "GET",
    };

    $.ajax(settings).done(function(response) {
        console.log("called");
        if (response.stream === null /* ofline */ ) {
            console.log("ofline");
            //just say offline and href no need to call apply
            $("#offline").css('visibility', 'visible');
            $("#offline").append('<li>'+channelName+'</li>');
        } else {
            console.log("online");
            applyInfo(response.stream.game, response.stream.channel.status, response.stream.viewers, response.stream.preview.medium, response.stream.channel.profile_banner,response.stream.channel.url);
        }

    });

}

function applyInfo(game, status, viewers, prev, banner,url) {
  if (banner === null) {
    alert("user has no profile banner");
  }
    $("#wholeThing").append("	<a href="+url+" target='_blank'<div id='banner'><img  src=" + banner + " class='img-responsive' /></div><div class='text-center' id='status'>" + game + " -- " + status + " -- " + viewers + "</div></a>")

    /*
        // jquery and add info
        // $("#title").html(game);
    		$("#status").html(status)
    		// $("#preview").html("<img  class='img-responsive' src='"+prev+"'>")
    		$("#viewers").html(viewers)
    		// $("#bannerIMG").attr('src',banner);
    		$("#banner").html("<img id='bannerIMG' class='img-responsive' src='"+banner+"'>")
    		console.log(banner);
    		// $("#").html()*/
}
