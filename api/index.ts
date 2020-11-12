import Prismic from 'prismic-javascript';
import { Document as PrismicDocument } from 'prismic-javascript/types/documents';
import { PRISMIC_API_URL } from '../config';

export const getPage = async (prismicId: string): Promise<PrismicDocument> => {
  if (!prismicId) return;

  try {
    const api = await Prismic.getApi(PRISMIC_API_URL);
    const response: PrismicDocument = await api.getSingle(prismicId)

    return response;
    /*
    console.log(response);
    state.pageData = response.data;
    // if the page has meta data, set it, otherwise use the default
    // note, if you're hard coding meta data, do it after calling getPage()
    (['title', 'description', 'meta_image'] as (keyof typeof defaults)[]).forEach(prop => {
      state[prop] = response.data[prop] ? response.data[prop] : defaults[prop];
    })
    */
  } catch (e) {
    console.warn(e)
  }
}