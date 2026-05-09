import { HydratedDocument } from "mongoose"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop({required:true})
    nombre:String;

    @Prop()
    apellido:String;

    @Prop({required:true, unique:true})
    email:String;
}

export const UsersSchema = SchemaFactory.createForClass(User);
