export const calcIMC = (weight, weightType, height, heightType) => {
  let _weight = weight;
  let _height = height;

  if (weightType === "lbs") {
    _weight = _weight * 2.20462;
  }

  if (heightType === "feet") {
    _height = _height * 0.3048;
  }

  const imc = _weight / (_height * _height);

  return imc;
};
