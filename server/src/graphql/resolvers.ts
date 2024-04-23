import { ObjectId } from 'mongodb'
import { Database, Listing } from '../lib/types'
import { IResolvers } from '@graphql-tools/utils'

export const resolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: undefined,
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray()
    },
  },

  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteResult = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      })

      if (!deleteResult) {
        throw new Error('failed to delete listing')
      }

      return deleteResult
    },
  },

  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
  },
}
