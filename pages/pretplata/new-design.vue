<template>
  <div>
    <PretplataHero
      title="Čitajte najbolje članke renomiranih autora.Podržite slobodno novinarstvo pretplatom."
    ></PretplataHero>
    <div class="content">
      <div class="box-wrapper">
        <Switcher></Switcher>
        <div class="boxes">
          <PretplataNewBox type="standard"></PretplataNewBox>
          <PretplataNewBox type="premium"></PretplataNewBox>
        </div>
      </div>
      <div>
        <PretplataPayment></PretplataPayment>
        <PretplataLogin></PretplataLogin>
        <PretplataConfirm></PretplataConfirm>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px 0px 60px 0px;
  margin: 0 auto;
  max-width: 865px;
}
.box-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.boxes {
  display: flex;
  flex-direction: row;
  gap: 60px;
  width: 100%;
  margin: 0 auto;
  max-width: 865px;
}
</style>
