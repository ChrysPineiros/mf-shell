import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcessRepository } from 'src/domain/repositories/process.repository';
import { ProcessImplementationRepositoryMapper } from './process/mappers/process-repository.mapper';
import { ProcessModel } from 'src/domain/models/process.model';



const listProcess: ProcessModel[] = [
    { id: 1, code: '614', description: 'ELECCIONES SECCIONALES 2023' },
    { id: 2, code: '500', description: 'PROCESOS PERMANENTES' },
    { id: 3, code: '128', description: 'ELECCIONES PRESIDENCIALES Y LEGISLATIVAS ANTICIPADAS - 2023' },
    { id: 4, code: '127', description: 'CONSULTA POPULAR YASUNI' },
    { id: 5, code: '126', description: 'CONSULTA POPULAR COCHO ANDINO' },
    { id: 6, code: '614', description: 'ELECCIONES SECCIONALES 2023' },
    { id: 7, code: '500', description: 'PROCESOS PERMANENTES' },
    { id: 8, code: '128', description: 'ELECCIONES PRESIDENCIALES Y LEGISLATIVAS ANTICIPADAS - 2023' },
    { id: 9, code: '127', description: 'CONSULTA POPULAR YASUNI' },
    { id: 10, code: '126', description: 'CONSULTA POPULAR COCHO ANDINO' },
    { id: 11, code: '614', description: 'ELECCIONES SECCIONALES 2023' },
    { id: 12, code: '500', description: 'PROCESOS PERMANENTES' },
    { id: 13, code: '128', description: 'ELECCIONES PRESIDENCIALES Y LEGISLATIVAS ANTICIPADAS - 2023' },
    { id: 14, code: '127', description: 'CONSULTA POPULAR YASUNI' },
    { id: 15, code: '126', description: 'CONSULTA POPULAR COCHO ANDINO' },
    { id: 16, code: '614', description: 'ELECCIONES SECCIONALES 2023' },
    { id: 17, code: '500', description: 'PROCESOS PERMANENTES' },
    { id: 18, code: '128', description: 'ELECCIONES PRESIDENCIALES Y LEGISLATIVAS ANTICIPADAS - 2023' },
    { id: 19, code: '127', description: 'CONSULTA POPULAR YASUNI' },
    { id: 20, code: '126', description: 'CONSULTA POPULAR COCHO ANDINO' },
];

@Injectable({
    providedIn: 'root',
})
export class ProcessImplementationRepository extends ProcessRepository {
    processMapper = new ProcessImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getProcessList(): Observable<ProcessModel []> {
        /* return this.http
            .post<MenuEntity>('https://example.com/menu', {params})
            .pipe(map(this.processMapper.mapFrom)); */
        return of(listProcess);
    }
}