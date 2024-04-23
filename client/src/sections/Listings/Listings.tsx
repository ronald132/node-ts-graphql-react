import React from 'react'
import { server } from '../../lib/api'
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
  const fetchListings = async () => {
    // confident with data type returned from server
    const { data } = await server.fetch<ListingData>({ query: ListingQL })
    console.log(data)
  }

  const deleteListing = async () => {
    const { data } = await server.fetch<
      DeleteListingData,
      DeleteListingVariables
    >({
      query: DeleteListingQL,
      variables: {
        id: '6627d30021d62a7235248520',
      },
    })

    console.log(data)
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
      <button onClick={deleteListing}>Delete Listings!</button>
    </div>
  )
}
