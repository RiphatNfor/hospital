// Sample medical records data
var medicalRecords = [
    { id: 1, patientName: "John Doe", dob: "1990-01-01", diagnosis: "Hypertension", treatment: "Medication", notes: "Follow up in 1 month." },
    { id: 2, patientName: "Jane Smith", dob: "1985-05-15", diagnosis: "Diabetes", treatment: "Insulin", notes: "Regular checkups." }
  ];

  function loadMedicalRecords() {
    var medicalRecordTableBody = document.getElementById("medicalRecordTableBody");
    medicalRecordTableBody.innerHTML = "";
    medicalRecords.forEach(function(record) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.patientName}</td>
        <td>${record.dob}</td>
        <td>${record.diagnosis}</td>
        <td>${record.treatment}</td>
        <td>${record.notes}</td>
        <td>
          <button class="button edit" onclick="editMedicalRecord(${record.id})">Edit</button>
          <button class="button delete" onclick="deleteMedicalRecord(${record.id})">Delete</button>
        </td>
      `;
      medicalRecordTableBody.appendChild(row);
    });
  }

  function addMedicalRecord() {
    var id = medicalRecords.length + 1;
    var patientName = prompt("Enter patient name:");
    var dob = prompt("Enter patient's date of birth (YYYY-MM-DD):");
    var diagnosis = prompt("Enter diagnosis:");
    var treatment = prompt("Enter treatment:");
    var notes = prompt("Enter notes:");

    if (patientName && dob && diagnosis && treatment && notes) {
      var newRecord = { id: id, patientName: patientName, dob: dob, diagnosis: diagnosis, treatment: treatment, notes: notes };
      medicalRecords.push(newRecord);
      loadMedicalRecords();
    } else {
      alert("Please fill in all fields.");
    }
  }

  function editMedicalRecord(id) {
    var recordIndex = medicalRecords.findIndex(function(record) {
      return record.id === id;
    });

    if (recordIndex !== -1) {
      var record = medicalRecords[recordIndex];
      var updatedRecord = {
        id: record.id,
        patientName: prompt("Enter patient name:", record.patientName),
        dob: prompt("Enter patient's date of birth (YYYY-MM-DD):", record.dob),
        diagnosis: prompt("Enter diagnosis:", record.diagnosis),
        treatment: prompt("Enter treatment:", record.treatment),
        notes: prompt("Enter notes:", record.notes)
      };

      if (updatedRecord.patientName && updatedRecord.dob && updatedRecord.diagnosis && updatedRecord.treatment && updatedRecord.notes) {
        medicalRecords[recordIndex] = updatedRecord;
        loadMedicalRecords();
      } else {
        alert("Please fill in all fields.");
      }
    }
  }

  function deleteMedicalRecord(id) {
    var confirmation = confirm("Are you sure you want to delete this record?");
    if (confirmation) {
      medicalRecords = medicalRecords.filter(function(record) {
        return record.id !== id;
      });
      loadMedicalRecords();
    }
  }

  // Load medical records when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    loadMedicalRecords();
  });