/**
 * PhonebookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `PhonebookController.create()`
   */
  create: async function (req, res) {
    return res.json({
      todo: 'add() is not implemented yet!'
    });
  },

  /**
   * `PhonebookController.add()`
   */
  add: async function (req, res) {
    return res.json({
      todo: 'add() is not implemented yet!'
    });
  },

  /**
   * `PhonebookController.delete()`
   */
  delete: async function (req, res) {
    console.log(req.param("state_address"))
    var sacrifice =  Phonebook.findOne({
      Address: req.param("state_address")
    });
    if (!sacrifice) {
      return res.redirect("/");
    }
    else{
      await Phonebook.destroy({
        Address: req.param("state_address")
      });
      return res.redirect("list");
    }
  },


  /**
   * `PhonebookController.edit()`
   */
  edit: async function (req, res) {
    console.log(req.param("state_address"))
    var sacrifice =  Phonebook.findOne({
      Address: req.param("state_address")
    });
    if (!sacrifice) {
      return res.redirect("/");
    }
    else{
      await Phonebook.update({Address: req.param("state_address")},{
        Address: req.param("edit_address"),
        PhoneNumber: req.param("edit_number")
      });

      return res.redirect("list");
    }
  },

  /**
   * `PhonebookController.find()`
   */
  find: async function (req, res) {
    return Phonebook.find().then(function (phonebook) {
        return res.view("pages/phonebook/list", {
            status: 'OK',
            title: 'List of contacts',
            phonebook: phonebook
        });
   }).catch(function (err) {
        console.error("Error on ContactService.findAll");
        console.error(err);
        return res.view('500', {message: "Sorry, an error occurd - " + err});
    });
  },

};

