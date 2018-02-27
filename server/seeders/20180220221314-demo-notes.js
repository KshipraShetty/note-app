
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notes', [{
            noteKey: 0,
            noteTitle: 'abc',
            noteText: 'qwerty',
            createdAt: new Date,
            updatedAt: new Date,
          }], {});
  },

  down: (queryInterface, Sequelize) => {
 return queryInterface.bulkDelete('notes', null, {});
  }
};
