<template>
    <div class="notification is-success is-centered notif has-text-centered">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'AdduserSuccess',
    props: ['message']
}
</script>