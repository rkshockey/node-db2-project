exports.seed = async function (knex) {
    await knex('cars').truncate
    await knex('cars').insert([
        { vin: '12345678911131517', make: 'Pontiac', model: 'Grand Prix', mileage: 123 },
        { vin: '16141210987654321', make: 'Ford', model: 'Town&Country', mileage: 456 }
    ])
}