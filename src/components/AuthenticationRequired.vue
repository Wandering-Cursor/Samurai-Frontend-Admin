<script lang="ts" setup>
import { useToast } from "primevue/usetoast";
</script>

<template>
  <div>
    <component :is="wrapped" v-bind="props" v-if="isTokenValid" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { jwtDecode } from "jwt-decode";
import { ExtendedAuthToken } from "@/api/types/common/Auth";
import { apiClient } from "@/api/base";

export default defineComponent({
  props: {
    wrapped: {
      type: Object as () => any,
      required: true,
    },
  },
  data() {
    return {
      isTokenValid: false,
      props: {},
    };
  },
  methods: {
    validateAccessToken() {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        return false;
      }

      let decodedToken: ExtendedAuthToken;
      try {
        decodedToken = jwtDecode(accessToken);
      } catch (e) {
        return false;
      }

      if (decodedToken.exp == null) {
        return false;
      }
      if (decodedToken.exp * 1000 < Date.now()) {
        return false;
      }
      if (decodedToken.scopes == null) {
        return false;
      }
      // Check if the user has the admin scope
      if (!decodedToken.scopes.includes("admin")) {
        return false;
      }

      return true;
    },
  },
  created() {
    this.isTokenValid = this.validateAccessToken();

    if (!this.isTokenValid) {
      apiClient.auth.refreshTokenAuthRefreshPost(null).then(
        (res) => {
          localStorage.setItem("accessToken", res.data.access_token);
          this.isTokenValid = this.validateAccessToken();
        },
        (error) => {
          console.error(error);
        }
      );
    }

    if (!this.isTokenValid) {
      const toast = useToast();
      toast.add({
        severity: "error",
        summary: "Authentication error",
        detail: "You need to be logged in to access this page.",
        life: 5000,
      });
      this.$router.push("/login");
    }
  },
  render(h: Function) {
    return this.isTokenValid ? h(this.wrapped, { props: this.props }) : null;
  },
});
</script>
