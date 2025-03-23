import { Course } from "./Course.model";

export class Courses {
    items: Course[] = []

    get Courses(): Course[] {
        return this.items
    }

    getCourseItem(index: number): Course {
        return this.items[index]
    }
}