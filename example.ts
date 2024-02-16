namespace Test {
  type THobby = {
    name: string
    duration: number
  }
  
  enum UserType {
    moderator,
    user
  }

  interface IPerson {
    name: string
    age: number
  }

  interface IUser extends IPerson {
    userType: UserType
    readonly password: string 
    hobby?: Array<THobby> | THobby
  }

  export class User implements IUser {
    public password: string = '12345';

    constructor(
      public name: string,
      public age: number,
      public userType: UserType,
      public hobby: Array<THobby> | THobby
    ) {}
  }
}