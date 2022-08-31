import ICreateCarsDTO from '../dtos/ICreateCarsDTO';
import Car from '../infra/typeorm/entities/Car';

export default interface ICarsRepository {
  create(data: ICreateCarsDTO): Promise<Car>;
  list(): Promise<Car[]>
  findById(id: string): Promise<Car>
  delete(id: string): Promise<void>;
  update(id: string, data: ICreateCarsDTO): Promise<Car>;
}
