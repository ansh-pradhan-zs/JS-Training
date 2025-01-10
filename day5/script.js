function generateRandomDates(
  numDates = 10,
  startingYear = 2000,
  endingYear = 2025
) {
  const randomDates = [];

  const startDate = new Date(startingYear, 0, 1).getTime();
  const endDate = new Date(endingYear, 11, 31).getTime();

  for (let i = 0; i < numDates; i++) {
    const randomTimestamp =
      Math.floor(Math.random() * (endDate - startDate + 1)) + startDate;
    const randomDate = new Date(randomTimestamp);
    randomDates.push(randomDate.toISOString().split("T")[0]);
  }
  return randomDates;
}

const randomDates = generateRandomDates(10, 2021, 2024);

const ascDates = [...randomDates].sort(
  (prevDate, nextDate) => new Date(prevDate) - new Date(nextDate)
);
const descDates = [...randomDates].sort(
  (prevDate, nextDate) => new Date(nextDate) - new Date(prevDate)
);

const tbody = document.querySelector("tbody");

for (let i = 0; i < ascDates.length; i++) {
  const row = document.createElement("tr");
  const randDates = document.createElement("td");
  const ascCell = document.createElement("td");
  const descCell = document.createElement("td");

  randDates.textContent = randomDates[i];
  ascCell.textContent = ascDates[i];
  descCell.textContent = descDates[i];

  row.appendChild(randDates);
  row.appendChild(ascCell);
  row.appendChild(descCell);
  tbody.appendChild(row);
}
