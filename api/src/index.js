const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("./db").dbConnect();
require("./db").initDBListeners();


const port = process.env.PORT || 8080;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Messages API",
            description: "Messages API Information",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:8080"]
        }
    },
    // ['.routes/*.js']
    apis: ["./src/index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
const messages = require("./routes/Messages");
app.use('/api/messages', messages);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});