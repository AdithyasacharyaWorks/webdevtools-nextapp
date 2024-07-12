import { Account, Client, Databases } from 'appwrite';
export const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID!);
   
export { ID ,Account} from 'appwrite';
export const database = new Databases(client);

export const account = new Account(client)