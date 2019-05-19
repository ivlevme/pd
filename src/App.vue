<template>
  <div class="page" id="app">
    <header class="container-fluid main-header">
      <img class="logotype" src="src/assets/logo.png" alt="Логотип Московского политеха">
    </header>
    <main>
      <form action="https://echo.htmlacademy.ru" method="post" class="container form">
        <!-- <img :src="this.imgUrl" alt="Вставка обрезанного фото"> -->
        <section class="main-information">
          <div class="row">
            <div class="col-12 col-md-8">
              <div class="row">
                <div class="col">
                  <input class="input" id="main-information__surname" type="text" v-model="formData.candidateSurname" name="main-information__surname"
                    placeholder="Иванов" required>
                  <div class="label-box">
                    <label class="label" for="main-information__surname">Фамилия</label>
                  </div>
                  <input class="input input-name" id="main-information__name" type="text" v-model="formData.candidateName" name="main-information__name"
                    placeholder="Иван" required>
                  <div class="label-box">
                    <label class="label" for="main-information__name">Имя</label>
                  </div>
                    <select class="sex" id="sex" name="sex" v-model="formData.candidateSex" required>
                      <option>Муж</option>
                      <option>Жен</option>
                    </select>
                    <div class="label-box">
                      <label class="label label-sex" for="sex">Пол</label>
                    </div>
                </div>
                <div class="col">
                  <input class="input input-name" id="main-information__patronymic" type="text" v-model="formData.candidatePatronymic"
                    name="main-information__patronymic" placeholder="Иванович" required>
                  <div class="label-box">
                    <label class="label" for="main-information__patronymic">Отчество</label>
                  </div>
                  <input class="birth-date" id="birth-date" type="date" v-model="formData.candidateBirthday" name="birth-date" min="1900-01-01"
                    max="2100-01-01" required>
                  <div class="label-box">
                    <label class="label label-birth-date" for="birth-date">Дата рождения</label>
                  </div>
                    <input class="input input-birth-place" type="text" v-model="formData.candidateBirthplace" name="birth-place"
                      placeholder="г. Москва, ул. Ленина, д. 12" required>
                    <div class="label-box">
                      <label class="label label-birth-place" for="birth-place">Место рождения</label>
                    </div>
                </div>
              </div>
              </div>
            <div class="col-12 col-md-4">
              <div class="crop">
                <croppa v-model="myCroppa"
                :width="150"
                :height="200"
                placeholder="Ваше фото"
                placeholder-color="#000"
                :placeholder-font-size="16"
                :zoom-speed="10"
                :show-remove-button="true"
                remove-button-color="red"
                :remove-button-size="25"
                :show-loading="true"
                :loading-size="50"
                :quality="1"
                :prevent-white-space="true">
              </croppa>
              </div>
            </div>
          </div>
        </section>
        <section class="education">
          <h2 class="education__description">Образование</h2>
          <table class="table table-responsive">
            <thead>
              <tr>
                <th>Учебное заведение</th>
                <th>Факультет</th>
                <th>Форма обучения</th>
                <th>Год поступления</th>
                <th>Год окончания или ухода</th>
                <th>Если не окончил, то с какого курса ушел</th>
                <th>Полученная спецальность</th>
                <th>№ диплома</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in tableDataEducation">
                <td>
                  <input class="input" id="institution" type="text" name="institution" v-model="entry['institution']" placeholder="Московский политех"
                    required>
                  <div class="label-box">
                    <label class="label" for="institution">Университет</label>
                  </div>
                </td>
                 <td>
                   <input class="input" id="faculty" type="text" name="faculty" v-model="entry['faculty']" placeholder="Информационные системы" required>
                   <div class="label-box">
                     <label class="label" for="faculty">Факультет</label>
                   </div>
                 </td>
                <td>
                  <select class="form-study" name="formStudy" v-model="entry['formStudy']">
                    <option selected>Дневная</option>
                    <option>Вечерняя</option>
                    <option>Заочная</option>
                  </select>
                </td>
                <td>
                  <input class="input" id="admission-year" type="number" min="1900" max="2099" step="1" name="admission-year"
                    v-model="entry['admissionYear']" placeholder="2018" required>
                  <div class="label-box">
                    <label class="label" for="admission-year">Год поступления</label>
                  </div>
                </td>
                <td>
                  <input class="input" type="number" min="1900" max="2099" step="1" name="graduation-year"
                    v-model="entry['graduationYear']" placeholder="2018" required>
                  <div class="label-box">
                    <label class="label" for="graduation-year">Год окончания</label>
                  </div>
                </td>
                <td>
                  <input class="input" id="graduation-course" type="number" min="1" max="7" step="1" name="graduation-course"
                    v-model="entry['graduationCourse']" placeholder="1">
                  <div class="label-box">
                    <label class="label" for="graduation-course">Курс</label>
                  </div>
                </td>
                <td>
                  <input class="input" id="specialty" type="text" name="specialty" placeholder="Программист"
                    v-model="entry['specialty']" required>
                  <div class="label-box">
                    <label class="label" for="specialty">Специальность</label>
                  </div>
                </td>
                <td>
                  <input class="input" id="diploma" type="text" name="diploma" v-mask="'###### #######'" placeholder="999999 9999999"
                    v-model="entry['diploma']"  required>
                  <div class="label-box">
                    <label class="label" for="diploma">№ диплома</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" type="button" @click = "generateRow(tableDataEducation)">Добавить еще</button>
          <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataEducation)">Удалить ряд</button>
        </section>
        <section class="skills">
          <div class="row">
            <div class="col">
              <input class="input" id="languages" type="text" v-model="formData.candidateLanguages" name="languages" placeholder="Английский, Испанский">
              <div class="label-box">
                <label class="label" for="languages">Иностранные языки</label>
              </div>
            </div>
            <div class="col">
              <input class="input" id="science-degree" type="text" v-model="formData.candidateAcademicdegree" name="science-degree"
                placeholder="Доктор наук">
              <div class="label-box">
                <label class="label" for="science-degree">Ученая степень</label>
              </div>
            </div>
            <div class="col">
              <input class="input" id="scientific-work" type="text" v-model="formData.candidateScientificwork" name="scientific-work"
                placeholder="Научные работы">
              <div class="label-box">
                <label class="label" for="scientific-work">Научные труды</label>
              </div>
            </div>
        </div>
        </section>
        <section class="work-activity">
          <h2>Выполняемая работа с начала трудовой деятельности</h2>
          <p class="work-activity__description">Включая учебу в высших и средних специальных учебных заведениях, военную службу и работу по совместительству</p>
          <table class="table work-activity__table table-responsive">
            <thead>
              <tr>
                <th class="no-border" colspan="2">Месяц и год</th>
                <th rowspan="2">Должность с указанием учреждения, организации, предприятия, а также министерства (ведомства)</th>
                <th rowspan="2">Местонахождение учреждения, организации, предприятия</th>
              </tr>
              <tr>
                <th>Поступления</th>
                <th>Ухода</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in tableDataWork">
                <td>
                  <input class="input" type="date" name="work-activity__entry" v-model="entry['entry']" min="1900-01-01" max="2100-01-01"
                    placeholder="Поступления">
                </td>
                <td>
                  <input class="input" type="date" name="work-activity__exit" v-model="entry['exit']" min="1900-01-01" max="2100-01-01"
                   placeholder="Уход">
                </td>
                <td>
                  <input class="input" id="work-activity__position" type="text" name="work-activity__position" v-model="entry['position']"
                    placeholder="Менеджер" required>
                  <div class="label-box">
                    <label class="label" for="work-activity__position">Должность</label>
                  </div>
                </td>
                <td>
                  <input class="input" id="work-activity__location" type="text" name="work-activity__location" v-model="entry['location']"
                    placeholder="г. Москва, ул. Ленина, д. 12" required>
                  <div class="label-box">
                    <label class="label" for="work-activity__location">Местонахождение</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" type="button" @click = "generateRow(tableDataWork)">Добавить еще</button>
          <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataWork)">Удалить ряд</button>
          <p class="work-activity__note"> <span class="note-star">*</span> При заполнении данного пункта учреждения,
            организации и предприятия необходимо именовать так, как они назывались в свое время, военную службу записывать с указанием
            должности.
          </p>
        </section>
        <section class="stay-abroad">
          <h2>Пребывание за границей</h2>
          <table class="table stay-abroad__table table-responsive">
            <thead>
              <tr>
                <th colspan="2">Месяц и год</th>
                <th rowspan="2">В какой старне</th>
                <th rowspan="2">Цель пребывания за границей</th>
              </tr>
              <tr>
                <th>С какого времени</th>
                <th>По какое время</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in tableDataAbroad">
                <td>
                  <input class="input" type="month" name="work-activity__since-time" v-model="entry['sinceTime']" min="1900-01" max="2100-01"
                    placeholder="С какого времени">
                </td>
                <td>
                  <input class="input" type="month" name="work-activity__at-time" v-model="entry['atTime']" min="1900-01" max="2100-01"
                    placeholder="По какое время">
                </td>
                <td>
                  <input class="input" id="work-activity__country" type="text" name="work-activity__country" v-model="entry['country']"
                   placeholder="Россия" required>
                  <div class="label-box">
                    <label class="label" for="work-activity__country">Страна</label>
                  </div>
                </td>
                <td>
                  <input class="input" id="work-activity__goal" type="text" name="work-activity__goal" v-model="entry['goal']"
                   placeholder="работа, служебная командировка, туризм" required>
                  <div class="label-box">
                    <label class="label" for="work-activity__goal">Цель</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" type="button" @click = "generateRow(tableDataAbroad)">Добавить еще</button>
          <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataAbroad)">Удалить ряд</button>
        </section>
        <section class="government-award">
          <h2>Правительственные награды</h2>
          <table class="table government-award__table table-responsive">
            <thead>
              <tr>
                <th>Когда награждены</th>
                <th>Чем награждены</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entry, index) in tableDataAward">
                <td>
                  <input class="input" type="date" name="government-award__data"  v-model="entry['data']" min="1900-01-01" max="2100-01-01"
                    placeholder="Дата награднения">
                </td>
                <td>
                  <input class="input" id="government-award__reward" type="text" name="government-award__reward"
                    v-model="entry['reward']" placeholder="Медаль, Почетная грамота">
                  <div class="label-box">
                    <label class="label" for="government-award__reward">Награда</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" type="button" @click = "generateRow(tableDataAward)">Добавить еще</button>
          <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataAward)">Удалить ряд</button>
        </section>
        <section class="military-duty" v-if="formData.candidateSex=='Муж'">
          <h2>Воинская обязанность</h2>
          <div class="row">
            <div class="col">
              <input class="input" id="military-duty__rank" type="text" v-model="formData.candidateMilitaryRank" name="military-duty__rank"
                placeholder="Cержант" required>
              <div class="label-box">
                <label class="label" for="military-duty__rank">Воинское звание</label>
              </div>
            </div>
            <div class="col">
              <input class="input" id="military-duty__composition" type="text" v-model="formData.candidateMilitaryComposition"
                name="military-duty__composition" placeholder="Рота" required>
              <div class="label-box">
                <label class="label" for="military-duty__composition">Состав</label>
              </div>
            </div>
            <div class="col">
              <input class="input" id="military-duty__branch" type="text" v-model="formData.candidateMilitaryBranch" name="military-duty__branch"
                placeholder="Мотострелковые войска" required>
              <div class="label-box">
                <label class="label" for="military-duty__branch">Род войск</label>
              </div>
            </div>
          </div>
        </section>
        <section class="family-status">
          <h2>Семейное положение</h2>
          <p class="family-status__description">Перечислить членов семьи с указанием года рождения и указанием контактного телефона
            <span class="note-star">*</span></p>
          <table class="table table-responsive">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Отчество</th>
                <th>Дата рождения</th>
                <th>Контактный телефон</th>
              </tr>
              </thead>
            <tbody>
              <tr v-for="(entry, index) in tableDataFamily">
                <td>
                  <input class="input" id="family-status__name" type="text" name="family-status__name"  v-model="entry['name']" placeholder="Иван"
                    required>
                  <div class="label-box">
                    <label class="label" for="family-status__name">Имя</label>
                  </div>
                </td>
                <td>
                  <input class="input" id="family-status__surname" type="text" name="family-status__surname"  v-model="entry['surname']"
                    placeholder="Иванов" required>
                  <div class="label-box">
                    <label class="label" for="family-status__surname">Фамилия</label>
                  </div>
                </td>
                <td>
                  <input class="input" id="family-status__patronymic" type="text" name="family-status__patronymic"
                    v-model="entry['patronymic']" placeholder="Иванович" required>
                  <div class="label-box">
                    <label class="label" for="family-status__patronymic">Отчество</label>
                  </div>
                </td>
                <td>
                  <label for="family-status__birthday">Дата рождения</label>
                  <input class="input" id="family-status__birthday" type="date" name="family-status__birthday"
                    v-model="entry['birthday']" min="1900-01-01" max="2100-01-01" placeholder="Дата рождения">
                </td>
                <td>
                  <input class="input" id="family-status__telephone" type="tel" name="family-status__telephone"
                    v-model="entry['telephone']" v-mask="'+7 (###)-###-##-##'" placeholder="+7 (999)-999-99-99" required>
                    <div class="label-box">
                      <label class="label" for="family-status__telephone">Контактный телефон</label>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" type="button" @click = "generateRow(tableDataFamily)">Добавить еще</button>
          <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataFamily)">Удалить ряд</button>
          <p><span class="note-star">*</span> Обязательно к заполнению</p>
        </section>
        <section class="contact-information">
          <div class="row">
            <div class="col">
              <input class="input" id="contact-information__address" type="text" v-model="formData.candidateHomeaddress"
                name="contact-information__address" placeholder="г. Москва, ул. Ленина, д. 12" required>
              <div class="label-box">
                <label class="label" for="contact-information__address">Домашний адрес</label>
              </div>
            </div>
            <div class="col">
              <input class="input" id="contact-information__telephone" type="tel" v-model="formData.candidatePhone"
                name="contact-information__telephone" v-mask="'+7 (###)-###-##-##'" placeholder="+7 (999)-999-99-99" required>
                <div class="label-box">
                  <label class="label" for="contact-information__telephone">Контактный телефон</label>
                </div>
            </div>
          </div>
        </section>
        <section class="passport-data">
          <h2>Паспортные данные</h2>
          <div class="row">
            <div class="col">
              <input class="input" id="passport-data__passport-series" type="text" v-model="formData.candidatePassportSeries"
                name="passport-data__passport-series" v-mask="'####'" placeholder="1111" required>
                <div class="label-box">
                  <label class="label" for="passport-data__passport-series">Серия паспорта</label>
                </div>
            </div>
            <div class="col">
              <input class="input" id="passport-data__passport-number" type="text" v-model="formData.candidatePassportNumber"
                name="passport-data__passport-number" v-mask="'######'" placeholder="111111" required>
                <div class="label-box">
                  <label class="label" for="passport-data__passport-number">Номер паспорта</label>
                </div>
            </div>
            <div class="col">
              <input class="input" id="passport-data__passport-issued" type="text" v-model="formData.candidatePassportGiven"
                name="passport-data__passport-issued" placeholder="Отделом УФМС России по " required>
                <div class="label-box">
                  <label class="label" for="passport-data__passport-issued">Кем выдан</label>
                </div>
            </div>
          </div>
        </section>
        <section class="additional-docs">
          <h2>Дополнительные документы</h2>
          <div class="row">
            <div class="col">
              <input class="input" id="additional-docs__inn" type="text" v-model="formData.candidateInn"
                name="additional-docs__inn" v-mask="'############'" placeholder="111111111111" required>
                <div class="label-box">
                  <label class="label" for="additional-docs__inn">ИНН</label>
                </div>
            </div>
            <div class="col">
              <input class="input" id="additional-docs__PFR" type="text" v-model="formData.candidatePfr"
                name="additional-docs__PFR" v-mask="'###########'" placeholder="11111111111" required>
                <div class="label-box">
                  <label class="label" for="additional-docs__PFR">ПФР</label>
                </div>
            </div>
          </div>
        </section>
        <section class="autobiography">
          <h2>Автобиография</h2>
          <p>Составляется в произвольной форме собственноручно, без сокращения слов, с обязательным освещением следующих вопросов:</p>
          <ol>
            <li>Дата и место рождения.</li>
            <li>В каких учебных заведениях и когда учились, учитесь.</li>
            <li>Трудовая деятельность: когда, где и в качестве кого работали. Полное наименование предприятий и причина перехода.</li>
            <li>Служили ли в Вооруженных Силах (когда, где и в качестве кого); воинское звание,в/часть, в/округ.</li>
            <li>Какую общественную работу выполняли (выполняете)</li>
            <li>Семейное положение. Краткие сведения о членах своей семьи, родителях, братьях и сестрах (ф.и.о., год рождения,
              чем занимаются и где проживают)</li>
          </ol>
          <textarea class="textarea autobiography__textarea" name="autobiography" v-model="formData.candidateBiography" placeholder="Пишите здесь">
          </textarea>
        </section>
      <button type="button" @click="showData()"> Все данные в консоль</button>
      <button class="btn btn-success btn-form" type="submit" @click="showData()">Отправить</button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',

  data: function () {
    return {
      myCroppa: null,
      imgUrl: '',
      tableDataEducation: [
        {institution: '', faculty: '', formStudy: 'Дневная', admissionYear: '', graduationYear: '', graduationCourse: '', specialty: '', diploma: ''}
      ],
      tableDataWork: [
        {entry: '', exit: '', position: '', location: ''}
      ],
      tableDataAbroad: [
        {sinceTime: '', atTime: '', country: '',  goal: ''}
      ],
      tableDataAward: [
        {data: '', reward: ''}
      ],
      tableDataFamily: [
        {name: '', surname: '', patronymic: '', birthday: '', telephone: ''}
      ],
      cropStatus: '',
      cropFlag: false,
      // sex: 'Муж',
      formData: {
        candidateSurname: '',
        candidateName: '',
        candidatePatronymic: '',
        candidateSex: 'Муж',
        candidateBirthday: null,
        candidateBirthplace: '',
        candidateLanguages: '',
        candidateAcademicdegree: '',
        candidateScientificwork: '',
        candidateMilitaryRank: '',
        candidateMilitaryComposition: '',
        candidateMilitaryBranch: '',
        candidateHomeaddress: '',
        candidatePhone:'',
        candidatePassportSeries: '',
        candidatePassportNumber: '',
        candidatePassportGiven: '',
        candidateInn: '',
        candidatePfr: '',
        candidateBiography:''
      }
    }
  },

  methods: {
    generateImage: function() {
    	let url = this.myCroppa.generateDataUrl()
      if (!url) {
      	alert('Выберет фото!')
        return
      }
      this.imgUrl = url
      // console.log(this.imgUrl);
    },

    generateRow: function (massiv) {
      switch(massiv) {
        case this.tableDataEducation:
          this.tableDataEducation.push(
            {institution: '', faculty: '', formStudy: 'Дневная', admissionYear: '', graduationYear: '', graduationCourse: '', specialty: '', diploma: ''}
          );
          break

        case this.tableDataWork:
          this.tableDataWork.push({entry: '', exit: '', position: '', location: ''});
          break

        case this.tableDataAbroad:
          this.tableDataAbroad.push({sinceTime: '', atTime: '', country: '',  goal: ''});
          break;

        case this.tableDataAward:
          this.tableDataAward.push({data: '', reward: ''});
          break;

        case this.tableDataFamily:
          this.tableDataFamily.push({name: '', surname: '', patronymic: '', birthday: '', telephone: ''});
          break;
      }
    },

    deleteRow: function (massiv) {
      massiv.splice(-1, 1);
    },

    showData: function () {
      console.log(this.formData);
      console.log(this.tableDataEducation);
      console.log(this.tableDataWork);
      console.log(this.tableDataAbroad);
      console.log(this.tableDataAward);
      console.log(this.tableDataFamily);
      this.generateImage(); // Обезает фото
    }
  }
}
</script>

