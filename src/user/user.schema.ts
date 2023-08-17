import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Company } from "src/company/company";

@Schema({ versionKey: false })
export class User extends Document {

    @Prop({ required: true })
    name: string;

    @Prop({ require: true, unique: true })
    login: string;

    @Prop()
    pw: string;

    @Prop()
    company: Company;
}

export const UserSchema = SchemaFactory.createForClass(User)