import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-form-complet',
  templateUrl: './vehicle-form-complet.component.html',
  styleUrls: ['./vehicle-form-complet.component.css']
})
export class VehicleFormCompletComponent implements OnInit {
  completeForm: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute,
    
  ) { }

  ngOnInit() {


    this.completeForm = this.fb.group({
      proprietarioNome: ['', Validators.required],
      proprietarioCpfOuCnpj: ['', Validators.required],
      proprietarioRG: ['', Validators.required],
      proprietarioCNH: ['', Validators.required],
      proprietarioEnderecoRua: ['', Validators.required],
      proprietarioEnderecoNumero: ['', Validators.required],
      proprietarioEnderecoComplemento: ['', Validators.required],
      proprietarioEnderecoBairro: ['', Validators.required],
      proprietarioEnderecoCep: ['', Validators.required],
      veiculoChassi: ['', Validators.required],
      veiculoRenavam: ['', Validators.required],
      veiculoMarca: ['', Validators.required],
      veiculoModelo: ['', Validators.required],
      veiculoAno: ['', Validators.required]
    });

  }

  onSubmit() {
    alert('Thanks!');
  }

 /**
  *
  */
  submit() {
    this.vehicleService.salvarVeiculoEProprietario(this.completeForm.value).subscribe(res => {
      alert('Veiculo Cadastrada com Sucesso!');
      this.completeForm.reset();

    });
  }
  

  /**
   *
   */
  get currentId() {
    return this.activatedRoute.snapshot.params['id'];
  }


  loadByID(id) {
    return null;

  }




  hasError(field: string) {
    return this.completeForm.controls[field].hasError('required');
  }
}
