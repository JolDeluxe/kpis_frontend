import api from '@/lib/axios';

let cachedPromise = null;
let cachedData = null;

export const clearCargosCache = () => {
  cachedPromise = null;
  cachedData = null;
};

if (typeof window !== 'undefined') {
  window.addEventListener('kpi-data-refreshed', clearCargosCache);
}

export const cargosApi = {
  visibles: async () => {
    if (cachedData) return cachedData;
    if (cachedPromise) return cachedPromise;

    cachedPromise = api.get('/cargos/visibles')
      .then((res) => {
        cachedData = res;
        cachedPromise = null;
        return res;
      })
      .catch((err) => {
        cachedPromise = null;
        throw err;
      });

    return cachedPromise;
  },
  clearCache: clearCargosCache
};

