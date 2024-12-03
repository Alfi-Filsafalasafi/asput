
    function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: -6.2, lng: 106.816666 },
      });

      const route = new google.maps.Polyline({
        path: [
          { lat: -6.2, lng: 106.816666 }, // Jakarta
          { lat: -6.914744, lng: 107.60981 }, // Bandung
          { lat: -7.797068, lng: 110.370529 } // Yogyakarta
        ],
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      route.setMap(map);
    }
    window.initMap = initMap;