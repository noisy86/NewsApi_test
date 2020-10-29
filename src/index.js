import {generateNewsBox} from "./components";

const axios = require('axios');

window.onload = function() {
    axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-29&sortBy=publishedAt&apiKey=0311e370074f40a2856c972ac19696d5')
        .then((res) => {
            const data = res.data;
            for(let value of data.articles) {
              generateNewsBox(value.title, value.author, value.description);
            }
        });
}
