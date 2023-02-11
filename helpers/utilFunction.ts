/**
 * Predicate function that checks if a collection exists in a given MongoDB database
 *
 * @param {Db} db Mongo database instance
 * @param {string} collectionName Name of collection
 *
 * @returns {boolean} true if collection exists, false otherwise
 */

import { Db } from 'mongodb';

export const doesCollectionExist = async (
    db: Db,
    collectionName: string
): Promise<boolean> => {
    const cursor = db.listCollections({ name: collectionName });
    const result = await cursor.hasNext();
    await cursor.close();

    return result;
};
