'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionsData = [
      {
        question: 'Hello',
        topic_id: 2,
        answer: 'Привет',
      },
      {
        question: 'Hello1',
        topic_id: 2,
        answer: 'Привет1',
      },
      {
        question: 'Hello2',
        topic_id: 2,
        answer: 'Привет2',
      },
      {
        question: 'РРРРР',
        topic_id: 1,
        answer: 'ППППП1',
      },
      {
        question: 'РРРРР',
        topic_id: 1,
        answer: 'ППППП2',
      },
      {
        question: 'РРРРР',
        topic_id: 1,
        answer: 'ППППП13',
      },
    ];

    const questions = questionsData.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questions);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
