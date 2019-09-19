export const randomRevenue = (factor) => {
    return Math.ceil(Math.random()*10000)*factor
}

export const randomPercentage = () => {
    const trend = Math.random > 0.5 ? -1 : 1
    return Math.ceil(Math.random()* 100)  * trend;
}

export const dummyData = {
  mobilia: {
    name: "Mobilia",
    revenue: randomRevenue(1000000),
    change: -3,
    commodities: {
      clothing: {
        name: "Beklädnad",
        revenue: randomRevenue(100000),
        change: -3
      },
      dailies: {
        name: "Dagligvaror",
        revenue: randomRevenue(100000),
        change: -3
      }
    },
    categories: {
      clothes: {
        name: "Kläder",
        revenue: randomRevenue(10000),
        change: -3
      },
      food: {
        name: "Livsmedel",
        revenue: randomRevenue(10000),
        change: -3
      }
    },
    brands: {
      HM: {
        name: "HM",
        revenue: randomRevenue(1000),
        change: -3,
        OCR: 1.5
      },
      ICAKvantum: {
        name: "ICA kvantum",
        revenue: randomRevenue(1000),
        change: -3,
        OCR: 5
      }
    }
  },
  farstaCentrum: {
    name: "Farsta Centrum",
    revenue: 1000,
    change: -3,
    commodities: {
      clothing: {
        name: "Beklädnad",
        revenue: 1000,
        change: -3
      },
      dailies: {
        name: "Dagligvaror",
        revenue: 1000,
        change: -3
      }
    },
    categories: {
      clothes: {
        name: "Kläder",
        revenue: 1000,
        change: -3
      },
      food: {
        name: "Livsmedel",
        revenue: 1000,
        change: -3
      }
    },
    brands: {
      HM: {
        name: "HM",
        revenue: 1000,
        change: -3,
        OCR: 1.5
      },
      ICAKvantum: {
        name: "ICA kvantum",
        revenue: 1000,
        change: -3,
        OCR: 5
      }
    }
  },
  forumGallerian: {
    name: "Forum Gallerian",
    revenue: 1000,
    change: -3,
    commodities: {
      clothing: {
        name: "Beklädnad",
        revenue: 1000,
        change: -3
      },
      dailies: {
        name: "Dagligvaror",
        revenue: 1000,
        change: -3
      }
    },
    categories: {
      clothes: {
        name: "Kläder",
        revenue: 1000,
        change: -3
      },
      food: {
        name: "Livsmedel",
        revenue: 1000,
        change: -3
      }
    },
    brands: {
      HM: {
        name: "HM",
        revenue: 1000,
        change: -3,
        OCR: 1.5
      },
      ICAKvantum: {
        name: "ICA kvantum",
        revenue: 1000,
        change: -3,
        OCR: 5
      }
    }
  },
  sickla: {
    name: "Sickla",
    revenue: 1000,
    change: -3,
    commodities: {
      clothing: {
        name: "Beklädnad",
        revenue: 1000,
        change: -3
      },
      dailies: {
        name: "Dagligvaror",
        revenue: 1000,
        change: -3
      }
    },
    categories: {
      clothes: {
        name: "Kläder",
        revenue: 1000,
        change: -3
      },
      food: {
        name: "Livsmedel",
        revenue: 1000,
        change: -3
      }
    },
    brands: {
      HM: {
        name: "HM",
        revenue: 1000,
        change: -3,
        OCR: 1.5
      },
      ICAKvantum: {
        name: "ICA kvantum",
        revenue: 1000,
        change: -3,
        OCR: 5
      }
    }
  }
};

