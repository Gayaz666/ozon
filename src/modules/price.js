import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter2 } from "./filters";

const price = () => {
  const minInput = document.querySelector('#min');
  const maxInput = document.querySelector('#max');

  //полюбому что-то получаем, если пусто
  const getPriceRange = () => {
    const min = parseFloat(minInput.value) || 0;
    const max = parseFloat(maxInput.value) || Infinity;
    return { min, max };
  };

  //функция вызова фильтра
  const applyPriceFilter = () => {
    const { min, max } = getPriceRange();
    getData().then((data) => {
      renderGoods(priceFilter(data, min, max));
    });
  };

  minInput.addEventListener('input', () => {
    applyPriceFilter();
  });

  maxInput.addEventListener('input', () => {
    applyPriceFilter();
  });
}

export default price;