import { ConfigService } from '@nestjs/config';
export const getMongoConfig = async (ConfigService) => ({
	uri: ConfigService.MONGO_URI
});
