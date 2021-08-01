import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import './LaunchInfo.css'

const InfoData = gql`
  query InfoData($id: ID!) {
    launch(id: $id) {
      launch_site {
        site_name
      }
      launch_success
      launch_year
      mission_name
      rocket {
        rocket_name
      }
      details
    }
  }
`;

export const LaunchInfo = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(InfoData, {
    variables: { id: String(id) },
  });

  console.log("iddd", id);
  console.log("Launch Info", data);

  if (loading) return <div className="LaunchInfo-Main-div">loading...</div>;

  return (
    <div className="LaunchInfo-Main-div" xs={12} md={7} sm={12} lg={7}>
       <h1>
        Mission Detail 
        </h1>
      <h3 >
        MissionName is &nbsp;:{" "}
        <span style={{ color: "#c3693a" }}>
          {data && data.launch?.mission_name}
        </span>
        <br />
        Rocket Name is &nbsp;: <span style={{ color: "#c3693a" }}>{data && data.launch?.rocket.rocket_name}</span>
  
        <br />
        Site Name is &nbsp; :<span style={{ color: "#c3693a" }}> {data && data.launch?.launch_site.site_name}</span>
        <br />
        Launch Success is &nbsp; :
        <span style={{ color: "#c3693a" }}> {JSON.stringify(data && data.launch?.launch_success)}</span>
        <br />
        Launch Year is &nbsp; :<span style={{ color: "#c3693a" }}> {data && data.launch?.launch_year}</span>
        <br />
        Detail is &nbsp; :<span style={{ color: "#c3693a" }}> {data && data.launch?.details}</span>
      </h3>
    </div>
  );
};
