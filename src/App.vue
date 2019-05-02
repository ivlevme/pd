<template>
  <div class="page" id="app">
    <header class="container-fluid main-header">
      <img class="logotype" src="src/assets/logo.png" alt="Логотип Московского политеха">
    </header>
    <form action="https://echo.htmlacademy.ru" method="post" class="container form">
      <section class="main-information">
        <div class="row">
          <div class=" col col-12 col-sm-4">
            <label class="label" for="surname">Фамилия</label>
            <input class="input" id="surname" type="text" name="surname" placeholder="Фамилия">
          </div>
          <div class=" col col-12 col-sm-4">
            <label class="label" for="name">Имя</label>
            <input class="input" id="name" type="text" placeholder="Имя" name="name">
          </div>
          <div class=" col col-12 col-sm-4">
            <label class="label" for="patronymic">Отчество</label>
            <input class="input" id="patronymic" type="text" name="patronymic" placeholder="Отчество">
          </div>
        </div>
          <div class="row">
            <div class="col">
              <label class="label" for="sex">Пол</label>
              <select class="sex" id="sex" name="sex">
                <option>Муж</option>
                <option>Жен</option>
              </select>
            </div>
            <div class="col">
              <label class="label" for="birth-date">Дата рождения</label>
              <input class="input" id="birth-date" type="date" name="birth-date">
            </div>
            <div class="col">
              <label class="label" for="nationality">Национальность</label>
              <input class="input" id="nationality" type="text" name="nationality">
            </div>
          </div>
          <div class="row">
            <div class=" col col-12 col-sm-8">
              <label class="label label-birth-place" for="birth-place">Место рождения</label>
              <input class="input input-birth-place" type="text" name="birth-place" placeholder="село, деревня, город, район, область">
            </div>
            <div class="col col-12 col-sm-4 crop">
              <croppa v-model="myCroppa"
              :width="150"
              :height="150"
              placeholder="Ваше фото"
              placeholder-color="#000"
              :placeholder-font-size="16"
              :show-remove-button="true"
              remove-button-color="red"
              :remove-button-size="25"
              :show-loading="true"
              :loading-size="50"
              :quality="1"
              :prevent-white-space="true">
            </croppa>
            <button class="btn btn-default btn-crop" type="button" @click="generateImage">Обрезать</button>
            <p class="status-crop" v-bind:class="{ success: cropFlag, fail: !cropFlag }">{{cropStatus}}</p>
          </div>
        </div>
      </section>
      <section class="education">
        <h2 class="education__description">Образование</h2>
        <table class="table table-responsive">
          <tbody class="">
            <tr>
              <td>Учебное заведение</td>
              <td>Факультет</td>
              <td>Форма обучения</td>
              <td>Год поступления</td>
              <td>Год окончания или ухода</td>
              <td>Если не окончил, то с какого курса ушел</td>
              <td>Полученная спецальность - указать № диплома</td>
            </tr>
            <tr v-for="(entry, index) in tableDataEducation">
              <td>
                <input class="input" type="text" name="institution" v-model="entry['institution']" placeholder="универ">
              </td>
               <td><input class="input" type="text" name="faculty" v-model="entry['faculty']" placeholder="Факультет"></td>
              <td>
                <select name="formStudy" v-model="entry['formStudy']">
                  <option selected>Дневная</option>
                  <option>Вечерняя</option>
                  <option>Заочная</option>
                </select>
              </td>
              <td>
                <input class="input" type="number" name="admission-year" placeholder="Год поступления">
              </td>
              <td>
                <input class="input" type="number" name="graduation-year" placeholder="Год окончания или ухода">
              </td>
              <td>
                <input class="input" type="number" name="graduation-course" placeholder="Курс">
              </td>
              <td>
                <input class="input" type="number" name="specialty" placeholder="№ Диплома или удовстоверения">
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
            <label for="languages">Владение иностранными языками</label>
            <input class="input" id="languages" type="text" name="languages" placeholder="Иностарнные языки">
          </div>
          <div class="col">
            <label for="science-degree">Ученая степень, ученое звание</label>
            <input class="input" id="science-degree" type="text" name="science-degree" placeholder="Ученая степень">
          </div>
          <div class="col">
            <label for="scientific-work">Научные труды и изобретения</label>
            <textarea class="textarea" id="scientific-work" name="scientific-work" placeholder="Научные труды и изобретения"></textarea>
          </div>
      </div>
      </section>
      <section class="work-activity">
        <p class="work-activity__description">Выполняемая работа с начала трудовой деятельности (включая учебу в высших и средних
          специальных учебных заведениях, военную службу и работу по совместительству)</p>
        <table class="table work-activity__table table-responsive">
          <tbody>
            <tr>
              <td colspan="2">Месяц и год</td>
              <td rowspan="2">Должность с указанием учреждения, организации, предприятия, а также министерства (ведомства)</td>
              <td rowspan="2">Местонахождение учреждения, организации, предприятия</td>
            </tr>
            <tr>
              <td>Поступления</td>
              <td>Ухода</td>
            </tr>
            <tr v-for="(entry, index) in tableDataWork">
              <td>
                <input class="input" type="date" name="work-activity__entry" v-model="entry['entry']" placeholder="Поступления">
              </td>
              <td>
                <input class="input" type="date" name="work-activity__exit" v-model="entry['exit']" placeholder="Уход">
              </td>
              <td>
                <input class="input" type="text" name="work-activity__position" v-model="entry['position']" placeholder="Должность">
              </td>
              <td>
                <input class="input" type="text" name="work-activity__location" v-model="entry['location']"
                  placeholder="Местонахождение предприятия">
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" type="button" @click = "generateRow(tableDataWork)">Добавить еще</button>
        <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataWork)">Удалить ряд</button>
        <p class="work-activity__note"> <span class="work-activity__note-star">*</span> При заполнении данного пункта учреждения,
          организации и предприятия необходимо именовать так, как они назывались в свое время, военную службу записывать с указанием
          должности.
        </p>
      </section>
      <section class="stay-abroad">
        <h2>Пребывание за границей</h2>
        <table class="table stay-abroad__table table-responsive">
          <tbody>
            <tr>
              <td colspan="2">Месяц и год</td>
              <td rowspan="2">В какой старне</td>
              <td rowspan="2">Цель пребывания за границей (работа, служебная командировка, туризм)</td>
            </tr>
            <tr>
              <td>С какого времени</td>
              <td>По какое время</td>
            </tr>
            <tr v-for="(entry, index) in tableDataAbroad">
              <td>
                <input class="input" type="date" name="work-activity__since-time" v-model="entry['sinceTime']"
                  placeholder="С какого времени">
              </td>
              <td>
                <input class="input" type="date" name="work-activity__at-time" v-model="entry['atTime']" placeholder="По какое время">
              </td>
              <td>
                <input class="input" type="text" name="work-activity__country" v-model="entry['country']" placeholder="В какой стране">
              </td>
              <td>
                <input class="input" type="text" name="work-activity__goal" v-model="entry['goal']"
                  placeholder="Цель прибытия за границей">
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" type="button" @click = "generateRow(tableDataAbroad)">Добавить еще</button>
        <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataAbroad)">Удалить ряд</button>
      </section>
      <section class="government-award">
        <h2>Правительственные награды</h2>
        <table class="table table-responsive">
          <tbody>
            <tr>
              <td>Когда награждены</td>
              <td>Чем награждены</td>
            </tr>
            <tr v-for="(entry, index) in tableDataAward">
              <td>
                <input class="input" type="date" name="government-award__data"  v-model="entry['data']" placeholder="Дата награднения">
              </td>
              <td>
                <input class="input" type="text" name="government-award__reward"  v-model="entry['reward']" placeholder="Чем награждены">
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" type="button" @click = "generateRow(tableDataAward)">Добавить еще</button>
        <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataAward)">Удалить ряд</button>
      </section>
      <section class="military-duty">
        <h2>Воинская обязанность</h2>
        <div class="row">
          <div class="col">
            <label for="military-duty__rank">Воинское звание</label>
            <input class="input" id="military-duty__rank" type="text" name="military-duty__rank" placeholder="Воинское звание">
          </div>
          <div class="col">
            <label for="military-duty__composition">Состав</label>
            <input class="input" id="military-duty__composition" type="text" name="military-duty__composition"
              placeholder="командный, политический, административный, технический">
          </div>
          <div class="col">
            <label for="military-duty__branch">Состав</label>
            <input class="input" id="military-duty__branch" type="text" name="military-duty__branch" placeholder="Род войск">
          </div>
        </div>
      </section>
      <section class="family-status">
        <h2>Семейное положение</h2>
        <p>Семейное положение в момент заполнения личного листка (перечислить членов семьи с указанием года рождения и указанием контактного телефона; обязательно к заполнению)</p>
        <table class="table table-responsive">
          <tbody>
            <tr>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Дата рождения</td>
              <td>Контактный телефон</td>
            </tr>
            <tr v-for="(entry, index) in tableDataFamily">
              <td>
                <label for="family-status__name">Имя</label>
                <input class="input" id="family-status__name" type="text" name="family-status__name"  v-model="entry['name']"
                  placeholder="Имя">
              </td>
              <td>
                <label for="family-status__surname">Фамилия</label>
                <input class="input" id="family-status__surname" type="text" name="family-status__surname"  v-model="entry['surname']"
                  placeholder="Фамилия">
              </td>
              <td>
                <label for="family-status__patronymic">Отчество</label>
                <input class="input" id="family-status__patronymic" type="text" name="family-status__patronymic"
                  v-model="entry['patronymic']" placeholder="Отчество">
              </td>
              <td>
                <label for="family-status__birthday">Дата рождения</label>
                <input class="input" id="family-status__birthday" type="date" name="family-status__birthday"
                  v-model="entry['birthday']" placeholder="Дата рождения">
              </td>
              <td>
                <label for="family-status__telephone">Контактный телефон</label>
                <input class="input" id="family-status__telephone" type="tel" name="family-status__telephone"
                  v-model="entry['telephone']" placeholder="Контактный телефон">
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" type="button" @click = "generateRow(tableDataFamily)">Добавить еще</button>
        <button class="btn btn-danger" type="button" @click = "deleteRow(tableDataFamily)">Удалить ряд</button>
      </section>
      <section class="contact-information">
        <div class="row">
          <div class="col">
            <label for="contact-information__address">Домашний адрес</label>
            <input class="input" id="contact-information__address" type="text"
              name="contact-information__address" placeholder="Домашний адрес">
          </div>
          <div class="col">
            <label for="contact-information__telephone">Контактный телефон</label>
            <input class="input" id="contact-information__telephone" type="tel"
              name="contact-information__telephone" placeholder="Контактный телефон">
          </div>
        </div>
      </section>
      <section class="passport-data">
        <h2>Паспортные данные</h2>
        <div class="row">
          <div class="col">
            <label for="passport-data__passport-series">Серия паспорта</label>
            <input class="input" id="passport-data__passport-series" type="text"
              name="passport-data__passport-series" placeholder="Серия паспорта">
          </div>
          <div class="col">
            <label for="passport-data__passport-number">Номер паспорта</label>
            <input class="input" id="passport-data__passport-number" type="text"
              name="passport-data__passport-number" placeholder="Номер паспорта">
          </div>
          <div class="col">
            <label for="passport-data__passport-issued">Выдан</label>
            <input class="input" id="passport-data__passport-issued" type="text"
              name="passport-data__passport-issued" placeholder="Кем выдан">
          </div>
        </div>
      </section>
      <section class="additional-docs">
        <h2>Дополнительные документы</h2>
        <div class="row">
          <div class="col">
            <label for="additional-docs__inn">ИНН</label>
            <input class="input" id="additional-docs__inn" type="text"
              name="additional-docs__inn" placeholder="ИНН">
          </div>
          <div class="col">
            <label for="additional-docs__PFR">ПФР</label>
            <input class="input" id="additional-docs__PFR" type="text"
              name="additional-docs__PFR" placeholder="ПФР">
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
        <textarea class="textarea autobiography__textarea" name="autobiography" placeholder="Пишите здесь"></textarea>
      </section>
    <button class="btn btn-success btn-form" type="submit">Отправить</button>
  </form>
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
        {institution: '', faculty: '', formStudy: 'Дневная', admissionYear: '', graduationYear: '', graduationCourse: '', specialty: ''}
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
      cropFlag: false
    }
  },

  methods: {
    generateImage: function() {
    	let url = this.myCroppa.generateDataUrl()
      if (!url) {
      	this.cropStatus = 'Выберете фото!'
        this.cropFlag = false;
        return
      }
      this.cropStatus = 'Успешно'
      this.cropFlag = true;
      this.imgUrl = url
    },

    generateRow: function (massiv) {
      switch(massiv) {
        case this.tableDataEducation:
          this.tableDataEducation.push({ institution: '', faculty: '', formStudy: ''});
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
      console.log(this.tableDataEducation);
    }
  }
}
</script>

