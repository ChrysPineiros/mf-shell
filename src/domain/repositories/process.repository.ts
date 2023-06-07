import { Observable } from 'rxjs';
import { ProcessModel } from '../models/process.model';


export abstract class ProcessRepository {
    abstract getProcessList(): Observable<ProcessModel[]>;
}