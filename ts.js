"use strict";
window.addEventListener("DOMContentLoaded", function () {
    var reg = /\bq=wordkey\b/gi;
    var input = document.querySelector("input");
    var out = document.querySelector(".out");
    input.addEventListener("keyup", function (e) {
        //console.log(e.key.charCodeAt());
        //console.log(e);
        var inputvalue = this.value;
        search(inputvalue);
    });
    function search(key) 
    {
        var xmlhttp;
        var url = "http://api.giphy.com/v1/gifs/search?q=wordkey&api_key=d783ux5ieyICdf68vflUMSHYv7B0Bqkj";
        var key = key;
        url = url.replace(reg,"q="+key);
        if (window.XMLHttpRequest)
        {
            xmlhttp = new XMLHttpRequest();
        } else
        {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        console.log(url);
        xmlhttp.abort();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200)
            {
                out.innerHTML = "";
                var data = JSON.parse(this.responseText);
                for (var i = 0; i < data.data.length; i++) {
                    var preview= data.data[i].images.preview_gif.url;
                    var img = '<img src="'+preview+'" title="git" alt="gif" style="width:200px;height:200px;"/>';
                    var linkdown = '<a href="'+preview+ '" download>download</a>';
                    img = '<div>'+img+linkdown+'</div>'; 
                    out.innerHTML += img;
                    }
               
            } else 
            {
                 out.innerHTML = "loding...";
            }
        };
    }
});