<style media="screen">

.page {
  min-width: 320px;
}

  .main-header {
    text-align: center;

    min-height: 80px;
    padding-bottom: 20px;
    border-bottom:  2px solid #ededed;
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
    border-collapse: collapse;
  }

  .table tr {
    border: 1px solid black;
  }

  .table td {
    border: 1px solid black;
  }
/*
  .table td {
    border-top: none;
  } */

  .success {
    background-color: #28a745;
  }

  .fail {
    color: #fff;
    background-color: #dc3545;
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
  }

  .skills {
    margin-top: 20px;
  }

  .sex {
    width: 100%;
  }

  /* Временно */

    .container {
      /* background-color: #7FC7FF; */
      margin-top: 10px;
    }

    .col {
      /* background-color: #FFBF00; */
      /* outline: 3px solid red; */
    }

    label {
      display: block;
      margin-bottom: 0;
    }

    section {
      margin-top: 20px;
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

  /* Crop */

  .crop {
    text-align: center;
  }

  .btn-crop {
    display: block;
    margin: 0 auto;
  }

  .croppa-container {
     border: 2px solid grey;
     border-radius: 8px;
     margin-top: 10px;

     background-color: #E6E6E6;
   }

   .croppa-container:hover {
     opacity: 1;
     background-color: #F0F0F0;
   }

   .icon-remove {
     top: -11.75px;
     right: -10.75px;
   }

</style>
