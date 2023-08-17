import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ versionKey: false })
export class Company extends Document {

    @Prop({ required: true })
    name: string;
}