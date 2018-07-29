let x = document.getElementById("result");

function showPosition(position) {
  console.log(position);
  x.innerHTML = x.innerHTML +  '<hr> 浏览器 Geo API <hr>' + "纬度：" + position.coords.latitude + 
    "<br><br>经度：" + position.coords.longitude + 
    "<br><br>精度：" + position.coords.accuracy + "米";
}

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else  {
    x.innerHTML = "此浏览器不支持获取位置信息"
  }

  let geo =  new qq.maps.Geolocation('FKLBZ-OH66W-N2ER5-RMVPT-4HINT-VWBDV', 'getLatLng');
  
  console.log(geo);

  geo.getLocation(
    showTecentPosition
  );
}

function showTecentPosition(position) {
  console.log(position);
  x.innerHTML = x.innerHTML + '<hr> 腾讯地图 API <hr>' + "纬度：" + position.lat + 
    "<br><br>经度：" + position.lng + 
    "<br><br>精度：" + position.accuracy + "米";
}