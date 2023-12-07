const concertToPrice = (number: number, space: '.' | ',' = '.', currencyUnit: string = '₫') => {
   if (!number || number === 0) {
      return 0 + currencyUnit;
   }
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, space) + ' ' + currencyUnit;
};

export default concertToPrice;
