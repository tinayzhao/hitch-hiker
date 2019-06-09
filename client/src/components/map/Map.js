import React, { useEffect, useRef } from "react";
import firebase from "./../../firebaseConfig.js";
import InfoWindow from "../infoWindow/InfoWindow";
import ReactDOMServer from "react-dom/server";

const Map = ({ options, onMount, className }) => {
  const props = { ref: useRef(), className };
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options);
    const markers = firebase.database().ref("marker");

    markers.on("child_added", function(snapshot) {
      const newPosition = snapshot.val();
      const uluru = { lat: newPosition.lat, lng: newPosition.lng };
      const marker = new window.google.maps.Marker({
        position: uluru,
        map: map,
      });
      let contentString = ReactDOMServer.renderToString(
        <InfoWindow
          driver={newPosition.driver}
          destination={newPosition.name}
          departureTime={`1pm`}
          returnTime={`2pm`}
          seats={4}
        />
      );
      console.log(contentString);
      const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
      });
      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });
    });
    onMount && onMount(map);
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`);
      script.type = `text/javascript`;
      script.src = `https://maps.google.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }&libraries=places`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  });

  return <div {...props} style={{ height: `92vh` }} />;
};

Map.defaultProps = {
  options: {
    center: { lat: 37.7876, lng: -122.3966 },
    zoom: 10,
  },
};

export default Map;
