<script setup lang="ts">
import { defineProps } from "vue";
import { AccountInfo } from "@/api/types/account/Account";

const props = defineProps({
  account: {
    type: Object as () => AccountInfo,
    required: true,
  },
});
</script>

<template>
  <div v-if="props.account.registration_email_code">
    <p>{{ $t("entities.registrationEmailCode.title") }}</p>
    <p>
      {{ $t("entities.registrationEmailCode.value") }}:
      {{ props.account.registration_email_code.code }}
    </p>
    <p>
      {{ $t("entities.registrationEmailCode.isUsed") }}:
      <CheckOrX :value="props.account.registration_email_code.is_used" />
    </p>
    <p>
      {{ $t("entities.registrationEmailCode.createdAt") }}:
      {{ props.account.registration_email_code.created_at }}
    </p>
    <p>
      {{ $t("entities.registrationEmailCode.updatedAt") }}:
      {{ props.account.registration_email_code.updated_at }}
    </p>
  </div>
  <p v-else>{{ $t("strings.noEmailConfirmationCodes") }}</p>
</template>
