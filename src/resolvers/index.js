const { get } = require('../config/api_service')

const resolvers = {
  Query: {
    getForm: async (_, { path }) => {
      try {
        const form = await get('forms/' + path);
        return form;
      } catch (err) {
        console.log(err.message)
      }

    },
    getForms: async () => {
      try {
        const forms = await get('forms');
        return forms;
      } catch (err) {
        console.log(err.message)
      }
    }
  }
}

module.exports = resolvers;