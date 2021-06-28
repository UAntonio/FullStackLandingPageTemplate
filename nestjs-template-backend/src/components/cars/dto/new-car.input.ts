import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";


@InputType()
export class NewCarInput{
    @Field()
    name:string;

    @Field((type) => Int)
    @Max(10000)
    @Min(500)
    monthlyPrice:number;

    @Field((type) => Int)
    @Max(2000)
    @Min(10,{message: "Daily price can't be that low"})
    dailyPrice:number;
    
    @Field()
    mileage:string;
    
    @Field()
    gas:string;
    
    @Field()
    gearType:string;
    
    @Field()
    thumbnailUrl:string;
}