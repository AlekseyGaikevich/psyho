const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware для обработки статических файлов
app.use(express.static(path.join(__dirname, '../build')));

// Маршруты API
app.use('/api', require('./routes/index'));

// Обслуживание React приложения
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
