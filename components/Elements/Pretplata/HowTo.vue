<script>
export default {
  name: 'HowTo',
  data() {
    return {
      steps: [
        {
          number: 1,
          title: 'Odaberite vrstu pretplate',
          description: 'Standard ili Premium',
        },
        {
          number: 2,
          title: 'Unesite podatke',
          description:
            'Unesite email osobe kojoj poklanjate i odaberite datum kada želite da se poklon pošalje',
        },
        {
          number: 3,
          title: 'Personalizirajte e-mail',
          description: 'Osoba dobiva personalizirani e-mail s poklonom',
        },
        {
          number: 4,
          title: 'Novi sadržaj svakog dana',
          description:
            'Vi birate - Telegram svakog dana donosi sadržaj koji se otvara iznova',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <span class="title">Kako pokloniti pretplatu?</span>
      <div class="content">
        <img
          class="mobile-image"
          src="@/assets/img/pretplata/gift-mobile.png"
          alt="Gift Mobile"
        />
        <img
          class="desktop-image"
          src="@/assets/img/pretplata/gift-desktop.png"
          alt="Gift Mobile"
        />

        <div class="right-side">
          <div class="steps">
            <div v-for="step in steps" :key="step.number" class="step-item">
              <div class="step-number">{{ step.number }}.</div>
              <div class="step-content">
                <span>{{ step.title }}</span>
                <p>{{ step.description }}</p>
              </div>
            </div>
          </div>
          <button>Darujte Telegram pretplatu</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0px 16px;
}
.wrapper {
  width: 100%;
  max-width: 867px;
  padding: 52px 64px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.wrapper .title {
  text-align: center;
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.mobile-image {
  display: block;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1.75;
}
.desktop-image {
  display: none;
}
.content .right-side {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.content .steps {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.step-item {
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 8px 0px;
  align-items: center;
}
.step-item .step-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.step-item .step-number {
  min-width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #efded0;
  font-size: 16px;
  color: #343434;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}
.step-content span {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #ae3737;
}
.step-content p {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  color: #5f5f5f;
}
.right-side button {
  width: 100%;
  padding: 8px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  color: white;
  background-color: #37ae37;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
.right-side button:hover {
  background-color: #237023;
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 64px 0 80px 0;
    gap: 60px;
  }
  .wrapper .title {
    font-size: 28px;
    line-height: 32px;
  }
  .wrapper .content {
    flex-direction: row;
    gap: 72px;
  }
  .content .steps {
    gap: 8px;
  }
  .mobile-image {
    display: none;
  }
  .desktop-image {
    display: block;
    width: 100%;
    max-width: 391px;
    aspect-ratio: 0.98;
    object-fit: cover;
  }

  .steps {
    gap: 16px;
  }
  .right-side {
    gap: 20px;
  }
  .step-content span {
    font-size: 20px;
    line-height: 24px;
  }
  .step-content p {
    font-size: 16px;
    line-height: 28px;
  }
}
</style>
