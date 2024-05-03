
const Api = async (str) => {
  let data = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${str}`);
  let convertedData = await data.json();
  return convertedData;
}

export default Api;