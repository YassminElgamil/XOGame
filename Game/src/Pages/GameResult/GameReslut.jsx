export default function GameReslut({ hasWinner, winnerPlayer }) {
  return (
    <>
      {hasWinner ? (
        <div>the winner is {winnerPlayer}</div>
      ) : (
        <div>it's a draw!</div>
      )}
    </>
  );
}
