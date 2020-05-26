'use-strict';

const app = require('./express/server');

const PORT = 80;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
