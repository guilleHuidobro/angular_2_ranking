import {ApiService} from './api.service';
import {ApiElasticService} from './api-elastic.service';
import {ApiFirebaseService} from './api-firebase.service';

/**
 * Provides a basic set of injectables to use the {@link API} service in any application.
 *
 * The `API_PROVIDERS` should be included either in a component's injector,
 * or in the root injector when bootstrapping an application.
 */
export const API_PROVIDERS: any[] = [
    ApiService,
    ApiElasticService,
    ApiFirebaseService
];