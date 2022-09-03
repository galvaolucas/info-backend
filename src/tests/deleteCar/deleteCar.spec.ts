import chai from 'chai';
import chaiHttp from 'chai-http';
import Car from '../../modules/cars/infra/typeorm/entities/Car';
import app from '../../server';

chai.use(chaiHttp);
chai.should();

describe(('DELETE api/cars'), () => {

    it(('It should be possible to delete one car'), async () => {

        let car = new Car();
        
        car.brand = 'Audi',
        car.model = 'A3',
        car.plate = 'JHG-6576',
        car.year = 2021,
        car.renavam = '886236123182',
        car.chassis = '2381273182312801',
        
       chai.request(app)
       .delete(`/cars/${car}`)
       .end((response) => {
            response.should.have.status(200);
            response.should.be.a('json');
       })
    })
})