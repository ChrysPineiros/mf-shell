import { UseCase } from 'src/base/use-case';
import { MenuModel } from '../models/menu.model';
import { Observable } from 'rxjs';
import { ProcessModel } from '../models/process.model';
import { ProcessRepository } from '../repositories/process.repository';


export class ProcessUseCase implements UseCase<{}, ProcessModel[]> {

    constructor(private processRepository: ProcessRepository) { }

    execute(): Observable<ProcessModel[]> {
        return this.processRepository.getProcessList();
    }
}