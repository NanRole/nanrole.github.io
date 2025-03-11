'use strict';

function reurl_shorten_url(input_url) {
	let result = "";
	fetch("https://jinyao-43650eb2e718.herokuapp.com/reurl-shorten-url", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: input_url })
	})
	.then(response => response.json())
	.then(data => result = data.short_url)
	.catch(error => console.error("錯誤:", error));
	return result;
}
