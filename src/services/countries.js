import { client, checkError } from './client';

export async function getCountries() {
  const response = await client.from('countries').select();
  return checkError(response);
}
