module.exports = {


  friendlyName: 'View add',


  description: 'Display "Add" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/phonebook/add'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
