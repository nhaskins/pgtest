var GoogleMaps;

GoogleMaps = (function() {
  var urlImages;

  function GoogleMaps() {}

  urlImages = 'assets/images';

  GoogleMaps.prototype.buildMap = function(mapConfig) {
    console.log("fired GoogleMaps.buildMap");
    return new google.maps.Map(document.getElementById("googleMap"), mapConfig);
  };

  GoogleMaps.prototype.markerHide = function(marker, map) {
    return marker.setMap(null);
  };

  GoogleMaps.prototype.markerShow = function(marker, map) {
    return marker.setMap(map);
  };

  GoogleMaps.prototype.markerHideAll = function(markersArray, iwArray, map) {
    console.log("fired markerHideAll");
    _.each(markersArray, (function(_this) {
      return function(m) {
        if (m.userMarker === false) {
          return _this.markerHide(m, map);
        }
      };
    })(this));
    return _.each(iwArray, function(iw) {
      return iw.close();
    });
  };

  GoogleMaps.prototype.markerShowAll = function(markersArray, map) {
    console.log("fired markerShowAll");
    _.each(markersArray, (function(_this) {
      return function(m) {
        return _this.markerShow(m, map);
      };
    })(this));
    return this.centerMap(markersArray, map);
  };

  GoogleMaps.prototype.centerMap = function(markersArray, map) {
    var markerBounds;
    console.log("fired centerMap");
    console.log(markersArray);
    markerBounds = new google.maps.LatLngBounds();
    _.each(markersArray, function(m) {
      return markerBounds.extend(m.position);
    });
    console.log("map.fitBounds...");
    console.log(map.fitBounds);
    console.log("markerBounds");
    console.log(markerBounds);
    return map.fitBounds(markerBounds);
  };

  GoogleMaps.prototype.solveForMarkerIcon = function(boutique_paid_status) {
    var iconFile, iconSizeH, iconSizeV;
    iconSizeH = 21;
    iconSizeV = 21;
    if (boutique_paid_status) {
      iconFile = "" + urlImages + "/icon_gmap_paid.png";
      iconSizeH = 31;
      iconSizeV = 31;
    } else {
      iconFile = "" + urlImages + "/icon_gmap_unpaid.png";
    }
    return new google.maps.MarkerImage(iconFile, null, null, null, new google.maps.Size(iconSizeH, iconSizeV));
  };

  GoogleMaps.prototype.addMarker = function(m, map, infoWindowTemplate) {
    var infoWindow, marker, markerObject;
    markerObject = {
      userMarker: false,
      distance: this.distance(38.63130, -90.19323, m.geometry.location.lat, m.geometry.location.lng),
      icon: this.solveForMarkerIcon(m.boutique_paid_status),
      position: new google.maps.LatLng(m.geometry.location.lat, m.geometry.location.lng),
      map: map,
      title: m.boutique_name,
      hashBoutique: m.hashBoutique,
      township: m.boutique_township
    };
    marker = new google.maps.Marker(markerObject);
    infoWindow = new google.maps.InfoWindow({
      content: infoWindowTemplate(m)
    });
    google.maps.event.addListener(marker, 'click', function() {
      return infoWindow.open(map, marker);
    });
    return {
      marker: marker,
      infoWindow: infoWindow
    };
  };

  GoogleMaps.prototype.addMarkerUser = function(lat, lng, map) {
    var marker, markerObject;
    console.log("fired addMarkerUser");
    console.log(lat);
    console.log(lng);
    markerObject = {
      userMarker: true,
      icon: 'assets/images/icon_gmap_current_location.png',
      position: new google.maps.LatLng(lat, lng),
      map: map
    };
    console.log(markerObject);
    return marker = new google.maps.Marker(markerObject);
  };

  GoogleMaps.prototype.modelTownshipData = function(JSONdata) {
    var townships, tr;
    tr = [];
    return townships = _.groupBy(JSONdata, function(obj) {
      return obj.boutique_township;
    });
  };

  GoogleMaps.prototype.selectSearchHashes = function(JSONdata, searchTerm) {
    var hashes;
    hashes = [];
    console.log("fired g.selectSearch " + searchTerm);
    _.each(JSONdata, function(x) {
      if (x.boutique_type.length != null) {
        return _.each(x.boutique_type, function(y) {
          if (y.name === searchTerm) {
            return hashes.push(x.hashBoutique);
          }
        });
      }
    });
    return hashes;
  };

  GoogleMaps.prototype.distance = function(lat1, lon1, lat2, lon2) {
    var dist, radlat1, radlat2, radlon1, radlon2, radtheta, theta;
    radlat1 = Math.PI * lat1 / 180;
    radlat2 = Math.PI * lat2 / 180;
    radlon1 = Math.PI * lon1 / 180;
    radlon2 = Math.PI * lon2 / 180;
    theta = lon1 - lon2;
    radtheta = Math.PI * theta / 180;
    dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    return Math.round(dist);
  };

  return GoogleMaps;

})();

