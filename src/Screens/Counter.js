import React from "react";
import { Button } from "@dsi/react-eds";
import { resolvePath, useNavigate } from "react-router-dom";
// import {
//   increaseCounter,
//   decreaseCounter,
// } from "../Redux/actions/counterActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Widgets from "./Widgets";
// import base64 from "react-native-base64";

function Counter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const axios_instance = axios.create();
  const counterValue = 10; //useSelector((state) => state.counterState.counterValue);
  const handleIncreaseCounter = () => {
    // dispatch(increaseCounter());
  };
  const userName = "sdb-app-user-ZeGuZbmO";
  const password = "H9YnH3I5";

  const token = Buffer.from(`${userName}:${password}`, "utf8").toString(
    "base64"
  );

  const [featureList, setFeatureList] = useState(null);

  function getLocationDetails() {
    var config = {
      method: "get",
      url: "https://ericsson-desk-booking-api-v2-development.azurewebsites.net/v1/location",
      headers: {
        Authorization: `Basic ${token}`,
      },
    };

    axios(config).then((response) => {
      console.log("dataaaa", response);
    });
  }

  function getSiteDetails() {
    const getDataFromResponse = (response) => {
      console.log("from function", response);
      return response.data;
    };

    var config = {
      method: "get",
      url: "https://ericsson-desk-booking-api-v2-development.azurewebsites.net/v1/location/country/SE/site/KI/app/smart_office",
      headers: {
        Authorization: `Basic ${token}`,
      },
    };

    axios(config).then((response) => {
      let data = getDataFromResponse(response);
      setFeatureList(data.features);
      console.log("after setting");
    });
  }

  const handleDecreaseCounter = () => {
    // dispatch(decreaseCounter());
  };

  const handleNavigate = () => {
    navigate("/todo");
  };

  const handleWidgetClick = (count, index) => {
    let newFeatures = [...featureList];
    newFeatures[index].use_count = count + 1;
    console.log("newww", newFeatures);
    // setFeatureList(newFeatures);
    console.log("indexxx", index);
    console.log("...............");
  };

  console.log("......", featureList);
  return (
    <div>
      {/* <h2>COUNTER:{counterValue}</h2>
      <Button onClick={handleIncreaseCounter}>Increase</Button>
      <Button onClick={handleDecreaseCounter}>Decrease</Button>
      <br />
      <Button onClick={handleNavigate}>Go to TODO</Button>
      <Button onClick={getLocationDetails}>Get location</Button> */}
      <Button onClick={getSiteDetails}>Sitedetails</Button>
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {featureList === null ? (
          <p>No data</p>
        ) : (
          featureList
            .sort((a, b) => b.use_count - a.use_count)
            .map((item, index) => (
              <div>
                <Widgets name={item.label} description={item.descr} />
                {/* <Button onClick={handleWidgetClick(item.use_count, index)}>
                  Click
                </Button> */}
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default Counter;
