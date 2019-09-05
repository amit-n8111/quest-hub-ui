export enum TASK_SECTION {
    TASK_OVERVIEW,
    TASK_DESCRIPTION,
    TASK_DETAILS,
    TASK_SCREENING,
    REVIEW_AND_POST
}

export enum TASK_MESSAGES {
    SUCCESS_MESSAGES = 'Task Successfully Created!',
    ERROR_MESSAGES = 'Something Went Wrong!',
    TASK_APPLICATION_SEND = 'Task Application Send!'
}

export enum TASK_STATUSES {
    DRAFT = 1,
    PUBLISHED = 2,
    ASSIGNED = 3,
    IN_PROGRESS = 4,
    COMPLETED = 5
}
