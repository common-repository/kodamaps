// Generated by CoffeeScript 1.9.2
(function() {
  var initialize;

  initialize = function() {
    jQuery(document).find('[id^=map_canvas]').each(function() {
      var _this, address, geocoder, initLat, initLng, initZoom, map, marker, opt, postInfo;
      postInfo = window['kodamaps_posts_' + jQuery(this).attr('id').replace('map_canvas_', '')];
      initLat = (postInfo.centerLat != null) && postInfo.centerLat !== '' ? parseFloat(postInfo.centerLat, 10) : 0;
      initLng = (postInfo.centerLng != null) && postInfo.centerLng !== '' ? parseFloat(postInfo.centerLng, 10) : 0;
      initZoom = (postInfo.zoom != null) && postInfo.zoom !== '' ? parseInt(postInfo.zoom, 10) : 10;
      address = (postInfo.centerAddr != null) && postInfo.centerAddr !== '' ? postInfo.centerAddr : '';
      if (address !== '') {
        _this = this;
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          'address': address
        }, function(results, status) {
          var map, marker, opt;
          if (status === google.maps.GeocoderStatus.OK) {
            initLat = results[0].geometry.location.k;
            initLng = results[0].geometry.location.D;
            opt = {
              zoom: initZoom,
              center: new google.maps.LatLng(initLat, initLng),
              mapTypeid: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(_this, opt);
            marker = new google.maps.Marker({
              position: new google.maps.LatLng(initLat, initLng),
              map: map
            });
            return map.panTo(new google.maps.LatLng(initLat, initLng));
          }
        });
      } else {
        opt = {
          zoom: initZoom,
          center: new google.maps.LatLng(initLat, initLng),
          mapTypeid: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(this, opt);
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(initLat, initLng),
          map: map
        });
        map.panTo(new google.maps.LatLng(initLat, initLng));
      }
    });
  };

  window.onload = initialize;

}).call(this);
