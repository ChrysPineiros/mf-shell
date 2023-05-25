import { Mapper } from 'src/base/mapper';
import { MenuEntity } from '../entities/menu-entity';
import { MenuModel } from 'src/domain/models/menu.model';



export class MenuImplementationRepositoryMapper extends Mapper<MenuEntity, MenuModel> {
    mapFrom(param: MenuEntity): MenuModel {
        return {
            ID: param.id,
            name: param.name,
            categoryId: param.categories
        };
    }
    mapTo(param: MenuModel): MenuEntity {
        return {
            id: param.ID,
            name: param.name,
            categories: param.categoryId
        }
    }
}