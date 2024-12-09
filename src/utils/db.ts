import { MongoClient } from "mongodb";
import "dotenv/config";
export const DB_INFO = {
  host: process.env.CONNECTION_STRING as string,
  // db: process.env.DB_NAME,
  db: "providence",
};

/**
 * @param {UserType} user - The user object to save.
 * @param {string} procName - The stored procedure name.
 * @return {Promise<any>} The result of the database operation.
 */
export class DBConnection {
  private static instance: MongoClient | null;
  private constructor() {}
  public static async getInstance(): Promise<MongoClient> {
    if (!DBConnection.instance) {
      DBConnection.instance = new MongoClient(DB_INFO.host);
      await DBConnection.instance.connect();
    }
    return DBConnection.instance;
  }
  public static async closeConnection() {
    if (DBConnection.instance) {
      await DBConnection.instance.close();
      DBConnection.instance = null;
    }
  }
}
