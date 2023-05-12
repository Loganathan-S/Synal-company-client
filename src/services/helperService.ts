import CryptoJS from 'crypto-js'
import moment from 'moment';
import 'moment-timezone';

export const hashing = {
    encrypt(text: string, key: string = '@#363%*0o%98El@an'): string {
        const _text = moment().toISOString(true) + '|' + text + '|' + moment().unix();
        return CryptoJS.AES.encrypt(_text, key).toString();
    },
    decrypt(text: string, key: string = '@#363%*0o%98El@an') {
        const _decrypted = CryptoJS.AES.decrypt(text, key);
        let _decryptedText = '';

        if (_decrypted) {
            try {
                let _text = _decrypted.toString(CryptoJS.enc.Utf8);
                _decryptedText = _text.split('|')[1];
            } catch (e) {
                _decryptedText = '';
            }
        }

        return _decryptedText;
    }
}

export const setFormErrors = (error: any, setError: any) => {
    if (error.response?.data) {
        let setFocus = true;
        Object.entries(error.response?.data.error).forEach(([key, value]: any) => {
            setError(key, { type: 'required', message: value.toString() || '' }, { shouldFocus: setFocus });
            setFocus = false;
        });
    }
}