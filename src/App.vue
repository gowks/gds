<template>
  <header class="gds-sysbar">
    <div class="gds-sysbar-top">
      <router-link
        title="Home"
        to="/"
        class="gds-sysbar-item gds-icon gds-icon-gcon"
        active-class="gds-sysbar-item-active">
      </router-link>
      <router-link
        title="Fundamentals"
        to="/fundamentals"
        class="gds-sysbar-item gds-icon gds-icon-layout"
        active-class="gds-sysbar-item-active">
      </router-link>
      <router-link
        title="Components"
        to="/components"
        class="gds-sysbar-item gds-icon gds-icon-sitemap"
        active-class="gds-sysbar-item-active">
      </router-link>
      <router-link
        title="Charts"
        to="/charts"
        class="gds-sysbar-item gds-icon gds-icon-bar-chart"
        active-class="gds-sysbar-item-active">
      </router-link>
    </div>
    <div class="gds-sysbar-bottom">
      <a
        title="Github"
        href="http://github.com/gowks"
        class="gds-sysbar-item gds-icon gds-icon-github">
      </a>
    </div>
  </header>
  <main class="gds-main">
    <router-view/>
  </main>
</template>

<style lang="less">
@import './lib/style.less';
#app {
  display: block;
  height: 100%;
}
</style>
