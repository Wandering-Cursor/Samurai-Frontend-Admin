<script setup lang="ts">
import { defineProps } from 'vue';
import { AccountInfo } from '@/api/types/account/Account';

const props = defineProps({
    account: {
        type: Object as () => AccountInfo,
        required: true,
    },
}
);
</script>

<template>
    <div v-if="props.account.registration_email_code">
        <p>For account: <RouterLink :to="`/accounts/${props.account.registration_email_code.account_id}`">
                {{ props.account.registration_email_code.account_id }}
            </RouterLink>
        </p>
        <p>
            Value: {{ props.account.registration_email_code.code }}
        </p>
        <p>
            Is used:
            <CheckOrX :value="props.account.registration_email_code.is_used" />
        </p>
        <p>
            Created At: {{ props.account.registration_email_code.created_at }}
        </p>
        <p>
            Updated At: {{ props.account.registration_email_code.updated_at }}
        </p>
    </div>
    <p v-else>N/A</p>
</template>