(function($) {
  var App, Boutique, b, errorCurrentPosition, g, successCurrentPosition, urlAPI, urlBase;
  urlBase = 'http://boutiquenav.com';
  urlAPI = "" + urlBase + "/wp-content/plugins/boutique/app.json";
  App = {
    boutiqueTypes: [],
    templates: HBS.templates,
    map: {
      infoWindows: [],
      markers: [],
      mapInitialConfig: {
        center: new google.maps.LatLng(38.6623776, -90.4253544),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        streetViewControl: false
      }
    }
  };
  Boutique = (function() {
    function Boutique() {}

    Boutique.prototype.mbToggleVisible = function(focusID) {
      console.log(focusID);
      $('#mainBox > div').each((function(_this) {
        return function(index, e) {
          return $(e).hide();
        };
      })(this));
      $('#mainBox').show();
      return $(focusID).show();
    };

    Boutique.prototype.getFavorites = function() {
      var data;
      if (data = JSON.parse(window.localStorage.getItem("fav"))) {
        return _.sortBy(data, function(x) {
          return x.boutique_name;
        });
      } else {
        return [];
      }
    };

    Boutique.prototype.setFavorite = function(hashBoutique, JSONdata) {
      var favData, favorite, refreshData, x;
      console.log("fired b.setFavorite");
      favData = [];
      favorite = _.findWhere(JSONdata, {
        hashBoutique: hashBoutique
      });
      if (window.localStorage.getItem("fav")) {
        favData = JSON.parse(window.localStorage.getItem("fav"));
      }
      if (!_.findWhere(favData, {
        hashBoutique: hashBoutique
      })) {
        favData.push(favorite);
        window.localStorage.setItem("fav", JSON.stringify(favData));
        x = JSON.parse(window.localStorage.getItem("fav"));
        refreshData = {
          data: this.getFavorites()
        };
        $('#mbFavorites').html(App.templates['mbFavorites'](refreshData));
        alert("Favorite Added!");
      }
      return console.log(window.localStorage.getItem("fav"));
    };

    Boutique.prototype.deleteFav = function(hashBoutique) {
      var data, sorted;
      console.log("fired deleteFav " + hashBoutique);
      data = b.getFavorites();
      console.log(data.length);
      console.log(data);
      sorted = _.reject(data, function(x) {
        return x.hashBoutique === hashBoutique;
      });
      return window.localStorage.setItem("fav", JSON.stringify(sorted));
    };

    Boutique.prototype.hideSplash = function() {
      return $('#mainSplash').delay(5000).fadeOut(1000);
    };

    return Boutique;

  })();
  b = new Boutique();
  g = new GoogleMaps();
  App.map.mapObject = g.buildMap(App.map.mapInitialConfig);
  b.hideSplash();
  $('#bottomPanel').html(App.templates['bottomPanel']({
    foo: "bar"
  }));
  errorCurrentPosition = function(error) {
    console.log("fired errorCurrentPosition");
    return successCurrentPosition(null);
  };
  successCurrentPosition = function(position) {
    var userLat, userLng;
    console.log(position);
    if (position != null) {
      userLat = position.coords.latitude;
      userLng = position.coords.longitude;
      App.map.userMarker = g.addMarkerUser(userLat, userLng, App.map.mapObject);
    }
    $.ajax({
      type: "GET",
      url: urlAPI,
      success: function(JSONdata) {
        var favoritesData, townshipData;
        _.each(JSONdata, function(boutique) {
          var distance, r;
          r = g.addMarker(boutique, App.map.mapObject, App.templates['infoWindow']);
          if (position != null) {
            distance = g.distance(userLat, userLng, boutique.geometry.location.lat, boutique.geometry.location.lng);
            boutique.distance = distance;
          } else {
            boutique.distance = null;
          }
          if (boutique.boutique_type) {
            _.each(boutique.boutique_type, function(x) {
              return App.boutiqueTypes.push(x.name);
            });
          }
          App.map.markers.push(r.marker);
          return App.map.infoWindows.push(r.infoWindow);
        });
        App.boutiqueTypes = _.uniq(App.boutiqueTypes);
        App.boutiqueTypes = _.sortBy(App.boutiqueTypes, function(x) {
          return x;
        });
        townshipData = g.modelTownshipData(JSONdata);
        townshipData = {
          data: townshipData,
          boutiqueTypes: App.boutiqueTypes
        };
        favoritesData = {
          data: b.getFavorites()
        };
        $('#mbTownships').html(App.templates['mbTownships'](townshipData));
        $('#mbFavorites').html(App.templates['mbFavorites'](favoritesData));
        jQuery(document).on('change', '#searchSelect', function(e) {
          var filterdMarkers, hashes, searchTerm;
          searchTerm = $(this).val();
          if (searchTerm !== "") {
            console.log("fired #searchSelect change " + searchTerm);
            hashes = g.selectSearchHashes(JSONdata, searchTerm);
            g.markerHideAll(App.map.markers, App.map.infoWindows, App.map.mapObject);
            filterdMarkers = [];
            _.each(App.map.markers, function(x) {
              if (_.findWhere(hashes, x.hashBoutique)) {
                return filterdMarkers.push(x);
              }
            });
            g.markerShowAll(filterdMarkers, App.map.mapObject);
            return $('#buttonMap').click();
          }
        });
        jQuery(document).on('click', '#extTest1', function(e) {
          return navigator.app.loadUrl("http://google.com", {
            openExternal: true
          });
        });
        jQuery(document).on('click', '#extTest2', function(e) {
          return window.open("http://google.com", '_system');
        });
        jQuery(document).on('click', '.ext_link', function(e) {
          var link;
          link = $(this).attr('href');
          return console.log("fired .ext_link " + link);
        });
        jQuery(document).on('click', '.buttonAddFavorite', function(e) {
          var hashBoutique;
          hashBoutique = $(this).data("hash");
          console.log("fired buttonAddFavorite " + hashBoutique);
          b.setFavorite(hashBoutique, JSONdata);
          return e.preventDefault();
        });
        jQuery(document).on('click', '.buttonAddFavorite', function(e) {
          console.log("fired button_add_to_favorites");
          return e.preventDefault();
        });
        jQuery(document).on('click', '.buttonBoutique', function(e) {
          var hashBoutique;
          hashBoutique = $(this).data("hash");
          console.log("fired .buttonBoutique " + hashBoutique);
          g.markerHideAll(App.map.markers, App.map.infoWindows, App.map.mapObject);
          console.log("start test");
          return _.each(App.map.markers, function(marker) {
            if (hashBoutique === marker.hashBoutique) {
              console.log("marker is...");
              console.log(marker);
              g.markerShow(marker, App.map.mapObject);
              $('#buttonMap').click();
              g.centerMap([marker], App.map.mapObject);
              return google.maps.event.trigger(marker, 'click');
            }
          });
        });
        jQuery(document).on('click', '.buttonTownship', function(e) {
          var tmp, townshipName;
          tmp = [];
          townshipName = $(this).data("township");
          console.log("fired .buttonTownship " + townshipName);
          e.preventDefault();
          g.markerHideAll(App.map.markers, App.map.infoWindows, App.map.mapObject);
          _.each(App.map.markers, function(m) {
            if (m.township === townshipName) {
              g.markerShow(m, App.map.mapObject);
              return tmp.push(m);
            }
          });
          g.centerMap(tmp, App.map.mapObject);
          return $('#buttonMap').click();
        });
        jQuery(document).on('click', '#buttonMap', function(e) {
          console.log("clicked buttonMap");
          e.preventDefault();
          return $('#mainBox').hide();
        });
        jQuery(document).on('click', '#buttonTownships', function(e) {
          console.log("clicked buttonTownships");
          e.preventDefault();
          return b.mbToggleVisible('#mbTownships');
        });
        jQuery(document).on('click', '#buttonFavorites', function(e) {
          console.log("clicked buttonFavorites");
          e.preventDefault();
          return b.mbToggleVisible('#mbFavorites');
        });
        jQuery(document).on('click', '#buttonShowAll', function(e) {
          console.log("clicked buttonShowAll");
          e.preventDefault();
          console.log(App.map.markers);
          g.markerShowAll(App.map.markers, App.map.mapObject);
          return $('#buttonMap').click();
        });
        jQuery(document).on('click', '.buttonDeleteFav', function(e) {
          var hashBoutique;
          console.log("fired .buttonDeleteFav");
          e.preventDefault();
          hashBoutique = $(this).data("hash");
          b.deleteFav(hashBoutique);
          return $(this).parent().remove();
        });
        return jQuery(document).on('click', '#buttonShowRadius', function(e) {
          var filterdMarkers;
          console.log("fired #buttonShowRadius");
          e.preventDefault();
          filterdMarkers = _.filter(App.map.markers, function(x) {
            return x.distance <= 10;
          });
          g.markerHideAll(App.map.markers, App.map.infoWindows, App.map.mapObject);
          g.markerShowAll(filterdMarkers, App.map.mapObject);
          return $('#buttonMap').click();
        });
      }
    });
    return {
      fail: function() {
        return alert("There was an error getting the data. Please try again later.");
      }
    };
  };
  return navigator.geolocation.getCurrentPosition(successCurrentPosition, errorCurrentPosition, {
    timeout: 5000
  });
})(jQuery);
