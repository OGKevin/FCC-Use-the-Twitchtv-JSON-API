$(function() {
    // call get info from here need to install jquery tho

    getInfo("ESL_SC2");
    getInfo("freecodecamp");
    getInfo("ESL_LOL");
    getInfo("ESL_CSGO");
    $("#button").click(function(event) {
      getInfo(prompt("Add a channel"));
    });
})



function getInfo(channelName) {

    var settings = {
        "async": true,
        "url": "https://cors-anywhere.herokuapp.com/wind-bow.gomix.me/twitch-api/streams/" + channelName,
        "method": "GET",
        "headers" : {origin : "*"}
    };

    $.ajax(settings).done(function(response) {
        if (response.stream === null /* ofline */ ) {
            //just say offline and href no need to call apply
            $("#offline").css('visibility', 'visible');
            $("#offline").append('<a href="https://twitch.tv/'+channelName+'" target="_blank"> <li>'+channelName+'</li></a>');
        } else {
            applyInfo(response.stream.game, response.stream.channel.status, response.stream.viewers, response.stream.preview.medium, response.stream.channel.profile_banner,response.stream.channel.url,response.stream.channel.name);
        }

    });

}

function applyInfo(game, status, viewers, prev, banner,url,name) {
  if (banner === null) {
    alert( name+" has no profile banner");
  }
    $("#wholeThing").append("	<a href="+url+" target='_blank'<div id='banner'><img  src=" + banner + " class='img-responsive' /></div><div class='text-center' id='status'>" + game + " -- " + status + " -- " + viewers + "</div></a>")
}
