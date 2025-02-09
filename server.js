const express = require("express");
const request = require("request");
const app = express();

const PORT = process.env.PORT || 3000;

// Proxy function
app.get("/proxy", (req, res) => {
    const hlsUrl = "https://bldcmprod-cdn.toffeelive.com/cdn/live/sonyyay/playlist.m3u8";

    const options = {
        url: hlsUrl,
        headers: {
            "Origin": "https://bldcmprod-cdn.toffeelive.com",
            "User-Agent": "Toffee (Linux;Android 14) AndroidXMedia3/1.1.1/64103898/4d2ec9b8c7534adc",
            "Cookie": "Edge-Cache-Cookie=URLPrefix=aHR0cHM6Ly9ibGRjbXByb2QtY2RuLnRvZmZlZWxpdmUuY29tLw:Expires=1739304824:KeyName=prod_linear:Signature=5U6RvWNRCoA58O1_ZVpIo3DtIln7AldgqMiP40TSpT5d_n66PQq1YeCf8jy7QhG5xFkdi23tL8nVD23he4stBA"
        }
    };

    request(options).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
