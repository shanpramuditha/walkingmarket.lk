// check
//
function initMap(){
  var info = '<div class="an-map-marker">' +
    '<div class="image"> <img src="./assets/img/marker-image.jpg" alt=""/></div>'+
                '<div class="info">'+
                  '<h2>Traffold hotel</h2>'+
                  '<p class="price">$180/day</p>'+
                  '<div class="listing-meta"><span><i class="typcn typcn-location"></i>115 The Vale, London</span><span><i class="ion-android-time"></i>16.1.17</span></div>'+
                '<div>'+
              '</div>';

    var locations = [
      [info, 39.008781, -77.220671, 4],
      [info, 39.001868, -77.159948, 5],
      [info, 38.990528, -77.199430, 3],
      [info, 39.008672, -77.119607, 2],
      [info, 38.975717, -77.197027, 1],
      [info, 38.986392, -77.094030, 6],
      [info, 38.986659, -77.118921, 7],
      [info, 38.970912, -77.143983, 8],
      [info, 39.008005, -77.179346, 9],
      [info, 39.004403, -77.071027, 10],
      [info, 38.961035, -77.095575, 11],
      [info, 38.989194, -77.137289, 12],
      [info, 38.982923, -77.224836, 13],
      [info, 38.967976, -77.210588, 14],
      [info, 38.969177, -77.120809, 15],
      [info, 38.977318, -77.160978, 16],
      [info, 38.956764, -77.152738, 17],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(38.9681887, -77.1455752),
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({
    });



    var marker, i;
    for (i = 0; i < locations.length; i++) {
      var image = {
        url: './assets/img/map-icon/icon-'+(i%8)+'.png',
        scaledSize: new google.maps.Size(40, 54),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
      };
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: image ,
        map: map,
        animation: google.maps.Animation.DROP,
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
          var iwOuter = $('.gm-style-iw');
          var iwBackground = iwOuter.prev();
          iwBackground.children(':nth-child(2)').css({'display' : 'none'});
          iwBackground.children(':nth-child(4)').css({'display' : 'none'});
          iwBackground.children(':first-child').css({'display' : 'none'});
          //iwBackground.css({'display' : 'none'});
          var iwCloseBtn = iwOuter.next();
          iwCloseBtn.css({ opacity: '1', right: '40px', top: '30px' });

        }
      })(marker, i));
    }
};



