export default {
  name: "general",
  type: "document",
  title: "General",
  fields: [
    {
      name: "techStackOrder",
      type: "array",
      of: [{ type: "string" }],
      title: "Tech Stack Order",
    },
  ],
}
