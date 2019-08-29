<template>
    <div class="notification is-danger is-centered notif">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Notification',
    props: ['message']
}
</script>