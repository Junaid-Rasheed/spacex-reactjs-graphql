import React from "react";
import { useQuery, gql } from "@apollo/client";

import { Link, useHistory } from "react-router-dom";

const QueryData = gql`
  query getLaunches {
    launches {
      mission_name
      launch_year
      launch_success
      id
    }
  }
`;

// launch_year
// launch_success

export const Launch = () => {
  const history = useHistory();

  const { loading, data, error } = useQuery(QueryData);

  console.log("Launch Data", data);
  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {/* onClick={()=>history.push(generatePath("/Launch/:id", { id }))} */}
      {data &&
        data.launches &&
        data.launches.map((d) => (
          <li key={d.id}>
            <Link
              to={`/Launch/${d}`}
              onClick={() =>
                history.push({
                  pathname: "/Launch/:id",
                  state: d.id, // your data array of objects
                })
              }
            >
              {d.mission_name} - {d.launch_year} -
              {JSON.stringify(d.launch_success)}-{d.id}
            </Link>
          </li>
        ))}
    </div>
  );
};
