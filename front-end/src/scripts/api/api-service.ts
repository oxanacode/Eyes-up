import { Endpoint, Method } from '../../types/enums';
import { User, Lesson, Query } from '../../types/interfaces';
import {
  UsersList,
  LessonsList,
  UserData,
  LessonData,
} from '../../types/types';

class ApiService {
  private static url = 'http://127.0.0.1:3000/api/v1';

  private static getLessonsQuery(query: Query): string {
    if (query.language && query.complexity) {
      return `language=${query.language}&complexity=${query.complexity}`;
    }

    return `language=${query.language}`;
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

  public static async updateUser(
    id: string,
    userData: UserData
  ): Promise<User> {
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

  public static async getLessons(query: Query): Promise<LessonsList> {
    const response = await fetch(
      `${Endpoint.lessons}?${ApiService.getLessonsQuery(query)}}`
    );
    const data: Promise<LessonsList> = await response.json();

    return data;
  }

  public static async createLesson(lessonData: LessonData): Promise<Lesson> {
    const response = await fetch(`${Endpoint.lessons}`, {
      method: Method.post,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lessonData),
    });
    const data: Promise<Lesson> = await response.json();

    return data;
  }

  public static async getLesson(id: string): Promise<Lesson> {
    const response = await fetch(`${Endpoint.lessons}/${id}`);
    const data: Promise<Lesson> = await response.json();

    return data;
  }

  public static async updateLesson(
    id: string,
    lessonData: LessonData
  ): Promise<Lesson> {
    const response = await fetch(`${Endpoint.lessons}/${id}`, {
      method: Method.put,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lessonData),
    });
    const data: Promise<Lesson> = await response.json();

    return data;
  }

  public static async deleteLesson(id: string): Promise<Lesson> {
    const response = await fetch(`${Endpoint.lessons}/${id}`, {
      method: Method.delete,
    });
    const data: Promise<Lesson> = await response.json();

    return data;
  }
}

export default ApiService;
