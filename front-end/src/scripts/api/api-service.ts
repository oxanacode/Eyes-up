import { Endpoint, Lang, Method } from '../../types/enums';
import { User, Lesson, Test, Query } from '../../types/interfaces';
import { UsersList, LessonsList, UserData, LessonData, TestsList, TestData, RandomTest } from '../../types/types';

class ApiService {
  private static url = 'http://127.0.0.1:3000/api/v1';

  private static getLessonsQuery(query: Query): string {
    if (query.layout && query.complexity) {
      return `layout=${query.layout}&complexity=${query.complexity}`;
    }

    return `layout=${query.layout}`;
  }

  public static async getUsers(): Promise<UsersList> {
    const response = await fetch(`${ApiService.url}${Endpoint.users}`);
    const data: Promise<UsersList> = await response.json();

    return data;
  }

  public static async checkUser(login: string): Promise<number> {
    const response = await fetch(`${ApiService.url}${Endpoint.users}/${login}`);

    const data: number = await response.status;

    return data;
  }

  public static async getUser(login: string): Promise<User> {
    const response = await fetch(`${ApiService.url}${Endpoint.users}/${login}`);
    const data: Promise<User> = await response.json();

    return data;
  }

  public static async createUser(userData: UserData): Promise<User> {
    const response = await fetch(`${ApiService.url}${Endpoint.users}`, {
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
    const response = await fetch(`${ApiService.url}${Endpoint.users}/${id}`, {
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
    const response = await fetch(`${ApiService.url}${Endpoint.users}/${id}`, {
      method: Method.delete,
    });
    const data: Promise<User> = await response.json();

    return data;
  }

  public static async getLessons(query: Query): Promise<LessonsList> {
    const response = await fetch(`${ApiService.url}${Endpoint.lessons}?${ApiService.getLessonsQuery(query)}`);
    const data: Promise<LessonsList> = await response.json();

    return data;
  }

  public static async getLesson(id: string): Promise<Lesson> {
    const response = await fetch(`${ApiService.url}${Endpoint.lessons}/${id}`);
    const data: Promise<Lesson> = await response.json();

    return data;
  }

  public static async createLesson(lessonData: LessonData): Promise<Lesson> {
    const response = await fetch(`${ApiService.url}${Endpoint.lessons}`, {
      method: Method.post,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lessonData),
    });
    const data: Promise<Lesson> = await response.json();

    return data;
  }

  public static async updateLesson(id: string, lessonData: LessonData): Promise<Lesson> {
    const response = await fetch(`${ApiService.url}${Endpoint.lessons}/${id}`, {
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
    const response = await fetch(`${ApiService.url}${Endpoint.lessons}/${id}`, {
      method: Method.delete,
    });
    const data: Promise<Lesson> = await response.json();

    return data;
  }

  public static async getTests(): Promise<TestsList> {
    const response = await fetch(`${ApiService.url}${Endpoint.tests}`);
    const data: Promise<TestsList> = await response.json();

    return data;
  }

  public static async getTest(language: Lang): Promise<RandomTest> {
    const response = await fetch(`${ApiService.url}${Endpoint.tests}?language=${language}`);
    const data: Promise<RandomTest> = await response.json();

    return data;
  }

  public static async createTest(testData: TestData): Promise<Test> {
    const response = await fetch(`${ApiService.url}${Endpoint.tests}`, {
      method: Method.post,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    const data: Promise<Test> = await response.json();

    return data;
  }

  public static async updateTest(id: string, testData: TestData): Promise<Test> {
    const response = await fetch(`${ApiService.url}${Endpoint.tests}/${id}`, {
      method: Method.put,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    const data: Promise<Test> = await response.json();

    return data;
  }

  public static async deleteTest(id: string): Promise<Test> {
    const response = await fetch(`${ApiService.url}${Endpoint.tests}/${id}`, {
      method: Method.delete,
    });
    const data: Promise<Test> = await response.json();

    return data;
  }
}

export default ApiService;
