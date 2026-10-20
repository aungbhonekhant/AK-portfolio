import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
  token: "", //import.meta.env.REACT_APP_SANITY_TOKEN,
  //ignoreBrowserTokenWarning: true,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
