/**
 * PhonebookAddController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {



  add: async function (req, res) {

    var newaddres = req.param("Address");

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    await Phonebook.create(Object.assign({
      Address: newaddres,
      PhoneNumber: req.param("PhoneNumber"),
    }))

    // Since everything went ok, send our 200 response.
    return res.redirect("/");

  }

};


