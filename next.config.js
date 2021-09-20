if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    USE_MIRAGE_SERVER: process.env.USE_MIRAGE_SERVER
  }
}
