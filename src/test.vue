<template>
  <div id="app">
    <header class="container-fluid main-header">
      <img class="logotype" src="src/assets/logo.png" alt="Логотип Московского политеха">
    </header>
    <form action="https://echo.htmlacademy.ru" method="post" class="container">
      <section class="row">
        <div class="col">
          <label>Фамилия</label>
          <input type="text" name="surname" placeholder="Фамилия">
        </div>
        <div class="col">
          <label>Имя</label>
          <input type="text" placeholder="Имя" name="name">
        </div>
        <div class="col">
          <label>Отчество</label>
          <input type="text" name="patronymic" placeholder="Отчество">
        </div>
        <div class="col">
          <p class="">Пол</p>
          <select name="sex">
            <option>Муж</option>
            <option>Жен</option>
          </select>
        </div>
        <!-- <div class="col">
          <div class="crop">
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
            <button @click="generateImage" type="button">Generate</button>
            <br>
          </div>
        </div> -->
      </section>
      <section class="table">
        <table>
          <tbody>
            <tr>
              <td>Учебное заведение</td>
              <td>Факультет</td>
              <td>Форма обучения</td>
            </tr>
            <tr v-for="(entry, index) in tableData">
              <td>
                <input type="text" name="institution" v-model="entry['institution']" placeholder="универ">
              </td>
               <td><input type="text" name="faculty" v-model="entry['faculty']" placeholder="Факультет"></td>
              <!-- <td><input type="text" name="form-study" value=""></td> -->
              <td>
                <select name="formStudy" v-model="entry['formStudy']">
                  <option selected>Дневная</option>
                  <option>Вечерняя</option>
                  <option>Заочная</option>
                </select>
              </td>
              <!-- <button type="button" @click="showData">Отправить</button> -->
            </tr>
          </tbody>
        </table>
        <button type="button" @click = "generateRow">Добавить еще</button>
        <button type="button" @click = "deleteRow">Удалить ряд</button>
      </section>
      <label>{{tableData}}</label>
    <button type="submit">Отправить</button>
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
      tableData: [
        {institution: '', faculty: '', formStudy: 'Дневная'}
      ]
    }
  },

  methods: {
    generateImage: function() {
    	let url = this.myCroppa.generateDataUrl()
      if (!url) {
      	alert('no image')
        return
      }
      this.imgUrl = url
    },
    generateRow: function () {
      this.tableData.push({ institution: '', faculty: '', formStudy: ''});
    },
    deleteRow: function (index) {
      this.tableData.splice(-1, 1);
    },
    showData: function () {
      console.log(this.tableData);
    }
  }
}
</script>

<style media="screen">
  .container {
    background-color: #7FC7FF;
    margin-top: 10px;
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

  .main-header {

  }

  .col {
    background-color: #FFBF00;
    outline: 3px solid red;
  }

  label {
    display: block;
    margin-bottom: 0;
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

.croppa-container {
   background-color: #E6E6E6;
   border: 2px solid grey;
   border-radius: 8px;
 }

 .croppa-container:hover {
   opacity: 1;
   background-color: #F0F0F0;
 }

 .icon-remove {
   top: -11.75px;
   right: -10.75px;
 }

 .none {
   visibility: hidden;
 }

</style>
