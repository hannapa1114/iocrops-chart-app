import * as chart1 from './chart1.json';

export const time = chart1.dataset.map((data) => data.time);
export const EC_slab1 = chart1.dataset.map((data) => data.EC_slab1);
export const EC_slab2 = chart1.dataset.map((data) => data.EC_slab2);
export const EC_drain_PC = chart1.dataset.map((data) => data.EC_drain_PC);
export const WC_slab1 = chart1.dataset.map((data) => data.WC_slab1);
export const WC_slab2 = chart1.dataset.map((data) => data.WC_slab2);
export const CO2air = chart1.dataset.map((data) => data.CO2air);
export const HUMDef = chart1.dataset.map((data) => data.HumDef);
export const Rhair = chart1.dataset.map((data) => data.Rhair);
export const Tair = chart1.dataset.map((data) => data.Tair);
export const EnScr = chart1.dataset.map((data) => data.EnScr);
export const BlackScr = chart1.dataset.map((data) => data.BlackScr);
export const PipeGrow = chart1.dataset.map((data) => data.PipeGrow);
export const PipeLow = chart1.dataset.map((data) => data.PipeLow);
export const IGlob = chart1.dataset.map((data) => data.Iglob);
export const RADSum = chart1.dataset.map((data) => data.RadSum);
export const Tout = chart1.dataset.map((data) => data.Tout);
