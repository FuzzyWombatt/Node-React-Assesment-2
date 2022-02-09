const { assert } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

const server = require("../server");

//should style
chai.should();

chai.use(chaiHttp);

describe("recycle items API", () => {
  //Test the GET route
  describe("GET /itemsIntake/", () => {
    it("It should get all the items in the database", (done) => {
      chai
        .request(server)
        .get("/itemsIntake/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });

    it("It should return a 500 error'", (done) => {
      chai
        .request(server)
        .get("/itemsIntake/61bfb4dacd9b6")
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
  //Test the GET by id route
  describe("GET /itemsIntake/", () => {
    it("It should get a single object by id from the database'", (done) => {
      const id = "61bfb4dacd9b60450e3965b6";
      chai
        .request(server)
        .get("/itemsIntake/"+id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.item.should.have.property("_id");
          res.body.item.should.have.property("name");
          res.body.item.should.have.property("description");
          res.body.item.should.have.property("recyclable");
          res.body.item.should.have.property("quantity");
          res.body.item.should.have.property("price");
          res.body.item.should.have.property("dateAdded");
          res.body.item.should.have.property("dateModified")
          res.body.item.should.have.property("datesModified")
          res.body.item.should.have.property("_id").eq(id);
          done();
        });
    });
  });
  //Test the POST route
  describe("POST /itemsIntake", () => {
    it("It should get the object created in the database'", (done) => {
      const data = {name: "test obj", recyclable: false, quantity: 30}
      chai
      .request(server)
      .post("/itemsIntake")
      .send(data)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("object");
        res.body.should.have.property("_id");
        res.body.should.have.property("name").eq('test obj');
        res.body.should.have.property("description");
        res.body.should.have.property("recyclable").eq(false);
        res.body.should.have.property("quantity").eq(30);
        res.body.should.have.property("dateAdded");
        res.body.should.have.property("dateModified")
        res.body.should.have.property("datesModified")
        res.body.should.have.property("_id");
        done();
      })
    })

    it("It should get errors from the express validator check and not post", (done) => {
      const data = {name: "test obj", recyclable: false}
      chai
      .request(server)
      .post("/itemsIntake")
      .send(data)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object")
        res.body.errors.should.be.a("array");
        done();
      })
    })
  })
  //Test the PUT route
  describe("PUT /itemsIntake/:id", () => {
    it("It should return the updated item'", (done) => {
      const data = {recyclable: false}
      const id = "61bfb4dacd9b60450e3965b6";
      chai
      .request(server)
      .put("/itemsIntake/"+id)
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("_id");
        res.body.should.have.property("name")
        res.body.should.have.property("description");
        res.body.should.have.property("recyclable").eq(false);
        res.body.should.have.property("quantity")
        res.body.should.have.property("dateAdded");
        res.body.should.have.property("dateModified")
        res.body.should.have.property("datesModified")
        res.body.should.have.property("_id");
        done();
      })
    })
  })
  //Test the DELETE route
  describe("DELETE /itemsIntake/:id", () => {
    it("It should Delete an item'", (done) => {
      const id = "61c010d953cb299979515929";
      chai
      .request(server)
      .delete("/itemsIntake/"+id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object")
        res.body.should.have.property("msg").eq(`item ${id} deleted`)
        done();
      })
    })
  })
});
