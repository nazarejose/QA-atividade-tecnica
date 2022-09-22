describe("Test Account Creation", () => {
  beforeEach(() => {
    cy.visit("www.instagram.com");
  });

  it("criando conta", () => {
    cy.get('[data-testid="sign-up-link"] > ._7UhW9').click();

    cy.get(":nth-child(4) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "nucleus@nucleus.com",
      { delay: 100 }
    ); //numero ou email
    cy.get(":nth-child(5) > ._9GP1n > .f0n8F > ._2hvTZ").type("Nucleus Eti", {
      delay: 100,
    }); // full name
    cy.get(":nth-child(6) > ._9GP1n > .f0n8F > ._2hvTZ").type("nucleus_eti", {
      delay: 100,
    }); //username
    cy.get(":nth-child(7) > ._9GP1n > .f0n8F > ._2hvTZ").type("nucleus123", {
      delay: 100,
    }); //password

    cy.get(":nth-child(9) > .qF0y9 > .sqdOP").click();
  });
  it("email invalido", () => {
    cy.reload();

    cy.get('[data-testid="sign-up-link"] > ._7UhW9').click();

    cy.get(":nth-child(4) > ._9GP1n > .f0n8F > ._2hvTZ").type("nucleus223241", {
      delay: 100,
    }); //numero ou email
    cy.get(":nth-child(5) > ._9GP1n > .f0n8F > ._2hvTZ").type("Nucleus Eti", {
      delay: 100,
    }); // full name
    cy.get(":nth-child(6) > ._9GP1n > .f0n8F > ._2hvTZ").type("nucleus_eti", {
      delay: 100,
    }); //username
    cy.get(":nth-child(7) > ._9GP1n > .f0n8F > ._2hvTZ").type("nucleus123", {
      delay: 100,
    }); //password

    cy.get(":nth-child(9) > .qF0y9 > .sqdOP").click();
  });
  it("numero invalido", () => {
    cy.reload();

    cy.get('[data-testid="sign-up-link"] > ._7UhW9').click();

    cy.get(":nth-child(4) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "28292937429572",
      { delay: 100 }
    ); //numero ou email
    cy.get(":nth-child(5) > ._9GP1n > .f0n8F > ._2hvTZ").type("Nucleus Eti", {
      delay: 100,
    }); // full name
    cy.get(":nth-child(6) > ._9GP1n > .f0n8F > ._2hvTZ").type("nucleus_eti", {
      delay: 100,
    }); //username
    cy.get(":nth-child(7) > ._9GP1n > .f0n8F > ._2hvTZ").type("nucleus123", {
      delay: 100,
    }); //password

    cy.get(":nth-child(9) > .qF0y9 > .sqdOP").click();
  });
});

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("www.instagram.com");
  });

  it("usuario com email invalido", () => {
    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "nucleus@12341241.cyz",
      { delay: 100 }
    );
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type("senha123", {
      delay: 100,
    });
    cy.get(".kEKum > :nth-child(3)").click();
    cy.wait(4000);
  });

  it("numero de celular invalido", () => {
    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "00000000000000",
      { delay: 100 }
    );
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type("senha123", {
      delay: 100,
    });
    cy.get(".kEKum > :nth-child(3)").click();
    cy.wait(4000);
  });

  it("usuario e senha corretos", () => {
    cy.reload();

    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "nucleuscorrect@nucleus.com",
      { delay: 100 }
    );
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type("senhacorreta", {
      delay: 100,
    });
    cy.get(".kEKum > :nth-child(3)").click();
    cy.wait(4000);
  });

  it("usuario e senha incorretos", () => {
    cy.reload();

    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "nucleusincorrect@nucleus.com",
      { delay: 100 }
    );
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "senhaincorreta",
      { delay: 100 }
    );
    cy.get(".kEKum > :nth-child(3)").click();
    cy.wait(4000);
  });

  it("usuario correto e senha incorreta", () => {
    cy.reload();

    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "nucleuscorrect@nucleus.com",
      { delay: 100 }
    );
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "senhaincorreta",
      { delay: 100 }
    );
    cy.get(".kEKum > :nth-child(3)").click();
    cy.wait(4000);
  });

  it("usuario incorreto e senha correta", () => {
    cy.reload();

    cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "nucleusincorrect@nucleus.com",
      { delay: 100 }
    );
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type("senhacorreta", {
      delay: 100,
    });
    cy.get(".kEKum > :nth-child(3)", { force: true }).click();
    cy.wait(4000);
  });
});
