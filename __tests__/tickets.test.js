const { getTicketByName,calculateTotalFromTicketNames } = require("../src/tickets.js");

const data = require('../data/tickets.js');

describe('getTicketByName' () => {
    it("what happens when the name is Randy", () => {
        // test code
   expect(getTicketByName(data, 'Randy')).tobe(null);
    });

    it("what happens when the nameis adult matinee", () => {
        // test code
        expect(getTicketByName(data, 'Adult Matinee')).tostrictEqual([
            { id: "6ha0u__54", name: "Adult Matinee", priceInCents: 949 },
            { id: "dlb8ka9N_", name: "Senior Matinee", priceInCents: 839 },
            { id: "FSxeEmcoJ", name: "Child Matinee", priceInCents: 669 },
            { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 },
            { id: "TQh2t6HWf", name: "Senior Regular", priceInCents: 1219 },
            { id: "B8v5R2nVQ", name: "Child Regular", priceInCents: 1069 },
        ];)
    });
});