

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        {
        name: 'John Doe',
        e_mail: 'qwert@bb.ru',
        password: '123',
        scores: 20
      },
      {
        name: 'John Boo',
        e_mail: 'iajsf@bb.ru',
        password: '456',
        scores: 30
      },
      {
        name: 'Jotaro Kudjo',
        e_mail: 'qpfkkn@bb.ru',
        password: '789a',
        scores: 68
      },
      {
        name: 'Valera',
        e_mail: 'poaef@bb.ru',
        password: 'asd',
        scores: 35
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});
    
  }
};
