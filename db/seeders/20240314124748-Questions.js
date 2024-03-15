'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const questionsData = [
      {
        question: 'Продолжите фразу из мем-звонка: «С какой стати, вы меня извините?! Я скандал такой …»',
        topic_id: 1,
        answer: 'учиню',
        img: 'https://avatars.mds.yandex.net/i?id=0a412bd9aa94acc1b1552d8c0be2097cd5cf6f01-10869732-images-thumbs&n=13',
      },
      {
        question: 'Картинка со звуком. Что говорит герой мема?',
        topic_id: 1,
        answer: 'ля ты крыса',
        img: 'https://click-or-die.ru/app/uploads/2023/09/bezymyannyj3-1.jpg',
      },
      {
        question: 'Что главнее и сильнее всего, по мнению Доминика Торетто?',
        topic_id: 1,
        answer: 'семья',
        img: 'https://medialeaks.ru/wp-content/uploads/2021/07/4a66d7da5d9aeedf_1920xh-600x338.jpeg',
      },
      {
        question: 'Продолжите фразу: "Идущий к ..."',
        topic_id: 1,
        answer: 'реке',
        img: 'https://165dc6ae-1b27-4856-8ca7-b1edf208847c.selcdn.net/images/original/materials/frontPhotos/18062/3316.jpg?1704985687',
      },
      {
        question: 'Человека с каким редким именем встречала женщина с красным кандибобером?',
        topic_id: 1,
        answer: 'ибрагим',
        img: 'https://news.store.rambler.ru/img/a2edff0f8534a3d5b671d43c41ca8e29?img-1-resize=width%3A1280%2Cheight%3A1280%2Cfit%3Acover&img-format=auto',
      },
      {
        question: 'Автор видео держал в руках камеру. А что показалось женщине, которая проходила мимо?',
        topic_id: 1,
        answer: 'сова',
        img: 'https://n1s1.hsmedia.ru/d1/7c/7d/d17c7d1eb16aa910e855754a35f9db36/1200x630_0xac120003_1134419881666367896.jpg',
      },
      {
        question: 'Какая главная профессия была у повара?',
        topic_id: 1,
        answer: 'повар',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/1112142/pub_5e4bf129386b1c555647bfca_5e4bf38fa89e6c018bc928e6/scale_1200',
      },
      {
        question: 'Ну и самое главное. «Мне этот мир абсолютно ...',
        topic_id: 1,
        answer: 'понятен',
        img: 'https://static.tildacdn.com/tild3334-6263-4630-a564-633238646335/_22.png',
      },
      {
        question: 'Что носит дьявол в известном фильме?',
        topic_id: 2,
        answer: 'прада',
        img: 'https://b1.filmpro.ru/c/485214.1200xp.jpg',
      },
      {
        question: 'Мои года - моё ...',
        topic_id: 2,
        answer: 'богатсво',
        img: 'https://www.zolotoy-zapas.ru/upload/resize_cache/webp/images/news/zolotye-monety.webp',
      },
      {
        question: 'Куда уходит душа, когда ей бывает страшно?',
        topic_id: 2,
        answer: 'в пятки',
        img: 'https://lh3.googleusercontent.com/proxy/YmB9V3hI-OVrJtVJypvUcbvp4VDI7ypZ71TweYtrwJLfXoTkTziuimN9GQ03rbrgbD-2q1XFJGB44QF1',
      },
      {
        question: 'На какой вопрос не может получить ответ Гамлет?',
        topic_id: 2,
        answer: 'быть или не быть',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/9660788/pub_6460ccd2cef3ab4417e569ff_6460cd292506b27279b30bfc/scale_1200',
      },
      {
        question: 'Назовите главную телебашню России',
        topic_id: 2,
        answer: 'останкино',
        img: 'https://tvtower.ru/upload/about.jpg',
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

