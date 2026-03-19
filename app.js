const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const articleRoutes = require('./routes/articles');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/articles', articleRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT,  () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur lancé sur ${PORT}`);
});