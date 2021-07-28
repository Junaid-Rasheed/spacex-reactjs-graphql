import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const InfoData = gql`
  query InfoData($id: String) {
    launch(idd: $id) {
      launch_site {
        site_name
      }
      launch_success
      launch_year
      links {
        flickr_images
      }
      mission_name
      rocket {
        rocket_name
      }
      details
    }
  }
`;

export const LaunchInfo = () => {
  const { idd } = useParams();

  const { loading, data, error } = useQuery(InfoData, {
    variables: { id: String(idd) },
  });
  console.log('iddd',idd)
  console.log("Launch Info", data);

  // if (loading) return <div>loading...</div>;

  // if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>hello</h2>
    
      {data &&data.launch[idd] && data.launch[idd].mission_name}
      {/* {data[idd].mission_name} */}
      {/* {data &&
        data.launch &&
        data.launch.map((d) => <li>{d.launch.mission_name}</li>
        )} */}
    </div>
  );
};
