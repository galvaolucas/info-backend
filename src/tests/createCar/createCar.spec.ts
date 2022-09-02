import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.use(chaiHttp);

describe(('GET api/cars'), () => {
    it(('It should be possible to get all the cars'), () => {
       chai.request(app)
       .post('/cars')
       .end((response) => {
            response.should.have.status(200);
            response.should.have.
            response.should.be.a('json');
       })
    })
})