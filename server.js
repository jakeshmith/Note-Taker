const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./Routes/apiRoutes')(app);
require('./Routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
  });