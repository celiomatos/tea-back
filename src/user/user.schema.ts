import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Company } from "src/company/company.schema";

@Schema({ versionKey: false, timestamps: true })
export class User extends Document {

    @Prop({ required: [true, 'Nome do usuário é obrigatório'], trim: true })
    name: string;

    @Prop({ require: [true, 'Login do usuário é obrigatório'], unique: true, trim: true })
    login: string;

    @Prop({ min: [6, 'Senha deve conter no mínimo 6 caracteres'] })
    pw: string;

    @Prop()
    company: Company;
}

export const UserSchema = SchemaFactory.createForClass(User)