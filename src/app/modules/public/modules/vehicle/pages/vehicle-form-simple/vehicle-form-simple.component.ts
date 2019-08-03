import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form-simple',
  templateUrl: './vehicle-form-simple.component.html',
  styleUrls: ['./vehicle-form-simple.component.css']
})
export class VehicleFormSimpleComponent implements OnInit {
  veiculoForm: FormGroup;

  constructor(
    private vehicleService: VehicleService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.veiculoForm = this.fb.group({
      veiculoChassi: ['', Validators.required],
      veiculoRenavam: ['', Validators.required],
      veiculoMarca: ['', Validators.required],
      veiculoModelo: ['', Validators.required],
      veiculoAno: ['', Validators.required],
      proprietarioCpfOuCnpj: ['', Validators.required]
    });
  }
  submit() {

    this.vehicleService.salvarVeiculo(this.veiculoForm.value).subscribe(res => {
      alert('Veiculo Cadastrado com Sucesso');
      this.veiculoForm.reset();
    });
  }

  hasError(field: string) {
    return this.veiculoForm.controls[field].hasError('required');
  }

}
