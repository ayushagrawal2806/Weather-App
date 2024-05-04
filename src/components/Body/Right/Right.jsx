import { useState } from "react";
import "./Right.css";
const Right = (props) => {
  let obj = props;
  let { data, setData, description, setDescription, originalData } = obj;
  const [searchValue, setSearchValue] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const handleInput = (index, value) => {
    const allDescription = [...description];
    allDescription[index] = value;
    setDescription(allDescription);
  };
  const handleDelete = (city) => {
    let filteredData = data.filter((element) => element.city != city);
    setData([...filteredData]);
    originalData.map((element) =>
      element.city == city ? (element.flag = false) : ""
    );
  };
  const handleSearch = () => {
    data.map((element) => {
      if (element.city == searchValue) {
        setSearchCity(element.city);
        setTimeout(() => {
          setSearchCity("");
        }, 3000);
      }
    });
  };
  return (
    <div className="right">
      <div className="search">
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="details">
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Description</th>
              <th>Temperature (ºC)</th>
              <th>Pressure (hPa)</th>
              <th>Data age (hrs)</th>
              <th className="delete"></th>
            </tr>
          </thead>

          <tbody>
            {data.length ? (
              data.map((element, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: searchCity == element.city ? "yellow" : "",
                  }}
                >
                  <td>{element.city}</td>
                  <td>
                    <input
                      type="text"
                      value={description[index]}
                      onChange={(e) => handleInput(index, e.target.value)}
                    />
                  </td>
                  <td>{element.temp_in_celsius}</td>
                  <td>{element.pressure_in_hPa}</td>
                  <td>
                    {Math.round(
                      ((new Date() - new Date(element.date_and_time)) /
                        (1000 * 60 * 60)) *
                        100
                    ) / 100}
                  </td>
                  <td onClick={() => handleDelete(element.city)}>
                    <img
                      src="https://img.icons8.com/?size=64&id=104338&format=png"
                      alt=""
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="nodata">
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Right;
