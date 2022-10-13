require('dotenv').config()

module.exports = {
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || '1234',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || '',
  dbPort: process.env.DB_PORT || '5432',
  dbApiKey: process.env.API_KEY,
  Port: process.env.PORT || '3001'
}
