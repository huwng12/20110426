const supertest = require('supertest')
const app = require('../app')

const launch = {
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: ('December 27, 2030'),
    target:'Kepler-442 b',
}

describe('GET /launches', () => {
    describe('get all launches', () => {
        it("200 status", async () => {
            await supertest(app).get("/launches").expect(200)
        })
    })
})

describe('POST /launches', () => {
    describe('create launches', () => {
        it("200 status", async () => {
            let newFlightNumber = 100;
            await supertest(app).post("/launches").send(launch).expect(201 , {
                flightNumber: newFlightNumber  + 1,
                mission: 'Kepler Exploration X',
                rocket: 'Explorer IS1',
                launchDate: ('2030-12-26T17:00:00.000Z'),
                target:'Kepler-442 b',
                customer:['Zero to Mastery', 'NASA'],
                upcoming: true,
                success: true,
            })
        })
    })
    describe('create launches with missing argument', () => {
        it("400 status", async () => {
            await supertest(app).post("/launches").expect(400)
        })
    })
})

describe('DELETE /launches/:id', () => {
    describe('delete all launches', () => {
        it("200 status", async () => {
            const launchID = 100
            await supertest(app).delete(`/launches/${launchID}`).expect(200)
        })
    })
})