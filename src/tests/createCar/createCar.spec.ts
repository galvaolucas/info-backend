import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.use(chaiHttp);

describe(('POST api/cars'), () => {
    it(('It should be possible to create a car'), (done) => {

        let car = {
            brand: 'Audi',
            model: 'A3',
            plate: 'JHG-6576',
            year: 2021,
            renavam: '886236123182',
            chassis: '2381273182312801',
        }

       chai.request(app)
       .post('/cars')
       .send(car)
       .end((response) => {
            response.should.have.status(200);
            response.body.should.be.a('object');
            response.should.be.a('json');
       })

       done();
    })
})