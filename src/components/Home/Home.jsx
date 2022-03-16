import React from "react";
import "../Home/Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <center>
          <div className="home_image"></div>
        </center>
        {/* <image autoPlay loop muted>
          <source src={"https://73online.ru/pic/upld_56805.jpeg"} /> */}
        {/* </image> */}
        <div className="text-wrapper">
          <h1 style={{ color: "#fff" }}>
            Ученик, <br />
            <span
              className="text-wrapper-span"
              style={{
                fontSize: "60px",
                fontWeight: "bold",
              }}
            >
              который учится без желания, —
            </span>
            <br />
            <span
              style={{
                fontSize: "80px",
                fontWeight: "bold",
              }}
            >
              это птица без крыльев
            </span>
          </h1>
        </div>
      </div>
      <div className="information">
        <div className="information_item">
          <h2>1</h2>
          <div className="information_item__text">
            <h2> Что такое Общереспубликанское тестирование?</h2>
            <p>
              Общереспубликанское тестирование (ОРТ) - обязательный экзамен для
              абитуриентов, поступающих в высшие учебные заведения. ОРТ
              проводится в Кыргызстане с 2002 года по указу президента страны.
              Результаты Общереспубликанского тестирования являются
              обязательными для зачисления на все формы обучения в вузы
              независимо от форм собственности. Не требуются результаты ОРТ при
              зачислении в вузы культуры и искусства и на специальности
              физической культуры и спорта.
            </p>
          </div>
        </div>

        <div className="information_item">
          <h2>2</h2>
          <div className="information_item__text">
            <h2> Когда пройдет Общереспубликанское тестирование?</h2>
            <p>
              Тестирование пройдет в два этапа: 17-18 мая и 20-21 мая. Для
              абитуриентов, не имеющих возможности пройти ОРТ в мае, 23-24 июня
              будет проведено "позднее" тестирование. 16, 19 мая и 22 июня - дни
              подготовки тестовых центров. В эти же дни на базе тестовых центров
              будет проводиться дополнительная регистрация для абитуриентов, не
              успевших зарегистрироваться предварительно. Всего по республике
              будет организовано 127 центров на базе общереспубликанских школ.
            </p>
          </div>
        </div>

        <div className="information_item">
          <h2>3</h2>
          <div className="information_item__text">
            <h2> Сколько стоит тест?</h2>
            <p>
              Стоимость одного теста, как и в прошлом году, составляет 260 сомов
              за каждый (за основной и отдельно за каждый предметный тест).
            </p>
          </div>
        </div>

        <div className="information_item">
          <h2>4</h2>
          <div className="information_item__text">
            <h2>Сколько баллов нужно набрать?</h2>
            <p>
              Пороговый балл поступления в вузы составляет 110 баллов за
              основной тест. Выпускникам общеобразовательных школ, подтвердившим
              получение аттестата о среднем общем образовании с отличием в
              Национальном центре тестирования при Министерстве образования КР и
              получившим по основному и предметным тестам баллы выше
              установленных пороговых баллов, к результатам каждого предметного
              теста будут прибавлять по 20 баллов.
            </p>
          </div>
        </div>

        <div className="information_item">
          <h2>5</h2>
          <div className="information_item__text">
            <h2>
              Какие категории абитуриентов зачисляются на грантовое обучение в
              вуз вне конкурса?
            </h2>
            <p>
              50 абитуриентов, показавших лучшие результаты в ОРТ; абитуриенты,
              занявшие в текущем году 1-2-е места в республиканской олимпиаде
              школьников или являющиеся призерами международных олимпиад, на
              специальности и направления, с которыми совпадает предмет
              олимпиады, при условии их участия в ОРТ; абитуриенты, занявшие в
              текущем году 3-е место в республиканской олимпиаде школьников на
              педагогические специальности, по которым предмет олимпиады
              является профилирующим, при условии их участия в ОРТ.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
