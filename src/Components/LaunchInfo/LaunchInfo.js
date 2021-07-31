import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'

const InfoData = gql`
  query InfoData($id: ID!) {
    launch(id: $id) {
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
`

export const LaunchInfo = () => {
  const { id } = useParams()

  const { loading, data } = useQuery(InfoData, {
    variables: { id: String(id) }
  })

  // React.useEffect(() => {
  //   refetch();
  // }, [idd]);

  console.log('iddd', id)
  console.log('Launch Info', data)

  if (loading) return <div>loading...</div>

  return (
    <div>
      <h2>hello</h2>
      <h2>
        {/* {data && data.launch?.mission_name} */}
        {/* {data && data.launch[idd] && data.launch[idd].mission_name} */}
      </h2>

    </div>
  )
}
