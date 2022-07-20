let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
  if (SiteProperties.use_local_storage.match("true"))
  {
    getEmployeeData();
  }
  else
  {
    getDataFromServer();
  }
});

function getEmployeeData()
{
  empPayrollList = localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
  processEmployeePayrollDataResponse();
}

function processEmployeePayrollDataResponse()
{
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHTML();
  localStorage.removeItem('editEmp');
}

function getDataFromServer() 
{
  makeServiceCall("GET", SiteProperties.server_url, true)
      .then(responseText =>{
          empPayrollList = JSON.parse(responseText);
          processEmployeePayrollDataResponse();
      })
      .catch(error => {
          console.log("Get Error Status: " + JSON.stringify(error));
          empPayrollList = [];
          processEmployeePayrollDataResponse();
      });
}

const createInnerHTML = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                     "<th>Salary</th><th>Start Date</th><th>Action</th>";
    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" alt="" 
                  src="${empPayrollData._profilePic}">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${stringifyDate(empPayrollData._startDate)}</td>
        <td>
          <img id="${empPayrollData.id}" onclick="remove(this)" 
             src="../Images/trashbin.jpeg" alt="delete">
          <img id="${empPayrollData.id}" onclick="update(this)" 
             src="../Images/add.jpeg" alt="edit">
        </td>
      </tr>
      `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }