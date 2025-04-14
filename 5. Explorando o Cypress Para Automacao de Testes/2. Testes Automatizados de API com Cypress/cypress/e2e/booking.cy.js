describe('Test Suit - Booking API Testing', () => {
    it('1 - Get All booking ids', () => {
        cy.request({
            method: 'GET',
            url: '/booking',
            headers: {'Content-Type': 'application/json'}
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body).to.have.lengthOf.at.least(1)
            expect(response.body[0]).to.have.property('bookingid')
        })
    })
    it('2 - Get booking id by firstname', () => {
        cy.request({
            method: 'GET',
            url: '/booking',
            qs: {'firstname' : 'test'},
            headers: {'Content-Type': 'application/json'}  
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        })
    })

    it('4 - Get booking by id', () => {
        cy.request({
            method: 'GET',
            url:'/booking/1',
            headers:{'Accept': 'application/json'}
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.headers).to.have.property('content-type','application/json; charset')
            expect(response.body).to.be.an('object')
            expect(response.body).to.have.property('firstname').and.to.be.a('string')
            expect(response.body).to.have.property('lastname').and.to.be.a('string')
            expect(response.body).to.have.property('totalprice').and.to.be.a('number')
            expect(response.body).to.have.property('depositpaid').and.to.be.a('boolean')
            expect(response.body).to.have.property('bookingdate').and.to.be.an('object')
            expect(response.body.bookingdates).to.have.property('checkin').and.to.be.a('string')
            expect(response.body.bookingdates).to.have.property('checkout').and.to.be.a('string')
        })
    })

})