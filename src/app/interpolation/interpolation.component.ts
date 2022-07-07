import { Component, OnInit } from '@angular/core';
import { patientDetails } from '../interpolation/patientDetails';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
 // PatientDetail: patientDetails = new patientDetails();

  // public patientDetailsobj : patientDetails = { patientDetails:[] };;
  
  //variables
  public Patient_Id: string = 'p_1';
  public patient_Name: string = 'P_Test';
  public patient_Wardno: string = 'Floor-2';
  //array

  public hospitalBranchLocationDetails: string[] = [
    'Hyderbad',
    'Bengulur',
    'Karimnagar',
  ];

  //object

  
  // PatientDetail.addressLine = "Test1";


  //array of objects
  public hospitalDetails: patientDetails[] = [
    {
      "patient_ID": 'Test',
      "addressLine": 'Test',
      "age":"tes",
      "addressLine2":"Test",
      "patientName":"Testing"
    },
    {
      "patient_ID": 'Test',
      "addressLine": 'Test1',
      "age":"tes",
      "addressLine2":"Test",
      "patientName":"Testing"
    },
  ];
  //Json Object
}
