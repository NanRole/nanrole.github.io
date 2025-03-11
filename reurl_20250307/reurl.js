'use strict';

async function reurl_shorten_url(input_url) {
    try {
        const response = await fetch("https://jinyao-43650eb2e718.herokuapp.com/reurl-shorten-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url: input_url })
        });

        if (!response.ok) {
            throw new Error(`HTTP 錯誤！狀態碼: ${response.status}`);
        }

        const data = await response.json();
        return data.short_url; // 這裡正確回傳縮短後的網址
    } catch (error) {
        console.error("錯誤:", error);
        return ""; // 發生錯誤時回傳 null
    }
}

