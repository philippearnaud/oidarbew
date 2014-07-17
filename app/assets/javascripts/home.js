
	$(document).ready(function(){
		$("#jplayer").jPlayer({
			ready: function () {
				$(this).jPlayer("setMedia", {
m4a: "/media/mysound.mp4",
oga: "/media/mysound.ogg"
});
},
swfPath: "/js",
supplied: "m4a, oga"
});
		});
