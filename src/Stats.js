function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start putting some items in your list</em>
        </p>
      );
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything, Ready To Go 🛬"
            : `💼 You have ${numItems} items in you list, and you already packed
          ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    );
  }

  export default Stats;