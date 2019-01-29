<template>
  <div class="home-component dept-list">  
      <h2 class="mega-rainbow">Department</h2>
    
      <div class="dept-list-top dept-wrapper">
        <div class="dept-sec-a">
          <h2>Section A</h2>
        </div> 
        <div class="dept-list-a">
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
        </div>
      </div>
      <div class="dept-list-bot dept-wrapper">
        <div class="dept-sec-b">
          <h2>Section B</h2>
        </div> 
        <div class="dept-list-b">
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
          <div class="dept-item">
            <!-- met image hover -->

            
            <!-- met image hover ici -->
          </div>
        </div>
      </div>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>  

.dept-list {
  width: 100%;
  // background-color: red;  
  height: 100vh;

  .dept-wrapper {
    display: grid;
    width: 100%;
    grid-gap: 40px;
    padding: 75px 0;
  }
  .dept-list-top {
    background-color: white;
    grid-template-areas: "desc liste";
    grid-template-columns: 0.5fr 0.7fr; 
    grid-template-rows: 1fr;

    .dept-sec-a {
      grid-area: desc;
      margin: auto;
      h2 { color: black;}
    }
    .dept-list-a {
      grid-area: liste;
      display: grid;
      grid-template-areas: "a b c d";
      grid-template-rows: 1fr;
      // grid-gap: 20px;
      
      .dept-item {
        width: 170px;
        height: 200px;
        background-color: red;
        
        
      }
    } 
  } 
  .dept-list-bot {
    background-color: black;
    grid-template-areas: "liste desc";
    grid-template-columns: 0.7fr 0.5fr; 

    .dept-sec-b {
      grid-area: desc; 
      margin: auto;
      
    }
    .dept-list-b {
      grid-area: liste;
      display: grid;
      grid-template-areas: "a b c d";
      grid-template-rows: 1fr;
      grid-gap: 20px; 

    .dept-item {
        // width: 100%;
        background-color: red;
        width: 170px;
        height: 200px;
        
        
      }

    }
  }
}
</style>

