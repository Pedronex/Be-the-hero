const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });
  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "OVG",
        email: "contato@ovg.org.br",
        whatsapp: "62982977804",
        city: "Goiania",
        uf: "GO"
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should be able to create a new ONG for new Incident', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "OVG",
        email: "contato@ovg.org.br",
        whatsapp: "62982977804",
        city: "Goiania",
        uf: "GO"
      });
    const incident = await request(app)
      .post('/incidents')
      .set({ authorization: response.body.id })
      .send({
        title: "Caso 1",
        description: "Detalhes",
        value: 120
      });
    expect(incident.body).toHaveProperty('id');
    expect(incident.body.id).toEqual(1);
  });
});