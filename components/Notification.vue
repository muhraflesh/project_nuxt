<template>
    <div class="notification is-grey">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Notification',
    props: ['message']
}
</script>