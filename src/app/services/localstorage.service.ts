import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    setItem(key: string, value: any, storageType?: boolean) {
        if (storageType) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }

    getItem(key: string, defaultValue?: any, storageType?: boolean): any {
        const rememberMe = localStorage.getItem('rememberMe');
        if (storageType || rememberMe) {
            if (localStorage.getItem(key)) {
                return JSON.parse(localStorage.getItem(key));
            } else {
                return defaultValue;
            }
        } else {
            if (sessionStorage.getItem(key)) {
                return JSON.parse(sessionStorage.getItem(key));
            } else {
                return defaultValue;
            }
        }

    }

    removeItem(key: string) {
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
    }

    getUserType(): string {
        if (this.getItem('user') && this.getItem('user').userType) {
            return this.getItem('user').userType;
        }
        return '';
    }

}
