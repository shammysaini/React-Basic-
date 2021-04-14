<template>
    <div>
        <b-form-input v-model="signup.name" class="mt-4" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
        <b-form-input v-model="signup.password" class="mt-4" placeholder="Enter your password"></b-form-input>
    <div class="mt-2"></div>
    <b-form-input v-model="signup.email" class="mt-4" placeholder="Enter your email"></b-form-input>
    <div class="mt-2"></div>

    <b-form-group label="Select your gender" v-slot="{ ariaDescribedby }">
      <b-form-radio v-model="signup.gender" :aria-describedby="ariaDescribedby" name="Gender" value="Male">Male</b-form-radio>
      <b-form-radio v-model="signup.gender" :aria-describedby="ariaDescribedby" name="Gender" value="Female">Female</b-form-radio>
    </b-form-group>
    

    <b-form-group label="Using sub-components:" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="signup.language"
        :aria-describedby="ariaDescribedby"
        name="language" >
        <b-form-checkbox value="English">English</b-form-checkbox>
        <b-form-checkbox value="Hindi">Hindi</b-form-checkbox>
        <b-form-checkbox value="German">German</b-form-checkbox>
        <b-form-checkbox value="French">French</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

        <b-button v-on:click="signupuser" variant="success">submit</b-button> 

        </div>
       
</template>


<script>


export default 
{
    name:'signupform',
    data()
    {
        return {
            signup:{
                name:null,
                 password:null,
                  email:null,
                   gender:null,
                   language:[]
            }
        }

    },

    methods:
        {
            signupuser()
            {
                console.log(this.signup)
            }

        }
    

}
        
    

</script>


<style>
</style>