<template>
  <div class="full center relative stretch-height">
    <client-only>
      <div class="klub-card flex stretch relative">
        <div class="full flex center">
          <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo" />
          <div class="full flex klub-card-content">
            <p class="full center-text">
              {{ user.name }}
            </p>
            <p class="full center-text">ID {{ user.uid }}</p>
            <p class="full center-text">
              Datum isteka:
              {{
                user.expiry_date
                  ? new Date(user.expiry_date * 1000).toLocaleDateString(
                      'hr-hr'
                    )
                  : 'Nevažeći kod'
              }}
            </p>
          </div>
        </div>
        <div class="full flex center klub-qr">
          <img :src="`https://pretplate.telegram.hr/qrcode/${id}`" />
        </div>
        <img
          src="@/assets/img/tg_bg_fancyarc.jpg"
          aria-hidden="true"
          class="img-as-bg"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Id',
  async fetch() {
    this.user = await this.$axios.$get(`/pretplate/check/${this.id}`)
  },
  data() {
    return {
      id: this.$route.params.id,
      user: {
        expiry_date: '',
        name: '',
        uid: '',
        id: '',
      },
    }
  },
}
</script>
