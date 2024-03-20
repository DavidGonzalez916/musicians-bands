const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const nirvana = await Band.create({name: "Nirvana", genre:"Alternative Rock"});       
        expect(nirvana.name).toBe("Nirvana");
        expect(nirvana.genre).toBe("Alternative Rock");
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const hayley = await Musician.create({name:"Hayley", instrument:"Voice"});
        expect(hayley.name).toBe('Hayley');
        expect(hayley.instrument).toBe("Voice");
    })

    test('can create a Song', async () =>{
        const zombie = await Song.create({title:"Zombie", year:1994, length: 306 });
        expect(zombie.title).toBe("Zombie");
        expect(zombie.year).toBe(1994);
        expect(zombie.length).toBe(306);
    });

    test('can update a Band', async () => {
        // TODO - test updating a band
        const nirvana = await Band.findByPk(1);
        const paramore = await nirvana.update({name: "Paramore"});
        expect(paramore.name).toBe("Paramore");
    })

    test('can update a Musician', async () => {
        // TODO - test updating a 
        const hayley = await Musician.findByPk(1)
        const updatedHayley = await hayley.update({instrument: "Guitar"});
        expect(updatedHayley.instrument).toBe('Guitar');
    })

    test('can update a song', async () =>{
        const zombie = await Song.findByPk(1)
        const still = await zombie.update({title:"Still Into You"});
        expect(still.title).toBe("Still Into You");
        
    })

    test('can delete a Band', async () => {
        let nirvana = await Band.findByPk(1)
        await nirvana.destroy();
        const destroyed = await Band.findByPk(1);
        expect(destroyed).toBe(null);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const hayley = await Musician.findByPk(1);
        await hayley.destroy();
        const destroyed = await Musician.findByPk(1);
        expect(destroyed).toBe(null);
    })
    test('can delete a song', async () => {
        const zombie = await Song.findByPk(1);
        await zombie.destroy();
        const destroyed = await Song.findByPk(1);
        expect(destroyed).toBe(null);
    })
})