import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../../../utils/local-storage/local-storage";

describe('local-storage', () => {
    it('should return null if there is no value in local storage', () => {
        const result = getLocalStorage<string>('test');
        expect(result).toBeNull();
    });
    
    it('should return the value from local storage', () => {
        localStorage.setItem('test', JSON.stringify('test'));
        const result = getLocalStorage<string>('test');
        expect(result).toBe('test');
    });

    it('should return the value from local storage', () => {
        localStorage.setItem('test', JSON.stringify('test'));
        const result = getLocalStorage<string>('test');
        expect(result).toBe('test');
    });

    it('should remove the value from local storage', () => {
        localStorage.setItem('test', JSON.stringify('test'));
        removeLocalStorage('test');
        const result = getLocalStorage<string>('test');
        expect(result).toBeNull();
    });

    it('should set the value in local storage', () => {
        const result = setLocalStorage<string>('test', 'test');
        expect(result).toBe('test');
        expect(localStorage.getItem('test')).toBe(JSON.stringify('test'));
    });
});