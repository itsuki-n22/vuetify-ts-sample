<template>
  <v-container class="mt-5">
    <v-row class="text-center">
      <v-form novalidate>
        <div class="form-item">
          <label for="email">email</label>
          <v-text-field
            id="email"
            v-model="email"
            type="text"
            autocomplete="off"
            placeholder="e.g. hoge@domain.com"
            @focus="resetError"
            />
          <ul class="validation-errors">
            <li v-if="!validation.email.format">invalid email format</li>
            <li v-if="!validation.email.required">empty email</li>
          </ul>
        </div>
        <div class="form-item">
          <label for="password">password</label>
          <v-text-field
            id="password"
            v-model="password"
            type="password"
            autocomplete="off"
            placeholder="e.g. xxxx"
            @focus="resetError"
            />
          <ul class="validation-errors">
            <li v-if="!validation.password.required">empty password</li>
          </ul>
        </div>
        <div class="form-actions">
          <v-btn
            color="primary"
            large
            :disabled="disabledLoginAction"
            @click="handleClick"
          >
            ログイン
          </v-btn>
          <p
            v-if="progress"
            class="login-progress"
          >
            ログイン中...
          </p>
          <p 
            v-if="error"
            class="login-error"
          >
            {{ error }}
          </p>
        </div>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const required = val => !!val.trim()
export default {
  name: 'KbnLoginForm',
  
  components: {
  },

  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      email: '',
      password: '',
      progress: false,
      error: '',
    }
  },

  computed: {
    validation (){
      return {
        email: {
          required: required(this.email),
          format: REGEX_EMAIL.test(this.email)
        },
        password: {
          required: required(this.password)
        }
      }
    },

    valid(){
      const validation = this.validation
      const fields = Object.keys(validation)
      let valid = true
      for (let i = 0; i < fields.length; i++){
        const field = fields[i]
        valid = Object.keys(validation[field])
          .every(key => validation[field][key])
        if (!valid){ break }
      }
      return valid
    },

    disabledLoginAction(){
      return !this.valid || this.progress
    }
  },

  methods: {
    resetError(){
      this.error = ''
    },

    handleClick(ev){
      if (this.disabledLoginAction){ return }

      this.progress = true
      this.error = ''

      this.$nextTick(()=> {
        this.onlogin({ email: this.email, password: this.password})
          .catch(err => {
            this.error = err.message
          })
          .then(() => {
            this.progress = false
          })
      })

    }
  }
}
</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
}
label {
  display: block;
}
input {
  width: 100%;
  padding: .5em;
  font: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.25em 0;
}
ul li {
  font-size: 0.5em;
}
.validation-errors{
  height: 32px;
  color: red;
}
.form-actions p {
  font-size: 0.5em;
}
</style>
