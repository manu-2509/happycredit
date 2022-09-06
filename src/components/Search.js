import "./styles.css";
export const Search = ({ sbar, setSbar, res, handleChange }) => {
  const hideDiv = () => {
    setSbar(false);
  };
  return (
    <div className="search">
      <input
        className="searchbox"
        type="text"
        placeholder="Search here....."
        onChange={(e) => handleChange(e.target.value)}
      />
      {sbar ? (
        <div className="result" onMouseLeave={() => hideDiv()}>
          {res.map((e) => {
            return <div key={e}>{e}</div>;
          })}
        </div>
      ) : null}
    </div>
  );
};
