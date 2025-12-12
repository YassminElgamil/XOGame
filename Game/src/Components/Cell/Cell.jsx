export default function Cell({ player, onButtonClick }) {
  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid white",
        }}
      >
        <button
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
          }}
          onClick={onButtonClick}
        >
          {player ?? ""}
        </button>
      </div>
    </>
  );
}
