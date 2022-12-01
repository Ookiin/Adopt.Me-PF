function iniciarMap() {
  var coord = { lat: -34.57105858739396, lng: -58.4088607655246 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}
