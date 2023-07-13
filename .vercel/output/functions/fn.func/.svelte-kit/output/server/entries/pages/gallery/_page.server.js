import * as contentful from "contentful";
const CONTENTFUL = "EXR0kul91Rp0Og3jADvfEaiLTKkNOpqUemzoubF4YMI";
const CONTENTFULSPACE = "ou5y66xxxy0c";
const CONTENTFUL_ENTRY = "4ilHWDlZoI8cEbUQtEW7DQ";
const client = contentful.createClient ? contentful.createClient({
  accessToken: `${CONTENTFUL}`,
  space: `${CONTENTFULSPACE}`
}) : contentful.default.createClient({
  accessToken: `${CONTENTFUL}`,
  space: `${CONTENTFULSPACE}`
});
async function load() {
  return {
    doorPics: await client.getAssets({
      limit: 100
    }),
    withEntry: await client.getEntry(`${CONTENTFUL_ENTRY}`)
  };
}
export {
  load
};
