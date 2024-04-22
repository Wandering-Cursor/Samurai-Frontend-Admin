<script lang="ts" setup>
import { useToast } from "primevue/usetoast";
</script>

<template>
  <div>
    <component :is="WrappedComponent" v-bind="props" v-if="isTokenValid" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {jwtDecode} from "jwt-decode";

export default defineComponent({
  props: {
    WrappedComponent: {
      type: Object as () => any,
      required: true
    }
  },
  data() {
    return {
      isTokenValid: false,
      props: {}
    };
  },
  methods: {
    validateAccessToken() {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        return false;
      }

      const decodedToken = jwtDecode(accessToken);

      if (decodedToken.exp == null) {
        return false;
      }
      if (decodedToken.exp * 1000 < Date.now()) {
        return false;
      }

      return true;
    }
  },
  created() {
    this.isTokenValid = this.validateAccessToken();

    if (!this.isTokenValid) {
      const toast = useToast();
      toast.add({severity: "error", "summary": "Authentication error", "detail": "You need to be logged in to access this page."});
      this.$router.push("/login");
    }
  },
  render(h: Function) {
    return this.isTokenValid ? h(this.WrappedComponent, { props: this.props }) : null;
  }
});
</script>