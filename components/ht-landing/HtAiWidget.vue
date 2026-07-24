<<template>
  <div class="wrapper">
    <div id="htai-widget">
      <div class="left">
        <img src="@/assets/img/widgets/ht/aimo-znati.png" alt="HT Aimo znati" />
      </div>
      <div class="center">
        <p>
          Besplatni video vodiči, praktični AI alati i znanja koja možete
          primijeniti odmah.
        </p>
        <a href="/aimo-znati-uz-ai/">
          Istraži sadržaje
          <svg
            class="arrow-right"
            width="8.55"
            height="7.33"
            viewBox="0 0 15 13"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M13.5 6.29995L0.900001 6.29995M13.5 6.29995L8.1 0.89995M13.5 6.29995L8.1 11.7"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <div class="right">
        <img src="@/assets/img/widgets/ht/ht-white.png" alt="HT Logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTAiWidget',
}
</script>

<style scoped>
.wrapper {
  padding: 0 16px;
  width: 100%;
}
#htai-widget {
  width: 100%;
  max-width: 710px;
  margin: 32px auto;
  background: linear-gradient(97.72deg, #e2007a 11.78%, #7c0043 81.59%);
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  padding: 12px 12px 20px 12px;
  justify-content: space-between;
}
.left img {
  max-width: 50px;
  width: 100%;
}
.center {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 212px;
  align-items: center;
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
.center a {
  background: white;
  color: #e2007a;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 18px;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
.center a .arrow-right {
  flex-shrink: 0;
  width: 9;
  height: 8px;
  transition: transform 0.2s ease;
}
.center a:hover .arrow-right {
  transform: translateX(3px);
}
.right img {
  max-width: 18px;
  width: 100%;
}

@media screen and (min-width: 768px) {
  #htai-widget {
    padding: 24px 20px;
  }
  .wrapper {
    padding: 0px;
  }
  .center {
    gap: 16px;
    font-size: 18px;
    max-width: 360px;
  }
  .center a {
    padding: 10px 14px;
    font-size: 14px;
  }
  .left img {
    max-width: 70px;
  }
}
</style>
>