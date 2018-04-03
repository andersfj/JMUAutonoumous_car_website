//var data = XMLHttpRequest('http://134.126.153.21:5000/cardata');
function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("battery").innerHTML = this.responseText;
        }
    }
    xmlHttp.open("GET", 'http://172.28.71.87:8080/cardata', true); // false for synchronous request
    xmlHttp.setRequestHeader('Accept', 'appliction/json');
    xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.send();
}