import "./Left.css";
const Left = (props) => {
  let obj = props;
  let { count, setCount , data } = obj;
  const handleCount = () => {
      setCount(count + 1);
  };
  
  return (
    <div className="left">
      <button onClick={handleCount}>Get Weather</button>
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border:  data.length && data[0]?.flag && "5px solid rgb(2, 201, 2)" }}>
              London
            </td>
          </tr>
          <tr>
            <td style={{ border: data.length && data[1]?.flag && "5px solid rgb(2, 201, 2)" }}>
              New York
            </td>
          </tr>
          <tr>
            <td style={{ border: data.length && data[2]?.flag && "5px solid rgb(2, 201, 2)" }}>
              Los Angeles
            </td>
          </tr>
          <tr>
            <td style={{ border: data.length && data[3]?.flag && "5px solid rgb(2, 201, 2)" }}>
              Las Vegas
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Left;
