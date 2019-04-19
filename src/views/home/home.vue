<template>
    <div class="main-body">
        首页
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    created() {

    },

    methods: {
        getBaseInfo (code) {
            this.$http({
                url: this.serviceurl + '',
                method: 'get',
                params: {
                    code
                }
            })
                .then(res => {
                    if (res.data.retCode === 0) {

                    } else {
                        this.$Message.warning(res.data.retMsg || '获取团队信息失败！');
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        },
    },
};
</script>
<style lang="less">
@import "./home.less";
</style>