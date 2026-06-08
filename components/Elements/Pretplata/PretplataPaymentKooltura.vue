<template>
  <div class="main">
    <span class="section-title">Odaberite način plaćanja</span>
    <div class="card">
      <div class="card-head">
        <div class="logo-box">
          <img
            src="@/assets/img/pretplata/kooltura/kooltura_logo.png"
            alt="Kulturna iskaznica"
          />
        </div>
        <div class="head-text">
          <h3>Kulturna iskaznica</h3>
          <p>
            Omogućuje trošenje sredstava za kupnju raznih kulturnih sadržaja
          </p>
        </div>
        <span class="radio" aria-hidden="true"></span>
      </div>
      <ul class="info-list">
        <li v-for="(item, index) in items" :key="index">
          <font-awesome-icon class="info-icon" :icon="['fas', 'check']" />
          <p :class="{ strong: item.strong }">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataPaymentKooltura',
  data() {
    return {
      items: [
        {
          text: 'Ponuda vrijedi za osobe koje ostvaruju pravo na Kulturnu iskaznicu, koje imaju 18 godina',
          strong: true,
        },
        {
          text: 'U prvoj godini korištenja, Kulturna iskaznica bit će dostupna za sve mlade koji u razdoblju od 1. siječnja do 31. prosinca 2026. navrše 18 godina.',
          strong: false,
        },
        {
          text: 'Brzo i jednostavno plaćanje putem digitalne kulturne iskaznice',
          strong: false,
        },
        {
          text: 'Siguran i pouzdan način plaćanja',
          strong: false,
        },
      ],
    }
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid #b5b5b5;
  padding: 28px 0;
}
.section-title {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
}
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 2px solid #b5b5b5;
  border-radius: 10px;
  padding: 20px;
}
.card-head {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.logo-box {
  flex-shrink: 0;
  width: 88px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.07);
}
.logo-box img {
  width: 60px;
  height: auto;
}
.head-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
}
.head-text h3 {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #1a1410;
}
.head-text p {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5f5f5f;
}
.radio {
  flex-shrink: 0;
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #000000;
}
.radio::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
}
.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #dfdfdf;
  padding-top: 24px;
}
.info-list li {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
}
.info-icon {
  color: #8d5b31;
  margin-top: 4px;
  flex-shrink: 0;
}
.info-list p {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.info-list p.strong {
  font-weight: 600;
}
@media screen and (min-width: 1024px) {
  .section-title {
    font-size: 16px;
    line-height: 24px;
  }
  .card {
    padding: 32px;
  }
  .logo-box {
    width: 110px;
    height: 64px;
  }
  .logo-box img {
    width: 72px;
  }
  .head-text h3 {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
