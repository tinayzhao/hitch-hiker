import React, { useEffect, useRef } from "react";
import InfoWindow from "../infoWindow/InfoWindow";
import ReactDOMServer from "react-dom/server";

const Map = ({ options, onMount, className }) => {
  const props = { ref: useRef(), className };
  const markerLocations = [
    { lat: 37.7886, lng: -122.3976, name: `Bob` },
    { lat: 37.7876, lng: -122.3966, name: `Sam` },
    { lat: 37.7866, lng: -122.3956, name: `Tammy` },
    { lat: 37.7866, lng: -122.3976, name: `Schmidt` },
  ];
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options);
    onMount && onMount(map);

    for (let i = 0; i < markerLocations.length; i++) {
      let contentString = ReactDOMServer.renderToString(
        <InfoWindow
          driver={markerLocations[i].name}
          destination={`Yosemite`}
          departureTime={`1pm`}
          returnTime={`2pm`}
          seats={4}
        />
      );
      console.log(contentString);
      const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
      });
      const marker = new window.google.maps.Marker({
        position: { lat: markerLocations[i].lat, lng: markerLocations[i].lng },
        map: map,
      });
      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });
    }
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`);
      script.type = `text/javascript`;
      script.src = `https://maps.google.com/maps/api/js?key=${
        process.env.REACT_APP_GOOGLE_API_KEY
      }`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  });

  return (
    <div
      {...props}
      style={{ height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }}
    />
  );
};

Map.defaultProps = {
  options: {
    center: { lat: 37.7876, lng: -122.3966 },
    zoom: 15,
  },
};

export default Map;
