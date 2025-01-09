async function fetchAndRace() {
  const sources = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/todos",
  ];

  try {
    const fetchPromises = sources.map((url) =>
      fetch(url).then((res) => res.json())
    );
    const allResponses = await Promise.all(fetchPromises);
    console.log("All Responses: ", allResponses);

    const fastestResponse = await Promise.race(fetchPromises);
    console.log("Fastest Response: ", fastestResponse);

    return { allResponses, fastestResponse };
  } catch (error) {
    console.log(error);
  }
}

fetchAndRace()
  .then(({ allResponses, fastestResponse }) => {
    console.log("Fetched all data: ", allResponses);
    console.log("Fastest Response: ", fastestResponse);
  })
  .catch((error) => console.log(error));
