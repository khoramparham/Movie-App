import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';




async function bootstrap() {
  const app = await NestFactory.create(AppModule , { cors: true });
  const config = new DocumentBuilder()
    .addServer('http://localhost:8080')
    .setTitle('Movie App')
    .setDescription('Movie App Backend')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  try{
    await app.listen(8080);
  }
  catch(err){
    console.log(err);
  }
}
bootstrap();
