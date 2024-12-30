const { Publisher } = require('./models');

async function testCreatePublisher() {
    try {
        const publisher = await Publisher.create({ name: 'Penguin Books' });
        console.log('Created Publisher:', publisher);
    } catch (error) {
        console.error('Error creating publisher:', error);
    }
}

testCreatePublisher();
