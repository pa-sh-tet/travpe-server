import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
// TODO доделать через Prisma
export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
	@prop({ unique: true })
	email: string;

	@prop()
	name: string;

	@prop({ default: false })
	isVerified: boolean;

	@prop()
	description: string;

	@prop()
	location: string;

	@prop()
	avatarPath: string;
}
