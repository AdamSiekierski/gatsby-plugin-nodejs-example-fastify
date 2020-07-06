const fastify = require('fastify')();
const gatsby = require('gatsby-plugin-nodejs');

gatsby.prepare({ app: fastify, framework: 'fastify' }, () => {});

const port = process.env.PORT || 1337;

fastify.listen(port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`listening on port ${port}`);
});
