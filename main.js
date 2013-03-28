var link;
chrome.tabs.getSelected(null,function(tab) {
    var link = tab.url;
	$('.qrme').qrcode( {
			text: link,
			width: 118,
			height:118
		});
		$('#link').html(link);
});
		