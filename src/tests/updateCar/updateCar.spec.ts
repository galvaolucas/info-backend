import chai from 'chai';
import chaiHttp from 'chai-http';
import Car from '../../modules/cars/infra/typeorm/entities/Car';
import app from '../../server';

chai.use(chaiHttp);
chai.should();

describe(('PUT api/cars'), () => {
    it(('It should be update to updarte a car'), (done) => {

        let car = new Car();
        
        car.brand = 'Audi Updated',
        car.model = 'A3',
        car.plate = 'JHG-6576',
        car.year = 2021,
        car.renavam = '886236123182',
        car.chassis = '2381273182312801',

       chai.request(app)
       .put(`/cars/${car}`)
       .send({car})
       .set('Accept','application/json')
       .end((error,response) => {
        try {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.should.be.a('json');
        } catch (err) {
            console.log(error);
        }
       })

       return done();
    })
})