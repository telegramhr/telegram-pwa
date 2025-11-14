<template>
  <div class="wrapper">
    <button
      :class="{ active: selectedType === 'individual' }"
      @click="changeType('individual')"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C10.0609 13 11.0783 13.4214 11.8284 14.1716C12.5786 14.9217 13 15.9391 13 17V19M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5Z"
          :stroke="selectedType === 'individual' ? 'black' : '#747474'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      1 Korisnik
    </button>

    <button
      :class="{ active: selectedType === 'family' }"
      @click="changeType('family')"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 19V18C6 17.4696 6.21071 16.9609 6.58579 16.5858C6.96086 16.2107 7.46957 16 8 16H12C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18V19M15 8H17C17.5304 8 18.0391 8.21071 18.4142 8.58579C18.7893 8.96086 19 9.46957 19 10V11M1 11V10C1 9.46957 1.21071 8.96086 1.58579 8.58579C1.96086 8.21071 2.46957 8 3 8H5M8 11C8 11.5304 8.21071 12.0391 8.58579 12.4142C8.96086 12.7893 9.46957 13 10 13C10.5304 13 11.0391 12.7893 11.4142 12.4142C11.7893 12.0391 12 11.5304 12 11C12 10.4696 11.7893 9.96086 11.4142 9.58579C11.0391 9.21071 10.5304 9 10 9C9.46957 9 8.96086 9.21071 8.58579 9.58579C8.21071 9.96086 8 10.4696 8 11ZM13 3C13 3.53043 13.2107 4.03914 13.5858 4.41421C13.9609 4.78929 14.4696 5 15 5C15.5304 5 16.0391 4.78929 16.4142 4.41421C16.7893 4.03914 17 3.53043 17 3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1C14.4696 1 13.9609 1.21071 13.5858 1.58579C13.2107 1.96086 13 2.46957 13 3ZM3 3C3 3.53043 3.21071 4.03914 3.58579 4.41421C3.96086 4.78929 4.46957 5 5 5C5.53043 5 6.03914 4.78929 6.41421 4.41421C6.78929 4.03914 7 3.53043 7 3C7 2.46957 6.78929 1.96086 6.41421 1.58579C6.03914 1.21071 5.53043 1 5 1C4.46957 1 3.96086 1.21071 3.58579 1.58579C3.21071 1.96086 3 2.46957 3 3Z"
          :stroke="selectedType === 'family' ? 'black' : '#747474'"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Family <span class="badge-novo">NOVO</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  data() {
    return {
      selectedType: 'individual', // default vrednost
    }
  },
  methods: {
    changeType(type) {
      this.selectedType = type
      // Emituj event prema parent komponenti
      this.$emit('subscription-type-changed', type)
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  padding: 8px 10px;
  gap: 4px;
  border-radius: 12px;
  background-color: #f1e3d7;
  border: 1px solid #6a484808;
  max-width: 260px;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}
.wrapper button {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  padding: 8px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #747474;
}
.wrapper button svg {
  height: 20px;
  width: 20px;
}
button.active {
  background-color: white;
  color: #0a0c11;
  box-shadow: 0px 3px 3px -1.5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 1px -0.5px rgba(0, 0, 0, 0.1);
}
button:hover {
  background: #faf4f0;
  color: #0a0c11;
  box-shadow: 0px 3px 3px -1.5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 1px -0.5px rgba(0, 0, 0, 0.1);
}
.badge-novo {
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #d30000;
}
@media (min-width: 1024px) {
  .wrapper {
    max-width: 300px;
    padding: 12px;
    gap: 8px;
  }
  .wrapper button {
    font-size: 18px;
    gap: 6px;
    padding: 8px;
  }
  .wrapper button svg {
    height: 24px;
    width: 24px;
  }
}
</style>
