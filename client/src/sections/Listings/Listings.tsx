import React from 'react'
import { server, useQuery } from '../../lib/api'
import { DeleteListingData, DeleteListingVariables, ListingData } from './types'

const ListingQL = `
  query Listings {
    listings {
      id
      title
      image
      address
      price
      numOfGuests
      numOfBeds
      rating
    }
  }
`

const DeleteListingQL = `
  mutation DeleteListing($id: ID!) {
    deleteListing (id: $id) {
      id
    }
  }
`

interface Props {
  title: string
}

export const Listings = ({ title }: Props) => {
  const { data, refetch, loading, error } = useQuery<ListingData>(ListingQL)

  const deleteListing = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariables>({
      query: DeleteListingQL,
      variables: {
        id,
      },
    })

    refetch()
  }

  const listings = data ? data.listings : null

  const listingList = (
    <ul>
      {listings?.map((listing) => {
        return (
          <li key={listing.id}>
            {listing.title}{' '}
            <button onClick={() => deleteListing(listing.id)}>Delete</button>
          </li>
        )
      })}
    </ul>
  )

  if (loading) return <h2>Loading...</h2>

  if (error) {
    return <h2>Something went wrong - please try again later :(</h2>
  }

  return (
    <div>
      <h2>{title}</h2>
      {listingList}
    </div>
  )
}
