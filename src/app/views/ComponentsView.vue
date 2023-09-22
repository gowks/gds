<template>
  <div class="gds-appcontent">

    <div class="gds-row">
      <div class="gds-tile">
        <div class="gds-tile-header">
          <div class="gds-tile-left">
            <div class="gds-tile-title">Components</div>
          </div>
        </div>
        <div class="gds-tile-content">
          <p>
            GDS hosts a plathera of components. Here you can explore, filter
            and search for components that you are interested in. Components
            have one official name in the design system, but we also include
            other common names in the search functionallity.
          </p>
        </div>
      </div>
    </div>

    <div class="gds-row">
      <div class="gds-tile">
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentsView'
});
</script>