//var data = XMLHttpRequest('http://134.126.153.21:5000/cardata');


setInterval(httpGet(),10000);
//httpGet(0);
function httpGet() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            sensor = this.responseText.split(",");
            document.getElementById("battery").innerHTML = "Battery Status: " + sensor[0].split("\"")[4];
            document.getElementById("camera").innerHTML = "Camer Status: " + sensor[1].split("\"")[3];
            //document.getElementById("GPS1").innerHTML = "Elevation: " + sensor[2].split("\"")[2];
            //current_location = {
            //      lat: parseFloat(sensor[3].split("\"")[2]),
            //      lng: parseFloat(sensor[5].split("\"")[2])
            //}; // will be subscribed to the cars location 
            myLat =  parseLat(sensor[3].split("\"")[2]);
            myLong = parseDouble(sensor[5].split("\"")[2]);
            document.getElementById("GPS2").innerHTML = "Lat: " + sensor[3].split("\"")[2];
            document.getElementById("GPS3").innerHTML = "Long: "+ sensor[5].split("\"")[2];
            document.getElementById("lightware").innerHTML = "Lightare Status: " + sensor[4].split("\"")[3];
            document.getElementById("rplidar").innerHTML = "Rplidar Status:" + sensor[6].split("\"")[3];
            document.getElementById("timestamp").innerHTML = "Timestamp: " + sensor[7].split("\"")[3];
            document.getElementById("velocity").innerHTML = "Velocity: " + sensor[8].split(":")[1];
            document.getElementById("velodyne").innerHTML = "Velodyne Status: " + sensor[9].split("\"")[3];
         
        
        }
    }
    //http://172.28.71.87:8080/cardata
    xmlHttp.open("GET", 'http://134.126.153.21:5000/cardata', true); // false for synchronous request
    //xmlHttp.setRequestHeader('Accept', 'appliction/json');
    //xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    //xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '134.126.248.66');
    xmlHttp.send();
}
