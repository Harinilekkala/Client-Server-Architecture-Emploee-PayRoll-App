window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHTML();
});
const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let emplist = empJSON();
    for (const emp of emplist)
    {
     innerHtml = `${innerHtml}
        <tr>
        <td><img class="profile" alt=""
            src="${emp._profilePic}">
        </td>
        <td>${emp._name}</td>
        <td>${emp._gender}</td>
        <td><div class="dept-label">${emp._department}</div></td>
        <td>${emp._salary}</td>
        <td>${emp._startDate}</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete"
                src="Images/trashbin.jpeg">
            <img id="1" onclick="update(this)" alt="edit"
                src="Images/add.jpeg">
        </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const empJSON = () => {
    let empPayrollList = [
        {
            _name: 'Harini',
            _gender: 'Female',
            _department: 'Engineering',
            _salary: '400000',
            _startDate: '10 May 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../Images/icon2.jpg'
        },
        {
            _name: 'Harshini Potnuri',
            _gender: 'Female',
            _department: 'Engineering',
            _salary: '400000',
            _startDate: '29 March 2022',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../Images/icon3.jpg'
        }
    ];
    return empPayrollList;
}