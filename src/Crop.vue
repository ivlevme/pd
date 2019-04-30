<template>
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
    <button @click="generateImage">Generate</button>
    <br>
    <img class="output" :src="imgUrl">
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      myCroppa: null,
      imgUrl: '',
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
    }
  }
}
</script>

<style media="screen">
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
</style>
