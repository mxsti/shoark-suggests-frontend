require('dotenv').config();

module.exports = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })

    return config
  },
}
