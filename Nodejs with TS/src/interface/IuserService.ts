export default interface IUserInterface {
  createUser(userData: { name: string; email: string; password: string }): Promise<any>;
  login(email: string, password: string): Promise<any>;
  getUserByEmail(email: string): Promise<any>;
  getAllUsers(): Promise<any>;
  getUserbyUId(UId: string): Promise<any>;

}