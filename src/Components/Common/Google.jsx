import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Google= (props) => {
    return (
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 33.6846, lng: -117.8265 }}
        />
    );
}
export default withScriptjs(
    withGoogleMap(
        Map
    )
)