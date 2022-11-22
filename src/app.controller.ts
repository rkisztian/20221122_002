import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    const users = [
      ['Geri', 1, -100],
      ['Feri', 0, 50],
      ['Bence', 1, 0],
      ['Peti', 0, -100],
      ['Kiki', 0, 500],
    ];

    return { title: 'Felhasználói adatok', data: users };
  }
}
