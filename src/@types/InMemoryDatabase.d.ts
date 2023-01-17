
declare module 'in-memory-database'{
   

    function parseJson(key, value) {
        try {
            return JSON.parse(value);
        }
        catch (err) {
            throw new SyntaxError(`Failed to parse value of ${key}, try passing a raw option to get the raw value`);
        }
    }
    export class InMemoryDatabase {
        constructor() {
            this.cache = {};
        }
        set(key, value) {
            const strValue = JSON.stringify(value);
            const index = key;
            this.cache[index] = strValue;
        }
        get(key) {
            const index = key;
            if (!this.cache[index]) {
                return undefined;
            }
            return parseJson(key, this.cache[index]);
        }
        mget(keys) {
            const state = {};
            for (const key of keys) {
                const index = key;
                if (!this.cache[index]) {
                    state[key] = undefined;
                }
                else {
                    state[key] = parseJson(key, this.cache[index]);
                }
            }
            return state;
        }
        mset(keyValueMap) {
            for (const [key, value] of keyValueMap) {
                this.set(key, value);
            }
        }
        keys() {
            return Object.keys(this.cache);
        }
        has(key) {
            return this.cache.hasOwnProperty(key);
        }
        delete(key) {
            const index = key;
            delete this.cache[index];
        }
        mdelete(keys) {
            for (const key of keys) {
                const index = key;
                if (this.cache[index]) {
                    delete this.cache[index];
                }
            }
        }
        flush() {
            this.cache = {};
        }
    }
}
