import { Mapper } from 'src/base/mapper';
import { TabEntity } from '../entities/menu-entity';
import { MenuModel, TabModel } from 'src/domain/models/menu.model';



export class MenuTabImplementationRepositoryMapper extends Mapper<TabEntity, TabModel> {
    mapFrom(param: TabEntity): TabModel {
        return {
            text: param.name,
            icon: param.icon,
            badge: param.badge
        };
    }
    mapTo(param: TabModel): TabEntity {
        return {
            name: param.text,
            icon: param.icon,
            badge: param.badge
        }
    }
}