<template>
  <footer class="ht-footer">
    <div class="ht-footer__inner">
      <hr class="ht-footer__divider" />
      <div class="ht-footer__row">
        <p class="ht-footer__desc">
          Sav sadržaj nastao je u suradnji s Hrvatskim Telekomom u sklopu
          kampanje AIMO! Znati uz AI
        </p>
        <div class="ht-footer__brand">
          <span class="ht-footer__copy">© 2026 Presshaus · Telegram.hr</span>
          <svg
            class="ht-footer__tlogo"
            viewBox="0 0 17.641 21.0007"
            fill="currentColor"
            aria-label="Hrvatski Telekom"
            role="img"
          >
            <path
              d="M4.19985 13.8605H0V9.66062H4.19985V13.8605ZM0 0V7.14027H1.26018V6.93061C1.26018 3.57088 3.15007 1.47058 6.72021 1.47058H6.93061V16.5905C6.93061 18.6908 6.09049 19.5309 3.99019 19.5309H3.36047V21.0007H14.2805V19.5309H13.6508C11.5505 19.5309 10.7111 18.6908 10.7111 16.5905V1.46984H10.9208C14.4909 1.46984 16.3808 3.57013 16.3808 6.92987V7.13953H17.641V0H0ZM13.4404 13.8605H17.6403V9.66062H13.4404V13.8605Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HtLandingFooter',
}
</script>

<style scoped>
.ht-footer {
  width: 100%;
  background: #f5f5f5;
  padding: 80px 24px 40px;
}
.ht-footer__inner {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ht-footer__divider {
  width: 100%;
  border: none;
  border-top: 1px solid #e1e1e1;
  margin: 0;
}
.ht-footer__row {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
}
.ht-footer__desc {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
  margin: 0;
  max-width: 484px;
  text-align: center;
}
.ht-footer__brand {
  display: flex;
  align-items: center;
  gap: 24px;
}
.ht-footer__copy {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #666666;
  white-space: nowrap;
}
.ht-footer__tlogo {
  height: 21px;
  width: 17.64px;
  flex-shrink: 0;
  color: #1d1d1b;
}

@media (min-width: 768px) {
  .ht-footer {
    padding: 80px 100px 40px;
  }
  .ht-footer__row {
    flex-direction: row;
    align-items: center;
  }
  .ht-footer__desc {
    text-align: left;
  }
}
</style>
