export default function TodoControl({ isCompleted, setIseCompleted }) {
  return (
    <div className="control">
      <button
        className="control-btn"
        onClick={() => setIseCompleted(false)}
        style={!isCompleted ? { backgroundColor: "darkgreen" } : {}}
      >
        Todo
      </button>
      <button
        className="control-btn"
        onClick={() => setIseCompleted(true)}
        style={isCompleted ? { backgroundColor: "darkgreen" } : {}}
      >
        Completed
      </button>
    </div>
  );
}