<style media="screen">

  body {
    background-color: #F8FAFC;
  }

  label {
    display: block;
    margin-bottom: 0;
  }

  section {
    margin-top: 40px;
  }

  select {
   padding: 5px;
   font-size: 16px;
   border: 1px solid #ccc;
   height: 34px;
  }

  p {
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }


  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .page {
    min-width: 320px;
  }

  .main-header {
    text-align: center;

    min-height: 80px;
    padding-bottom: 20px;
  }

  .logotype {
    width: 300px;
    height: auto;
  }

  .input {
    width: 100%;
    min-width: 150px;
    padding-left: 10px;
    padding-right: 10px;

    margin-top: 20px;
  }

  .btn-form {
    display: block;

    margin: 0 auto;
    margin-top: 20px;
  }

  .label-birth-place {
    white-space: nowrap;
    border: none;
  }

  .input-birth-place {
    min-width: 300px;
  }

  .col {
    padding-bottom: 10px;
  }

  .page {
    margin: 0 auto;
    display: block;
  }

  .table {
    border-radius: 10px;
  }

 .table {
    text-align: center;

    border-collapse: collapse;
    border: 1px solid #ced4da;
    border-radius: 10px;
  }

  .table thead th {
    vertical-align: middle;
  }

  .table tr {
    border: none;
  }

  .table thead th {
    border-top: none;
    border-bottom: none;
  }

  .table select {
    margin-top: 25px;
  }

  .government-award__table td:last-child,
  .stay-abroad__table td:last-child {
    width: 100%;
  }


  .success {
    color: #28a745;
  }

  .fail {
    color: #dc3545;
  }

  .education__description {
    text-align: center;
  }

  .textarea {
    width: 100%;
    min-width: 200px;
    resize: none;
  }

  .autobiography__textarea {
    min-height: 200px;
    resize: vertical;
    padding-left: 10px;
    padding-top: 10px;
  }

  .skills {
    margin-top: 20px;
  }

  .sex {
    width: 100%;
  }

  .container {
    margin-top: 10px;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    background-color: #fff;
    box-shadow: 0 20px 20px 20px rgba(0, 0, 0, 0.04);
  }

  /* Crop */

  .crop {
    text-align: center;
  }

  .btn-crop {
    display: block;
    margin: 0 auto;
  }

  .status-crop {
    display: inline-block;
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  .croppa-container {
    border: 2px solid grey;
    border-radius: 8px;
    margin-top: 10px;

    background-color: #E6E6E6;
 }

 .croppa-container:hover{
   opacity: 1;
   background-color: #F0F0F0;
 }

 .icon-remove {
   top: -11.75px;
   right: -10.75px;
 }

   /* Оформление */

  .label-box {
    position: relative;
  }

  .label-box::before,
  .label-box::after {
    position: absolute;
    bottom: 1px;
    width: 0;
    height: 2px;
    background-color: #757575;
    content: "";
    transition-duration: 0.2s;
    transition-property: width;
  }

  .label-box::before {
    left: 50%;
  }

  .label-box::after {
    right: 50%;
  }

  input:focus + .label-box::before,
  input:focus + .label-box::after {
    width: 50%;
  }

  input {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #757575;
    font-size: 18px;

    margin-top: 20px;
    padding-bottom: 10px;

    outline: none;
  }

  label {
    position: absolute;
    top: -38px;
    left: 10px;
    color: #000;
    font-size: 14px;
    transition-duration: 0.2s;
    pointer-events: none;
  }

  input + .label-box label {
    transform: translateY(-22px);
  }

  .birth-date {
    padding-left: 10px;
  }

  .sex {
    min-height: 39px;
    margin-top: 20px;
    border: none;
    border-bottom: 1px solid #757575;
  }

  .label-sex {
    font-size: 14px;
    transform: translateY(-20px);
  }

  .label-birth-date {
    font-size: 14px;
    transform: translateY(-22px);
  }

  .input-birth-place {
    margin-top: 20px;
  }

  .form-study {
    margin-top: 15px;
  }

  .work-activity__description {
    text-align: center;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .work-activity__note {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .note-star {
    font-size: 30px;
    color: #dc3545;
  }


  .family-status__description {
    text-align: center;
    margin-bottom: 15px;
  }

</style>
