// function that returns the html of the historyTable with the rows inserted!
const historyTable = (rows) => {
  return `
        <tr>
            <th class="table-header">Class</th>
            <th class="table-header">Date & Time</th>
            <th class="table-header"></th>
        </tr>
        ${rows}
      `;
};

// function that returns the html of historyTable row, two values needed are the name of the class and the time
const historyTableRow = (item, index) => {
  return `<tr class='class-history-row'>
    <td>${item.name}</td>
    <td>${item.time}</td>
    <td class='history-btn-container'> 
        <button class='delete-btn' data-index="${index}"> Delete </button>
    </td>
    </tr>`;
};
