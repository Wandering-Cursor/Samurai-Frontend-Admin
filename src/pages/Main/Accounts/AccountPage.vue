<script setup lang="ts">
import { getAccount } from '@/api/account/getAccount';
import { AccountInfo } from '@/api/types/account/Account';
import { GetAccountRequest } from '@/api/types/account/api/getAccount';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CheckOrX from '@/components/Visuals/CheckOrX.vue';
import RegistrationCode from '@/components/Account/RegistrationCode.vue';
import Connection from '@/components/Account/ConnectionRepresentation.vue';
import Permissions from '@/components/Account/PermissionRepresentation.vue';

let account = ref<AccountInfo | null>(null);
let route = useRoute();

onMounted(() => {
    let request = new GetAccountRequest();
    request.account_id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id.toString();

    getAccount(request, (data) => {
        console.log(data);
        return account.value = data;
    }, (error) => {
        console.error(error);
    });
});

const capitalize = (str: string) => {
    return str.replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

</script>

<template>
    <div class="w-full m-2">
        <div>
            <h1>Account: {{ account?.account_id }}</h1>
        </div>
        <div v-if="account">
            <Fieldset legend="Account ID">
                <p>{{ account.account_id }}</p>
            </Fieldset>
            <Fieldset legend="Email">
                <p>{{ account.email }}</p>
            </Fieldset>
            <Fieldset legend="Registration code">
                <p>{{ account.registration_code }}</p>
            </Fieldset>
            <Fieldset legend="Username">
                <p>{{ account.username }}</p>
            </Fieldset>
            <Fieldset legend="Account Type">
                <p>{{ capitalize(account.account_type) }}</p>
            </Fieldset>
            <Fieldset legend="Name">
                <p>{{ `${account.first_name} ${account.last_name} ${account.middle_name || ''}` }}</p>
            </Fieldset>
            <Fieldset legend="State">

                <p>Is active:
                    <CheckOrX :value="account.is_active" />
                </p>
                <p>Is email verified:
                    <CheckOrX :value="account.is_email_verified" />
                </p>
            </Fieldset>
            <Fieldset legend="Permissions">
                <ScrollPanel v-if="account.permissions && account.permissions.length > 0" style="height: 16em" :pt="{
                    content: { style: { display: 'flex', 'flex-direction': 'column', gap: '1em' } }
                }
                    ">
                    <Permissions v-for="permission in account.permissions" v-bind:key="permission.account_permission_id"
                        :permission="permission" />
                </ScrollPanel>
                <div v-else>
                    <p>No permissions</p>
                </div>
            </Fieldset>
            <Fieldset legend="Connections">
                <ScrollPanel v-if="account.connections && account.connections.length > 0" style="height: 16em" :pt="{
                    content: { style: { display: 'flex', 'flex-direction': 'column', gap: '1em' } }
                }
                    ">
                    <Connection v-for=" connection in account.connections" :connection="connection"
                        v-bind:key="connection.connection_id" />
                </ScrollPanel>
                <div v-else>
                    <p>No connections</p>
                </div>
            </Fieldset>
            <Fieldset legend="Email confirmation code">
                <RegistrationCode :account="account" />
            </Fieldset>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>