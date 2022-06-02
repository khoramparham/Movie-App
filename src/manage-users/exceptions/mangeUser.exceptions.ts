import { HttpException } from '@nestjs/common';

export class manangeUserException extends HttpException {
  constructor(status,message,data) {
    super(
        {
            status: status,
            success:false,
            date:new Date(),
            message:message,
            data:data
      },
      status
    );
  }
}