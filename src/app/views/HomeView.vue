<template>
  <div class="gds-appcontent">
    <div class="gds-hero gds-row">
      <div class="gds-column gds-lg-6 gds-hero-left">
        <div class="gds-hero-container">
          <h1 class="gds-font-size-64">Gowks Design System</h1>
          <div>
            <router-link class="gds-btn gds-btn-primary gds-mr-2" to="/fundamentals">Read More</router-link>
          </div>
        </div>
      </div>
      <div class="gds-column gds-lg-6 gds-hero-right">
      </div>
    </div>
    
    <div class="gds-row">
      <div class="gds-tile">
        <div class="gds-tile-header">
          <div class="gds-tile-left">
            <div class="gds-tile-title">
              Gowks Design System
            </div>
          </div>
        </div>

        <div class="gds-tile-content">
          <p>
            GDS (Gowks Design System) is an open source design system built
            for use in Gowks products and digital experiences. It is released
            under an MIT license and, hence, may be used by anyone wishing to
            do so.
          </p>
        </div>
      </div>
    </div>

    <div class="gds-row">
      <div class="gds-tile gds-md-6 gds-lg-3">
        <div class="gds-tile-content section">
          <i class="gds-icon gds-icon-gcon gds-font-size-36 gds-mb-2"></i>
          <p>Getting Started</p>
          <router-link to="/" class="gds-btn">Learn more</router-link>
        </div>
      </div>

      <div class="gds-tile gds-md-6 gds-lg-3">
        <div class="gds-tile-content section">
          <i class="gds-icon gds-icon-layout gds-font-size-36 gds-mb-2"></i>
          <p>Fundamentals</p>
          <router-link to="/fundamentals" class="gds-btn">Learn more</router-link>
        </div>
      </div>

      <div class="gds-tile gds-md-6 gds-lg-3">
        <div class="gds-tile-content section">
          <i class="gds-icon gds-icon-sitemap gds-font-size-36 gds-mb-2"></i>
          <p>Components</p>
          <router-link to="/components" class="gds-btn">Learn more</router-link>
        </div>
      </div>

      <div class="gds-tile gds-md-6 gds-lg-3">
        <div class="gds-tile-content section">
          <i class="gds-icon gds-icon-bar-chart gds-font-size-36 gds-mb-2"></i>
          <p>Charts</p>
          <router-link to="/charts" class="gds-btn">Learn more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.section {
  text-align: center;

  i.gds-icon {
    display: block;
    text-align: center;
  }
}
</style>
