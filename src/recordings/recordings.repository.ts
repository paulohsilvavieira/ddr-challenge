import { Recordings } from './recordings.entity';
import { EntityRepository, Repository } from 'typeorm';
import { RecordingsDTO } from './interfaces/recordings.dto';

@EntityRepository(Recordings)
export class RecordingsRepository extends Repository<Recordings> {
  createRecording = async (recording: RecordingsDTO) => {
    return await this.save(recording);
  };

  findOneRecording = async (id: number) => {
    return this.findOneOrFail(id);
  };

  findAllRecording = async () => {
    return this.find();
  };

  updateRecording = async (id: number, recording: RecordingsDTO) => {
    return this.save({ ...recording, id });
  };

  removeRecording = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
