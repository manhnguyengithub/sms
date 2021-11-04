
export class GetMobileOperatingSystemService {
    getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return 'wp'
        }

        if (/android/i.test(userAgent)) {
            return 'android';
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            return 'iphone';
        }

        else {
            return 'iphone'
        }
    }
}
