import { SimpleResponse } from './simple_response/index';
import { ImageResponse } from './image_response/index';
import { RandomChoiceResponse } from './random_choice_response/index';
import { HelpResponse } from './help/index';
import { CustomResponse } from './custom_response/index';
// Import and call 'setup handlers' on everything the bot should respond to
export function setupHandlers(bot: any): void {
    HelpResponse.setupHandlers(bot);
    ImageResponse.setupHandlers(bot);
    SimpleResponse.setupHandlers(bot);
    RandomChoiceResponse.setupHandlers(bot);
    CustomResponse.setupHandlers(bot);
}
