import { Matchings } from './matchings.entity';
import { EntityRepository, Repository } from 'typeorm';
import { MatchingsDTO } from './interfaces/matchings.dto';

@EntityRepository(Matchings)
export class MatchingsRepository extends Repository<Matchings> {
  createMatching = async (matching: MatchingsDTO) => {
    return await this.save(matching);
  };

  findOneMatching = async (id: number) => {
    return this.findOneOrFail(id);
  };

  findAllMatching = async () => {
    return this.find({});
  };

  updateMatching = async (id: number, matching: MatchingsDTO) => {
    return this.save({ ...matching, id });
  };

  removeMatching = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
