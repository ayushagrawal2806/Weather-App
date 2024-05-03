import { useEffect, useState } from "react";
import "./Body.css";
import Left from "./Left/Left";
import Api from "../../utils/Api";
import Right from "./Right/Right";
const Body = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [dummyData, setDummyData] = useState([]);
  const [description, setDescription] = useState([]);

  let fetchedData = async (str) => {
    let datas = await Api(str);
    let addingCity = { ...datas, city: str, flag: true };
    setDescription([...description, addingCity.description]);
    setData([...data, addingCity]);
    setDummyData([...dummyData, addingCity]);
  };

  useEffect(() => {
    if (count == 1) {
      fetchedData("London");
    } else if (count == 2) {
      fetchedData("New York");
    } else if (count == 3) {
      fetchedData("Los Angeles");
    } else if (count == 4) {
      fetchedData("Las Vegas");
    } else if (count >= 5) {
      for (let i = 0; i < data.length; i++) {
        if (!data[i].flag) {
          setDummyData([...dummyData, data[i]]);
          data[i].flag = true;
          return;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="bodyContainer">
      <Left count={count} setCount={setCount} data={data} />
      <Right
        data={dummyData}
        originalData={data}
        setData={setDummyData}
        description={description}
        setDescription={setDescription}
      />
    </div>
  );
};

export default Body;
