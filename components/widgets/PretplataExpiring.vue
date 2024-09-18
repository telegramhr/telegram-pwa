<template>
  <div class="full flex stretch relative pretplata-expiring">
    <div
      class="container smaller-container flex column-full-pad mobile-full-pad pretplata-faq"
    >
      <details class="full flex relative">
        <summary class="full relative">
          Postoji problem s vašom pretplatom.
        </summary>
        <div
          class="full nothtwo bold column-top-pad column-mini-bottom-pad column-top-border column-top-margin"
        >
          Vaša kartica je istekla te uskoro nećemo moći obnoviti vašu pretplatu.
        </div>
        <p class="full">
          Molimo vas da unesete nove podatke kako bi nastavili koristiti svoju
          pretplatu.
        </p>
        <div class="full flex">
          <app-link
            to="/pretplata"
            class="newbtn huge-newbtn flex center center-text"
          >
            Opcije plaćanja
          </app-link>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataExpiring',
}
</script>
