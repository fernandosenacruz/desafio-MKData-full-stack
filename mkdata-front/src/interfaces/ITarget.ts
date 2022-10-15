export interface ITargetRegister {
  name: { value: string };
  type: { value: string };
  registration: { value: string };
  group: { value: string };
  status: { value: string };
  taxpaperRegistration: { value: string };
}

export interface ITargetEdit {
  name: { value: string };
  group: { value: string };
  status: { value: string };
}

export interface ITargetLogin {
  user: { value: string };
  password: { value: string };
}
