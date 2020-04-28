import { Tabulations } from './tabulations.entity';
import { EntityRepository, Repository } from 'typeorm';
import { TabulationsDTO } from './interfaces/tabulations.dto';

@EntityRepository(Tabulations)
export class TabulationsRepository extends Repository<Tabulations> {
  createTabulation = async (tabulation: TabulationsDTO) => {
    return await this.save(tabulation);
  };

  findOneTabulation = async (id: number) => {
    return this.findOneOrFail(id);
  };

  findAllTabulation = async () => {
    return this.find({});
  };

  updateTabulation = async (id: number, tabulation: TabulationsDTO) => {
    return this.save({ ...tabulation, id });
  };

  removeTabulation = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
