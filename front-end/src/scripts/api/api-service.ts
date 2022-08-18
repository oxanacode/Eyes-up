import { Endpoint, Method } from '../../types/enums';
import { User, Lesson, Query } from '../../types/interfaces';
import { UsersList, LessonsList, QueriesList, UserData } from '../../types/types';

class ApiService {
  private static url = 'http://127.0.0.1:3000/api/v1';

  private static getQuery(queries: QueriesList): string {
    return queries.map((query: Query) => `${query.key}=${query.value}`).join('&');
  }

  public static async getUsers(): Promise<UsersList> {
    const response = await fetch(`${Endpoint.users}`);
    const data: Promise<UsersList> = await response.json();

    return data;
  }

  public static async getUser(login: string): Promise<User> {
    const response = await fetch(`${Endpoint.users}/${login}`);
    const data: Promise<User> = await response.json();

    return data;
  }

  public static async createUser(userData: UserData): Promise<User> {
    const response = await fetch(`${Endpoint.users}`, {
      method: Method.post,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data: Promise<User> = await response.json();

    return data;
  }

  public static async updateUser(id: string, userData: UserData): Promise<User> {
    const response = await fetch(`${Endpoint.users}/${id}`, {
      method: Method.put,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data: Promise<User> = await response.json();

    return data;
  }

  public static async deleteUser(id: string): Promise<User> {
    const response = await fetch(`${Endpoint.users}/${id}`, {
      method: Method.delete,
    });
    const data: Promise<User> = await response.json();

    return data;
  }
}

export default ApiService;