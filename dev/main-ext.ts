import { createApp } from 'vue';
import '@/css/maplibre.scss';
import '@/plugins/draw/draw.plugin.scss';
//import App from './App.vue';

//const app = createApp(App);


import {
  MglMap,
  MglNavigationControl,
} from '../dist/assets/vue-maplibre-gl.es.js';

var style = {
  version: 8,
  sources: {
    MIERUNEMAP: {
      type: 'raster',
      tiles: ['https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
    }
  },
  layers: [
    {
      id: 'MIERUNEMAP',
      type: 'raster',
      source: 'MIERUNEMAP',
      minzoom: 0,
      maxzoom: 18
    }
  ]
};
var center = [139.767, 35.681];
//var center = [35.681, 139.767];
var zoom = 11;

var app = createApp({
  components: {
    'MglMap': MglMap,
    'MglNavigationControl': MglNavigationControl
  },
  data: () => ({
    /*
    return {
      message: "Hello world"
    }
    */
    style,
    center,
    zoom
  }),

  // mgl-map will be replaced with mgl-container > mgl-wrapper
  template: `<div class="map-container"><mgl-map
    map-key="second"
    :map-style="style"
    :center="center"
    :zoom="zoom"
    height="500px"
  >

  </mgl-map></div>`
})

app.mount('#app');
