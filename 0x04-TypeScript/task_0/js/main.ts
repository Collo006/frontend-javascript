interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}


const student1:  Student={
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
}

const student2: Student = {
    firstName: 'Collins',
    lastName: 'Tunge',
    age: 20,
    location: 'Kenya'
}

//students Array
const studentsList: Student[]= [student1, student2];

//create table
const table= document.createElement("table");

//table header
const headerRow = document.createElement("tr");
["First Name","Location"].forEach((text)=>{
    const th = document.createElement("th");
    th.textContent=text;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

//create a row for each student
studentsList.forEach((student)=>{
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell =  document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row)
})

//add the table to the document
document.body.appendChild(table);