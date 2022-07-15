module.exports = {
    apps: [
      {
        name: 'strapi-frontend',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }