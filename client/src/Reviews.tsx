import React from 'react'

import './Reviews.css';


const Reviews = () => {

  return (<>
 
      <div className="reviews-list">
        <h2>Отзывы</h2>
        <blockquote className="review-item">
          <p className="description">
          
            Мотив к обучению у меня простой: папа грузин и я при этом не знающая ни слова на грузинском.
            Раньше
            этот
            вопрос меня совсем не тревожил, но два года назад, после поездки в Грузию, было принято
            решение:
            учить
            нужно. Найти преподавателя по грузинскому кажется непосильной задачей, но мне повезло
            встретить
            Параскеву.
            Помимо того, что методика ее мне пришлась по душе (а учила я до этого 4 разных языка), так и
            как с
            человеком
            заниматься крайне комфортно (сбегаю я от преподавателей очень часто).
            Не смотря на то, что я как раз как ученик совсем бестолкова(делаю дз скорее в виде
            исключения, когда
            Луна в
            Венере), Параскева терпеливо борется с моей ленью, мотивирует, ищет новые варианты заданий и
            всячески
            поддерживает.
          </p>
          <cite className="review-author">Александра</cite>
          <input type="checkbox" className='expend-button'/>
        </blockquote>

        <blockquote className="review-item">
          <p className="description">
            Начала заниматься с Параскевой около двух лет назад. И она тот человек, который порой не даёт
            мне
            сдаться
            и
            опустить руки)
            Потрясающий педагог, внимательный, спокойный. С современным нешаблонным подходом, всегда
            старается
            разнообразить, не идёт по одной схеме, а старается брать лучшее из каждого учебника.
            Немаловажную роль
            играет и мотивирует то, что грузинский не ее родной язык, и я всегда думаю - если Параскева
            смогла
            сама,
            значит и меня научит, значит это возможно, у меня получится 😄😄😄
          </p>
          <cite className="review-author">Елизавета</cite>
          <input type="checkbox" className='expend-button'/>
        </blockquote>

        <blockquote className="review-item">
          <p className="description">
            Изучение языка с Параскевой Викторовной начала с апреля. До начала занятий знала несколько
            букв. За 6 месяцев изучили почти весь учебник, словарный запас сейчас около 1100 слов. На
            данном этапе обучения могу рассказать о себе, своей семье, увлечениях и работе и поддержать
            диалог. За урок успеваем проверить домашнюю работу, изучить новую теорию и закрепить
            полученные знания на упражнениях. Процесс подачи материала Параскевой мне нравится, планирую
            и в дальнейшем продолжать с таким же успехом)
          </p>
          <cite className="review-author">Алина</cite>
          <input type="checkbox" className='expend-button'/>
        </blockquote>

        <blockquote className="review-item">
          <p className="description">
            Хочу выразить огромную благодарность моему учителю грузинского языка Параскеве Лебедевой!
            Параскева - это не просто учитель, это профессионал своего дела, который отдаёт все силы на
            то, чтобы ученик углубился в изучаемый им язык, понял и разобрался в нем, а не просто заучил
            дежурные фразы. Каждый урок проходит на одном дыхании: чтение, говорение, прослушивание
            аутентичных записей, письмо! К слову о чтении и письме, раньше я считала НЕРЕАЛЬНЫМ
            запомнить,а тем более писать (!) по-грузински! Но вот прошло 3-4 урока и я могу читать даже
            без подглядок на алфавит! А спустя еще пару уроков я уже могу уверенно писать текст 👍
            Подход преподавания у Параскевы особенный! И это даёт особенные результаты. Я сама преподаю
            иностранные языки, и я понимаю, о чем говорю. Спасибо вам, любимый учитель, за знания,
            которые вы вкладываете в меня и за любовь к грузинскому языку!
          </p>
          <cite className="review-author">Ия</cite>
          <input type="checkbox" className='expend-button'/>
        </blockquote>

        <blockquote className="review-item">
          <p className="description">
            Занималась с Параскевой почти год грузинским раз в неделю 1,5 часа.
            За этот период вышла на уровень того, что могу поддержать беседу на какие-то базовые темы,
            рассказать о себе и
            узнать собеседника, понимаю небольшие заметки в социальных сетях друзей на грузинском.
            Параскева использует разные подходы, не зацикливается на теории одного учебника, все время
            находил новые интересные материалы и источники для изучения. Постоянной составляющей
            занятий
            является аудирование, и по моему мнению, оно является одним из самых эффективных
            инструментов в изучении языков.
            С Параскевой приятно общаться, мы быстро нашли общий язык и занятия проходили в приятной
            атмосфере.
          </p>
          <cite className="review-author">Евгения</cite>
          <input type="checkbox" className='expend-button'/>
        </blockquote>

        <blockquote className="review-item">
          <p className="description">
            Занимаюсь с Параскевой грузинским языком 2 года. Начинала заниматься почти с нуля.
            Параскева понятно и доступно всё объясняет, лучше носителя языка, занимается по современным учебникам,
            использует собственные наработки для закрепления изученного материала и расширения лексики.
            Помимо учебников, использует аудио и видео материалы для разных уровней подготовки. Приятный
            в общении человек, ответственный педагог.
          </p>
          <cite className="review-author">Ольга</cite>
          <input type="checkbox" className='expend-button'/>
        </blockquote>
      </div>

   </>
  

  );
}

export default Reviews;
