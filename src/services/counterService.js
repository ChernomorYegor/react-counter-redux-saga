const BASE_URL = 'https://github.com/ChernomorYegor/react-counter-redux-saga/blob/master/src/db/db.json';

class CounterService {
    async getItems() {
        const result = await fetch(`${BASE_URL}/counters`);

        return await result.json();
    }

    async setItem(counter) {
        const result = await fetch(`${BASE_URL}/counters/${counter.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(counter)
        });
        return await result.json();
    }
}

export default new CounterService();