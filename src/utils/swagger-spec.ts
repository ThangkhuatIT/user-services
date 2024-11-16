import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Vicourses User API",
      version: "v1",
      description: "Vicourses API documentation for User Service"
    },
  },
  apis: ["src/controllers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;