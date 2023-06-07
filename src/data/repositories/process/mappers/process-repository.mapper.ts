import { Mapper } from 'src/base/mapper';
import { ProcessEntity } from '../entities/process-entity';
import { ProcessModel } from 'src/domain/models/process.model';


export class ProcessImplementationRepositoryMapper extends Mapper<ProcessEntity, ProcessModel> {
    mapFrom(param: ProcessEntity): ProcessModel {
        return {
            id: param.id,
            code: param.code,
            description: param.nameProcess
        };
    }
    mapTo(param: ProcessModel): ProcessEntity {
        return {
            id: param.id,
            code: param.code,
            nameProcess: param.description,
        }
    }
}