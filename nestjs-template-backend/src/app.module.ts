import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule,GraphQLModule.forRoot({
    playground: process.env.MODE_ENV === "developtment" ? true : false,
    debug:(process.env.MODE_ENV === "developtment" ? true : false),
    autoSchemaFile: true,
  }),ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
