import { Request, Response } from 'express';
import { container } from 'tsyringe';

import listProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvailability = container.resolve(
      listProviderMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availability);
  }
}
