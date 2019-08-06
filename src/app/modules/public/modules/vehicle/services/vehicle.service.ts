import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Vehicle } from "../models/vehicle.interface";
import { map, take } from "rxjs/operators";

@Injectable()
export class VehicleService {
  constructor(private httpService: HttpClient) {}

  salvarVeiculoEProprietario(veiculo) {
    return this.httpService.post(this.endpoint, veiculo).pipe();
  }
  salvarVeiculo(veiculo) {
    return this.httpService.post(this.endpoint, veiculo).pipe();
  }
  get endpoint() {
    return `${environment.API_URL}/veiculo`;
  }

  getVehicle(): Observable<Array<Vehicle>> {
    return this.httpService.get<any>(this.endpoint).pipe(
      map(vehicle => {
        console.log(vehicle);
        return vehicle.map(e => {
          return {
            modelo: e.veiculoModelo,
            chassi: e.veiculoChassi,
            renavam: e.veiculoRenavam,
            placa: e.veiculoPlaca,
            ano: e.veiculoAno,
            id: e.id
          };
        });
      })
    );
  }
  getVehicleAutoComplete(): Observable<Array<Vehicle>> {
    return this.httpService.get<any>(this.endpoint).pipe(
      map(vehicle => {
        console.log(vehicle);
        return vehicle.map(e => {
          return {
            placa: e.veiculoPlaca
          };
        });
      })
    );
  }
  getVehicleById(id: number): Observable<Vehicle> {
    return this.httpService
      .get<Vehicle>(`${this.endpoint}/${id}`)
      .pipe(take(1));
  }
  delete(id: number) {
    return this.httpService
      .delete<Vehicle>(`${this.endpoint}/${id}`)
      .pipe(take(1));
  }
}
