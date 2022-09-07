<template>
  <div class="full center relative stretch-height">
    <client-only>
      <div class="klub-card flex stretch relative">
        <div class="full flex center">
          <img src="@/assets/img/telegram_logo_white.svg" alt="Telegram logo" />
          <div class="full flex klub-card-content">
            <!--<p class="full center-text">
              {{ user.first_name }} {{ user.last_name }}
            </p>-->
            <p class="full center-text">ID {{ id }}</p>
            <!--<p class="full center-text">
              Datum isteka:
              {{
                user.expiry_date
                  ? new Date(user.expiry_date * 1000).toLocaleDateString(
                    'hr-hr'
                  )
                  : 'Neograničeno'
              }}
            </p>-->
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
}
</script>
