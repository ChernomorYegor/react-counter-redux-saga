const BASE_URL = 'http://localhost:3001';

class CounterService {
    async getItems() {
        const result = await fetch(`${BASE_URL}/counters`);

        return await result.json();
    }

    async setItem(counter) {
        console.log(counter);
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