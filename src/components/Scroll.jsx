const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "70vh",
        WebkitScrollbar: "none",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
