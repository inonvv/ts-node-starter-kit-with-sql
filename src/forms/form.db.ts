import { DB_INFO, DBConnection } from "../utils/db";

export async function getFormInformationDB(): Promise<any> {
  console.log("getFormInformationDB");
  try {
    const client = await DBConnection.getInstance();
    const db = client.db(DB_INFO.db);
    const collection = db.collection("forms");
    const result = await collection.findOne({});
    return result;
  } catch (error) {
    throw new Error();
  }
}

export async function PostFormInformationDB(form: any): Promise<any> {
  console.log("DB", form);

  try {
    const client = await DBConnection.getInstance();
    const db = client.db(DB_INFO.db);
    const collection = db.collection("forms");
    await collection.insertOne({ form, timestamp: new Date() });
    return true;
  } catch (error) {
    return false;
  } finally {
    await DBConnection.closeConnection();
  }
}
export default DBConnection;
