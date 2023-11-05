const supertest = require('supertest')
const app = require('../app')

describe('GET /planets', () => {
    describe('get all planets', () => {
        it("200 status", async () => {
            await supertest(app).get("/planets").expect(200)
        })
    })
})