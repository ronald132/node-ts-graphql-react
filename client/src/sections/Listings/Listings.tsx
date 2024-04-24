import React from 'react'
import { useMutation, useQuery } from '../../lib/api'
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

  const [
    deleteListing,
    { loading: deleteListingLoading, error: deleteListingError },
  ] = useMutation<DeleteListingData, DeleteListingVariables>(DeleteListingQL)

  const handleDeleteListing = async (id: string) => {
    await deleteListing({ id })
    refetch()
  }

  const listings = data ? data.listings : null

  const listingList = (
    <ul>
      {listings?.map((listing) => {
        return (
          <li key={listing.id}>
            {listing.title}{' '}
            <button onClick={() => handleDeleteListing(listing.id)}>
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )

  if (loading) return <h2>Loading...</h2>

  if (error) {
    return <h2>Something went wrong - please try again later :(</h2>
  }

  const deleteListingLoadingMessage = deleteListingLoading ? (
    <h4> Deletion in progress.. </h4>
  ) : null

  const deleteListingErrorMessage = deleteListingError ? (
    <h4>Uh oh! Something went wrong with deletion - pelase try again later</h4>
  ) : null

  return (
    <div>
      <h2>{title}</h2>
      {listingList}
      {deleteListingLoadingMessage}
      {deleteListingErrorMessage}
    </div>
  )
}
