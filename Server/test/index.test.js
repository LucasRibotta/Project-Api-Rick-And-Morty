const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", (id) => {
describe('GET /rickandmorty/character/:id', () =>{
    it('GET Responde con status: 200', async ()=> {
     await agent.get('/rickandmorty/character/1').expect(200);
     expect(200)
    });
    it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=> {
        const response = await  agent.get('/rickandmorty/character/1').expect(200);
        expect(200);
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('species')
        expect(response.body).toHaveProperty('gender')
        expect(response.body).toHaveProperty('status')
        expect(response.body).toHaveProperty('origin')
        expect(response.body).toHaveProperty('image')
    });
    it('Si hay un error responde con status: 500', async () => {
        await agent.get('/rickandmorty/character/errorenelid').expect(500);
        
    })
})
describe("GET /rickandmorty/login", ()=> {
    it('validando el access, debe responder con true si las credenciales son correctas',async () => {
      const {body} =  await agent.get('/rickandmorty/login/?email=lucas@henry.com&&password=lucas123')
      expect(body.access).toBe(true)
    })
})
} )