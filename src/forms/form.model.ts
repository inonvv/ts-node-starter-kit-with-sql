import { getFormInformationDB, PostFormInformationDB } from "./form.db";

export type UserType = {
  name: string;
  email: string;
  password: string;
};

export async function getFormInformationM(): Promise<any> {
  try {
    return await getFormInformationDB();
  } catch (error) {
    throw new Error();
  }
}

export async function PostFormInformationM(form: any): Promise<any> {
  console.log("model", form);

  return await PostFormInformationDB(form);
}
