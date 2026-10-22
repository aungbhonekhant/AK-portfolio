export default {
  name: "skills",
  title: "Skills",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Position on the site, lowest first. Leave gaps (10, 20, …) to make inserting easy.",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bgColor",
      title: "BgColor",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
