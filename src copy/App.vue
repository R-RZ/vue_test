<template>
  <div id="app">
    
    <!-- <Student name="gaga" sex="男" :age="18" ></Student> -->
    <Student name="gaga" sex="男" :age="18"></Student>
    <school address="广州" name="白沙湖"></school>
  </div>
</template>

<script>
import School from './components/School.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Student from './components/Student'

export default {

  name: 'App',
  components: {
    Student,
    School
  },
  mounted() {
    console.log('App ', this);
  },
}
</script>

