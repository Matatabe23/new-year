<template>
	<div class="Main">
		<div class="Main-block">
			<h1>До нового 2024 года:</h1>
			<h2>{{ timeUntil2024 }}</h2>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      timeUntil2024: ''
    }
  },
  created() {
    this.calculateTimeUntil2024();
    setInterval(this.calculateTimeUntil2024, 1000); // Вызов функции каждую секунду
  },
  methods: {
    calculateTimeUntil2024() {
      const currentTime = new Date();
      const newYear2024 = new Date('2024-01-01T00:00:00');
      const timeDifference = newYear2024 - currentTime;

      const seconds = Math.floor((timeDifference / 1000) % 60);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      this.timeUntil2024 = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
  }
}
</script>

<style scoped>
.Main {
	background-image: url("@/assets/image/BG.jpeg");
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: center;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: penguin-attack-cyrillic;
}

.Main-block{
	background-color: hsla(0, 0%, 0%, 0.5);
	height: 50vh;
	width: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	border-radius: 15px;
	color: white;

	min-width: 210px;
}

@font-face {
  font-family: 'penguin-attack-cyrillic';
  src: url('@/assets/font/penguin-attack-cyrillic.otf'),
}
</style>
