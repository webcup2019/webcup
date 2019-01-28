<template>
  <div class="home-component five-years-wrapper">
    <!-- <div class="five-years-container">
      <div class="fiveyr">
        <img src="../../assets/5-years-devcon.png" alt>
      </div> -->

      <!-- <div class="tribute-text">
        <p>2019 marks the 5th edition of the Developers Conference.<br/>
          Since 2015 we are in compliance with our goals. The conference is a free of charge, community-driven,
          three-days IT tech event in Mauritius. It’s an event full of business opportunities for supporters 
          and professional networking among peers. Attendees can learn about latest software development 
          technologies, methodologies, cloud services and infrastructure.</p>
      </div>  -->

      <div class="faculty-preview">
        <div class="fac-name">
          <div class="fac-logo">
            <img src="" alt="">
          </div>
          <div class="fac-desc">
            <a href="#" class="btn-info">Pese Mwa</a>
          </div>
        </div>
        <div class="fac-name">
          <div class="fac-logo">
            <img src="" alt="">
          </div>
          <div class="fac-desc">
            <a href="#" class="btn-info">Pese Mwa</a>
          </div>
        </div>
        <div class="fac-name">
          <div class="fac-logo">
            <img src="" alt="">
          </div>
          <div class="fac-desc">
            <a href="#" class="btn-info">Pese Mwa</a>
          </div>
        </div>
        <div class="fac-name agri">
          <div class="fac-logo">
            <img src="" alt="">
          </div>
          <div class="fac-desc">
            <a href="#" class="btn-info">Pese Mwa</a>
          </div>
        </div>
        <div class="fac-name">
          <div class="fac-logo">
            <img src="" alt="">
          </div>
          <div class="fac-desc">
            <a href="#" class="btn-info">Pese Mwa</a>
          </div>
        </div>
        <div class="fac-name">
          <div class="fac-logo">
            <img src="" alt="">
          </div>
          <div class="fac-desc">
            <a href="#" class="btn-info">Pese Mwa</a>
          </div>
        </div>
        <div class="fac-name">
          <div class="fac-logo">
            <img src="" alt="">
          </div>
          <div class="fac-desc">
            <a href="#" class="btn-info">Pese Mwa</a>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.faculty-preview {
  width: 100%;
  display: grid;
  grid-template-areas: 
  "a b c"
  "d d d"
  "e f g";
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr; 

  .fac-name {
    width: 100%;
    background-color: red;
    height: 400px; 
    display: flex;
    flex-direction: column;

    .fac-logo {
      width: 100%;
      background-color: blueviolet;
      img {

      }
    }

    .fac-desc {
        width: 100%;
        // height: ;
      .btn-info {
        text-align: center;
        // margin: auto 0;
      }
    }
  } 
  .agri {
    grid-area: d;
  }
}
</style>

