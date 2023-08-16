const Search = () => {
  return (
    <>
      <form>
        <label htmlFor="inputValue">Input Value</label>
        <input
          className="text-black"
          type="text"
          id="inputValue"
          name="inputValue"
        />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default Search;
