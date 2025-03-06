'use strict';

const REURL_API_KEY = "4070ff49d794e736185e3b663c974755ecd6be31959f04df8a38b58d65165567c4f5d6";
const REURL_ENDPOINT = "https://api.reurl.cc";

function reurl_shorten_url(input_url) {
	fetch(REURL_ENDPOINT, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "reurl-api-key": REURL_API_KEY
    },
    body: JSON.stringify({ url: input_url })
	})
	.then(response => response.json())
	.then(data => return data.short_url)
	.catch(error => console.error("錯誤:", error));
}  
