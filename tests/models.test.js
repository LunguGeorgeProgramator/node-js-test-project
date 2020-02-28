let { Medic, Clinic } = require('../models');

describe("Test for model Medic", () => {
    it("Should get values from mock", async () => {
        // create
        const medic = await Medic.create({
            nume: "Test Medic create",
            specializare: "Dentist",
            clinicId: null
        });
        expect(medic.nume).toEqual('Test Medic create');
        expect(medic.specializare).toEqual('Dentist');
        expect(medic.clinicId).toEqual(null);
        // update
        await Medic.update({
                nume: "Test Medic Update",
                specializare: "Dermatolog",
            }, { where: { id: medic.id } });

        const medicUp = await Medic.findOne({ order: [['createdAt', 'DESC']] }, { where: { id: medic.id }});
        expect(medicUp.nume).toEqual('Test Medic Update');
        expect(medicUp.specializare).toEqual('Dermatolog');
        // delete
        await Medic.destroy({ where: {id: medicUp.id }});
    });
});

describe("Test for model Clinic", () => {
    it("Should get values from mock", async () => {
        // create
        const clinic = await Clinic.create({
            nume: "Test Clinic create",
            locatie: "Iasi"
        });
        expect(clinic.nume).toEqual('Test Clinic create');
        expect(clinic.locatie).toEqual('Iasi');
        // update
        await Clinic.update({
                nume: "Test Clinic Update",
                locatie: "Pitesti",
            }, { where: { id: clinic.id } });
        const clinicUp = await Clinic.findOne({ order: [['createdAt', 'DESC']] }, { where: { id: clinic.id }});
        expect(clinicUp.nume).toEqual('Test Clinic Update');
        expect(clinicUp.locatie).toEqual('Pitesti');
        // delete
        await Clinic.destroy({ where: {id: clinicUp.id }});
    });
});