export const environment = {
	production: false,

	apiUrl: false
		? 'http://13.127.90.176:3148/api/v1/'
		: /* 'http://localhost:3148/api/v1/' */ 'http://54.201.160.69:3148/api/v1/',
	stagingUrl: 'http://localhost:4200/',
	allRouteTemp: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error'; // Included with Angular CLI.
