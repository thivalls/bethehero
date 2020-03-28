const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Ong', () => {
  beforeEach(async () => {
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  it('should create a new ong', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "teste",
        email: "teste@teste.com.br",
        whatsapp: "16991597346",
        city: "Ibaté",
        uf: "SP",
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});

