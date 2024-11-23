function Menu({ selectedVideo }) {
  // handler function
  const clickHandler = (event) => {
    const name = event.target.value;
    selectedVideo(name);
  };
  return (
    <form onClick={clickHandler}>
      <input type="radio" name="src" value="antelope" /> Antelope
      <input type="radio" name="src" value="snail" /> Snail
      <input type="radio" name="src" value="cat" /> Cat
      <input type="radio" name="src" value="spider" /> Spider
    </form>
  );
}

export default Menu;
