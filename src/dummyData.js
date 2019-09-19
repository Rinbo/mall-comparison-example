export const INITIAL_MALLS = [
  "Mobilia",
  "Sickla",
  "Farsta Centrum",
  "Forum Gallerian"
];
export const INITIAL_COMMODITIES = ["Beklädnad", "Dagligvaror"];
export const INITIAL_CATEGORIES = ["Kläder", "Livsmedel"];
export const INITIAL_BRANDS = ["HM", "ICA Kvantum"];

export const randomRevenue = factor => {
  return Math.ceil(Math.random() * 10000) * factor;
};

export const randomPercentage = () => {
  const trend = Math.random() > 0.5 ? -1 : 1;
  return Math.ceil(Math.random() * 100) * trend;
};

export const alternatives = [
  {
    key: 1,
    text: "Kolumnsegment",
    value: "Kolumnsegment"
  },
  {
    key: 2,
    text: "Radsegment",
    value: "Radsegment"
  }
];

export const brands = [
  {
    key: "hm",
    text: "HM",
    value: "HM"
  },
  {
    key: "kvantum",
    text: "ICA Kvantum",
    value: "ICA Kvantum"
  }
];

export const categories = [
  {
    key: "clothes",
    text: "Kläder",
    value: "Kläder"
  },
  {
    key: "food",
    text: "Livsmedel",
    value: "Livsmedel"
  }
];

export const malls = [
  {
    key: "mobilia",
    text: "Mobilia",
    value: "Mobilia"
  },
  {
    key: "sickla",
    text: "Sickla",
    value: "Sickla"
  },
  {
    key: "farsta",
    text: "Farsta Centrum",
    value: "Farsta Centrum"
  },
  {
    key: "forum",
    text: "Forum Gallerian",
    value: "Forum Gallerian"
  }
];

export const commodities = [
  {
    key: "clothing",
    text: "Beklädnad",
    value: "Beklädnad"
  },
  {
    key: "dailies",
    text: "Dagligvaror",
    value: "Dagligvaror"
  }
];
