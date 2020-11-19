<template>
  <div>
    <div class="full flex super1-block">
      <div class="block-title full mobile-side-pad">
        <div class="container flex relative">
          <h1 class="full column-left-pad">Super1</h1>
        </div>
      </div>
    </div>
    <div class="container flex relative block-4 standard-block super1-block">
      <section class="three-fourths flex-responsive flex elevate-over-section">
        <section
          class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border"
        >
          <featured :post="{}"></featured>
          <div class="full flex split-articles">
            <standard></standard>
            <!-- 3x -->
          </div>
        </section>
        <div class="mobile-only full flex">
          <!--<?php include("widget_podcast_s1.php"); ?>-->
        </div>
        <section
          class="third flex-responsive flex column-horizontal-pad flex mobile-side-pad"
        >
          <standard></standard>
          <!-- 3x -->
        </section>
      </section>
      <section
        class="fourth flex desktop-only column-horizontal-pad column-right-border"
      >
        <h2 class="full flex section-title">Upravo se čita</h2>
        <div class="full flex">
          <mini></mini>
          <!-- 5x -->
          <h2 class="full flex section-title">Podcast</h2>
          <!--<?php
                    include("widget_podcast_s1.php");
                    ?>-->
        </div>
      </section>
      <div
        class="full center subtle-btn-parent mobile-only relative clickable"
        onclick="requestArticles(this);"
      >
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Super1',
}
</script>
