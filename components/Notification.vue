<template>
    <div class="notification is-danger is-centered notif has-text-centered">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Notification',
    props: ['message']
}
</script>