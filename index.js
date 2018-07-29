let x = document.getElementById("result");

function showPosition(position) {
  console.log(position);
  x.innerHTML = "纬度：" + position.coords.latitude + 
    "<br><br>经度：" + position.coords.longitude + 
    "<br><br>精度：" + position.coords.accuracy + "米";
}

function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else  {
    x.innerHTML = "此浏览器不支持获取位置信息"
  }
}