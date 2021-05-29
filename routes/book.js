const book_getter = async () => {
  const fetchdata = fetch("https://openlibrary.org/works/OL45883W.json")
    .then((res) => res.json())
    .then((result) => {
      return result;
    });

  await fetchdata().catch((error) => {
    return { status: error };
  });
};

export default book_getter;
