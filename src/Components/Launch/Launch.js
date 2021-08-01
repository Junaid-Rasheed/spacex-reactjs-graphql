import React from "react"
import { useQuery ,gql } from "@apollo/client"
import "./Launch.css";
import {Link} from 'react-router-dom'

const QueryData = gql`
  query getLaunches {
    launches {
      mission_name
      launch_year
      launch_success
      id
    }
  }
`

// launch_year
// launch_success

export const Launch = () => {
    const { loading, data, error } = useQuery(QueryData)
  
    
    console.log("Launch Data", data)
    if (loading) return <div>loading...</div>
    if (error) return <div>{error}</div>
  
    return (
      <div className='Launch-Main'>
      {/* onClick={()=>history.push(generatePath("/Launch/:id", { id }))} */}
      <h1>
        Mission Name 
        </h1>
        {data &&
          data.launches &&
          data.launches.map(d => <li key={d.id}>
            <Link to={`/Launch/${d.id}`} className="Launch-link">
            {/* {d.mission_name} - {d.launch_year} -{JSON.stringify(d.launch_success)}-{d.id} */}
            {d.mission_name}
            </Link>
            
            </li>)}
      </div>
    )
  }
  