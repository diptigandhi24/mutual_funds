import getMutualFundsData from "./netlify/functions/getMutualFundsData.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  getMutualFundsData();
