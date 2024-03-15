'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionsData = [
      {
        question: 'Продолжите фразу из мем-звонка: «С какой стати, вы меня извините?! Я скандал такой …»',
        topic_id: 1,
        answer: 'учиню',
      },
      {
        question: 'Картинка со звуком. Что говорит герой мема?',
        topic_id: 1,
        answer: 'ля ты крыса',
      },
      {
        question: 'Что главнее и сильнее всего, по мнению Доминика Торетто?',
        topic_id: 1,
        answer: 'семья',
      },
      {
        question: 'Продолжите фразу: "Идущий к ..."',
        topic_id: 1,
        answer: 'реке',
      },
      {
        question: 'Человека с каким редким именем встречала женщина с красным кандибобером?',
        topic_id: 1,
        answer: 'ибрагим',
      },
      {
        question: 'Автор видео держал в руках камеру. А что показалось женщине, которая проходила мимо?',
        topic_id: 1,
        answer: 'сова',
      },
      {
        question: 'Какая главная профессия была у повара?',
        topic_id: 1,
        answer: 'повар',
      },
      {
        question: 'Ну и самое главное. «Мне этот мир абсолютно ...',
        topic_id: 1,
        answer: 'понятен',
      },
      {
        question: 'Что носит дьявол в известном фильме?',
        topic_id: 2,
        answer: 'прада',
      },
      {
        question: 'Мои года - моё ...',
        topic_id: 2,
        answer: 'богатсво',
      },
      {
        question: 'Куда уходит душа, когда ей бывает страшно?',
        topic_id: 2,
        answer: 'в пятки',
      },
      {
        question: 'На какой вопрос не может получить ответ Гамлет?',
        topic_id: 2,
        answer: 'быть или не быть',
      },
      {
        question: 'Назовите главную телебашню России',
        topic_id: 2,
        answer: 'останкино',
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
