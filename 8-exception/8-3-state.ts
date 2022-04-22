{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'donw' | 'timeout'
  }
  type SuccessState = {
    result: 'success'
  }

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return;
    }
  }

  class UserService {
    constructor(private clinet: NetworkClient) {}

    login() {
      this.clinet.tryConnect();
      // 정확하게 에러를 잡지 못할거면 try catch 사용X
      // try {
      //   this.clinet.tryConnect();
      // } catch (error) {
      //   console.log("catched!");
      // }
      // login...
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 가장 정확하게 에러 핸들링을 할 수 있는 곳에 작성해야 함.
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const app = new App(service);
  app.run();
}