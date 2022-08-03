// function that returns the html of the historyTable with the rows inserted!
const historyTable = (rows) => {
    return `
        <tr class="history-header">
            <th>Class</th>
            <th>Date & Time</th>
        </tr>
        ${rows}
      `;
}

// function that returns the html of historyTable row, two values needed are the name of the class and the time
const historyTableRow = ({name, time}) => {
    return `<tr> <td>${name}</td> <td>${time}</td> </tr>`;
}