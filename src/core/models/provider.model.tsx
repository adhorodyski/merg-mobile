import { PROVIDERS, IProviderDetails } from '@core/models';

export interface IProvider {
    name: PROVIDERS;
    details: IProviderDetails[];
}
