const calcDistance = (distance: number) => {
    const distanceMeasure = Math.ceil(distance / 500);
    return distanceMeasure <= 2 ? 2 : distanceMeasure;
  };
  
  const calcCart = (cartValue: number) => {
    return cartValue < 10 ? cartValue + (10 - cartValue) : cartValue;
  };
  
  const calcItem = (items: number) => {
    return items >= 5 ? (items - 4) * 0.5 : 0;
  };
  
  const calcRushTime = (datetime: string) => {
    const date = new Date(datetime);
    const dayOfWeek = date.getUTCDay();
    const hoursOfDay = date.getUTCHours();
  
    if (dayOfWeek === 5 && hoursOfDay >= 15 && hoursOfDay <= 19) {
      return 1.1;
    } else {
      return 1;
    }
  };
  
  // calculate the price
  export const calculate = (
    cartValue: number,
    distance: number,
    items: number,
    datetime: string
  ) => {
    const distanceSurcharge = calcDistance(distance);
    const cartSurcharge = calcCart(cartValue);
    const itemCharge = calcItem(items);
    const fridayRushCheck = calcRushTime(datetime);
    const calculateDeliveryCharge =
      (distanceSurcharge + cartValue < 10 ? 10 - cartValue : 0 + itemCharge) *
      fridayRushCheck;
    const deliveryCharge =
      cartValue >= 100
        ? cartValue
        : calculateDeliveryCharge > 15
        ? 15
        : (distanceSurcharge + cartSurcharge + itemCharge) * fridayRushCheck;
    return deliveryCharge.toFixed(2);
  };
  