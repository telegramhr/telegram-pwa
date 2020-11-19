<template>
  <div class="full flex article stonk-widget stretch column-top-border">
    <div class="full flex">
      <h3 class="overtitle">Tržište</h3>
    </div>
    <div class="full stock-market">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">DOW<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full stock-market">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">S&P<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full stock-market">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">AMD<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full stock-market">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">TSLA<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full column-top-pad"></div>
    <div class="full stock-market">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">HT<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full stock-market">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">ZABA<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full stock-market">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">INA<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full stock-market hide">
      <?php
        $stonk = round(rand(-4, 7), 1);
        if ($stonk >= 0) {
      $stonk_img = "tg_stonks_up.png";
      $color = "green";
      $stonk = "+" . $stonk . ',' . rand(1, 99);
      } else {
      $stonk_img = "tg_stonks_down.png";
      $color = "red";
      $stonk = $stonk . ',' . rand(11, 99);
      }
      ?>
      <img src="img/<?php echo $stonk_img; ?>">RIVP<?php echo '<span class="superbold ' . $color . '">' . $stonk; ?>%</span>
    </div>
    <div class="full stock-market">
      <img src="img/tg_stonks_up.png">BADEL<span class="superbold green">+20%</span>
    </div>
    <div class="full column-top-pad"></div>
  </div>
</template>

<script>
export default {
name: "Stocks"
}
</script>

<style scoped>

</style>