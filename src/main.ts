import './style.css'
import { renderMegacorps } from './assets/generators.ts/megacorp/renderMegacorp.ts';
import { renderWorld } from './assets/generators.ts/world/renderWorld.ts';
import { renderCity } from './assets/generators.ts/city/renderCity.ts';
import { renderDistrict } from './assets/generators.ts/district/renderDistrict.ts';

renderWorld();
renderCity();
renderDistrict();
renderMegacorps();
