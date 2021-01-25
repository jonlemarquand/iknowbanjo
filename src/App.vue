<template>
  <h1>I Know Banjo</h1>
  <div class="options">
    <div id="mode-input">
      <h2>Mode</h2>
      <div>
        <input type="radio" id="all" name="mode" value="all" v-model="modeSelected">
        <label for="all">All Notes</label>
      </div>
      <div>
        <input type="radio" id="scales" name="mode" value="scales" v-model="modeSelected">
        <label for="scales">Scales</label>
      </div>
      <div>
        <input type="radio" id="chords" name="mode" value="chords" v-model="modeSelected">
        <label for="chords">Chords</label>
      </div>
      <div>
        <input type="radio" id="arpeggios" name="mode" value="arpeggios" v-model="modeSelected">
        <label for="arpeggios">Arpeggios</label>
      </div>
      <p>Currently selected: {{ modeSelected }}</p>
    </div>
    <div id="root-input">
      <h2>Root Note</h2>
      <div>
        <input type="radio" id="c" name="root" value="c" v-model="rootSelected">
        <label for="c">C</label>
      </div>
      <div>
        <input type="radio" id="db" name="root" value="db" v-model="rootSelected">
        <label for="db">C#/Db</label>
      </div>
          <div>
        <input type="radio" id="d" name="root" value="d" v-model="rootSelected">
        <label for="d">D</label>
      </div>
      <div>
        <input type="radio" id="eb" name="root" value="eb" v-model="rootSelected">
        <label for="eb">D#/Eb</label>
      </div>
      <div>
        <input type="radio" id="e" name="root" value="e" v-model="rootSelected">
        <label for="e">E</label>
      </div>
      <div>
        <input type="radio" id="f" name="root" value="f" v-model="rootSelected">
        <label for="f">F</label>
      </div>
      <div>
        <input type="radio" id="gb" name="root" value="gb" v-model="rootSelected">
        <label for="gb">F#/Gb</label>
      </div>
      <div>
        <input type="radio" id="g" name="root" value="g" v-model="rootSelected">
        <label for="g">G</label>
      </div>
      <div>
        <input type="radio" id="gb" name="root" value="gb" v-model="rootSelected">
        <label for="gb">G#/Ab</label>
      </div>
      <div>
        <input type="radio" id="a" name="root" value="a" v-model="rootSelected">
        <label for="a">A</label>
      </div>
      <div>
        <input type="radio" id="bb" name="root" value="bb" v-model="rootSelected">
        <label for="bb">A#/Bb</label>
      </div>
      <div>
        <input type="radio" id="b" name="root" value="b" v-model="rootSelected">
        <label for="b">B</label>
      </div>
      <p>Currently selected: {{ rootSelected }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    data() {
      return {
        modeSelected: "all",
        rootSelected: "c"
      }
    }
  }
</script>

<style lang='scss'>

  body {
    margin: 0;
    padding: 0;
  }
  h1 {
    color:black;
    text-align: center;
  }
  .options {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-evenly;
  }
</style>