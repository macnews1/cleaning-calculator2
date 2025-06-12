import { useState } from "react";

const basePrices = [
  { squareFeet: 700, bedrooms: 1, bathrooms: 1, weekly: 125, biweekly: 137.5, monthly: 162.5, deep: 250 },
  { squareFeet: 1000, bedrooms: 2, bathrooms: 1.5, weekly: 145, biweekly: 159.5, monthly: 188.5, deep: 290 },
  { squareFeet: 1500, bedrooms: 3, bathrooms: 2, weekly: 165, biweekly: 181.5, monthly: 214.5, deep: 330 },
  { squareFeet: 2000, bedrooms: 4, bathrooms: 2.5, weekly: 185, biweekly: 203.5, monthly: 240.5, deep: 370 },
  { squareFeet: 2500, bedrooms: 5, bathrooms: 3, weekly: 205, biweekly: 225.5, monthly: 266.5, deep: 410 },
  { squareFeet: 3000, bedrooms: 6, bathrooms: 3.5, weekly: 225, biweekly: 247.5, monthly: 292.5, deep: 450 },
  { squareFeet: 3500, bedrooms: 7, bathrooms: 4, weekly: 245, biweekly: 269.5, monthly: 318.5, deep: 490 },
  { squareFeet: 4000, bedrooms: 8, bathrooms: 4.5, weekly: 265, biweekly: 291.5, monthly: 344.5, deep: 530 },
  { squareFeet: 4500, bedrooms: 9, bathrooms: 5, weekly: 285, biweekly: 313.5, monthly: 370.5, deep: 570 },
  { squareFeet: 5000, bedrooms: 10, bathrooms: 5.5, weekly: 305, biweekly: 335.5, monthly: 396.5, deep: 610 },
  { squareFeet: 6000, bedrooms: 10, bathrooms: 6, weekly: 350, biweekly: 385, monthly: 455, deep: 700 },
  { squareFeet: 7000, bedrooms: 10, bathrooms: 6, weekly: 380, biweekly: 418, monthly: 494, deep: 760 },
  { squareFeet: 8000, bedrooms: 10, bathrooms: 6, weekly: 410, biweekly: 451, monthly: 533, deep: 820 },
  { squareFeet: 9000, bedrooms: 10, bathrooms: 6, weekly: 440, biweekly: 484, monthly: 572, deep: 880 },
];

// ... conteúdo completo já colado anteriormente do canvas ...
