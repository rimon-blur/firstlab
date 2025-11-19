document.getElementById('student-form').addEventListener('submit', addStudent);

function addStudent(event) {
    event.preventDefault();
    let studentName = document.getElementById('student-name').value;
    if (studentName === '') {
        alert('Please enter a student name');
        return;
    }

    let li = document.createElement('li');
    li.classList.add('student-item');

    let span = document.createElement('span');
    span.textContent = studentName;

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('btn-edit');
    editButton.addEventListener('click', function() { editStudent(li, span); });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn-delete');
    deleteButton.addEventListener('click', function() { deleteStudent(li); });

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById('student-list').appendChild(li);
    document.getElementById('student-name').value = '';
}
