/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AccountModelSchema */
export interface AccountModelSchema {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Account Id
   * The unique identifier for the account. Has a default value of a new UUID4.
   * @format uuid4
   */
  account_id?: string;
  /**
   * Email
   * If not provided, a random email will be generated.
   * @maxLength 512
   */
  email?: string;
  /**
   * Username
   * @maxLength 128
   */
  username?: string;
  account_type?: AccountType;
  /**
   * First Name
   * @maxLength 256
   */
  first_name: string;
  /** Middle Name */
  middle_name?: string | null;
  /**
   * Last Name
   * @maxLength 256
   */
  last_name: string;
  /** Registration Code */
  registration_code?: string;
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean;
  /**
   * Is Email Verified
   * @default false
   */
  is_email_verified?: boolean;
  /** Permissions */
  permissions: AccountPermission[];
  /** Connections */
  connections: ConnectionModel[];
  registration_email_code: RegistrationEmailCode | null;
}

/** AccountPermission */
export interface AccountPermission {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Name */
  name: string;
  /**
   * Description
   * @default "No description"
   */
  description?: string;
  /**
   * Account Permission Id
   * @format uuid4
   */
  account_permission_id?: string;
}

/** AccountRepresentation */
export interface AccountRepresentation {
  /**
   * Account Id
   * @format uuid4
   */
  account_id: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /** Username */
  username: string;
  /** First Name */
  first_name: string;
  /** Middle Name */
  middle_name?: string | null;
  /** Last Name */
  last_name: string;
}

/** AccountSearchResultVerbose */
export interface AccountSearchResultVerbose {
  meta: PaginationMetaInformation;
  /** Content */
  content: VerboseAccountRepresentation[];
}

/** AccountSetConnectionsInput */
export interface AccountSetConnectionsInput {
  /** Connections */
  connections: string[];
}

/** AccountSetPermissionsInput */
export interface AccountSetPermissionsInput {
  /** Permissions */
  permissions: string[];
}

/** AccountType */
export enum AccountType {
  Admin = "admin",
  Student = "student",
  Teacher = "teacher",
  Overseer = "overseer",
}

/** Body_create_file_common_file_post */
export interface BodyCreateFileCommonFilePost {
  /**
   * File
   * @format binary
   */
  file: File;
}

/** ChatAddMember */
export interface ChatAddMember {
  /** Account Ids */
  account_ids: string[];
}

/** ChatCreate */
export interface ChatCreate {
  /** Name */
  name?: string | null;
  /** Participants */
  participants?: string[] | null;
}

/** ChatLeaveResponse */
export interface ChatLeaveResponse {
  /** Message */
  message: string;
}

/** ChatParticipantsResponse */
export interface ChatParticipantsResponse {
  meta: PaginationMetaInformation;
  /** Content */
  content: AccountRepresentation[];
}

/** ChatRepresentation */
export interface ChatRepresentation {
  /**
   * Chat Id
   * @format uuid4
   */
  chat_id: string;
  /** Name */
  name: string;
  /**  Links */
  _links: Record<string, string>;
}

/** ChatUpdate */
export interface ChatUpdate {
  /** Name */
  name?: string | null;
}

/** ChatsSearchResponse */
export interface ChatsSearchResponse {
  meta: PaginationMetaInformation;
  /** Content */
  content: ChatRepresentation[];
}

/** CommentPaginatedResponse */
export interface CommentPaginatedResponse {
  meta: PaginationMetaInformation;
  /** Content */
  content: CommentRepresentation[];
}

/** CommentRepresentation */
export interface CommentRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** File Id */
  file_id?: string | null;
  /** Text */
  text?: string | null;
  /**
   * Task Id
   * @format uuid4
   */
  task_id: string;
  /**
   * Sender Id
   * @format uuid4
   */
  sender_id: string;
  /**
   * Comment Id
   * @format uuid4
   */
  comment_id: string;
}

/** ConfirmEmail */
export interface ConfirmEmail {
  /**
   * Email Code
   * The code from email to confirm the registration.
   */
  email_code: string;
}

/** ConfirmEmailResponse */
export interface ConfirmEmailResponse {
  /**
   * Status
   * @default "success"
   */
  status?: string;
}

/** ConnectionBase */
export interface ConnectionBase {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Group Id */
  group_id?: string | null;
  /** Faculty Id */
  faculty_id?: string | null;
  /** Department Id */
  department_id?: string | null;
  /**
   * Connection Id
   * @format uuid
   */
  connection_id?: string;
}

/** ConnectionCreate */
export interface ConnectionCreate {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Group Id */
  group_id?: string | null;
  /** Faculty Id */
  faculty_id?: string | null;
  /** Department Id */
  department_id?: string | null;
}

/** ConnectionModel */
export interface ConnectionModel {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Group Id */
  group_id?: string | null;
  /** Faculty Id */
  faculty_id?: string | null;
  /** Department Id */
  department_id?: string | null;
  /**
   * Connection Id
   * @format uuid
   */
  connection_id?: string;
}

/** ConnectionRepresentation */
export interface ConnectionRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Group Id */
  group_id?: string | null;
  /** Faculty Id */
  faculty_id?: string | null;
  /** Department Id */
  department_id?: string | null;
  /**
   * Connection Id
   * @format uuid
   */
  connection_id?: string;
}

/** ConnectionsPaginatedResponse */
export interface ConnectionsPaginatedResponse {
  meta: PaginationMetaInformation;
  /** Content */
  content: ConnectionRepresentation[];
}

/** CreateAccountModel */
export interface CreateAccountModel {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Account Id
   * The unique identifier for the account. Has a default value of a new UUID4.
   * @format uuid4
   */
  account_id?: string;
  /**
   * Email
   * If not provided, a random email will be generated.
   * @maxLength 512
   */
  email?: string;
  /**
   * Username
   * @maxLength 128
   */
  username?: string;
  account_type?: AccountType;
  /**
   * First Name
   * @maxLength 256
   */
  first_name: string;
  /** Middle Name */
  middle_name?: string | null;
  /**
   * Last Name
   * @maxLength 256
   */
  last_name: string;
  /** Registration Code */
  registration_code?: string;
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean;
  /**
   * Is Email Verified
   * @default false
   */
  is_email_verified?: boolean;
  /**
   * Password
   * @maxLength 512
   */
  password?: string;
  /** Permissions */
  permissions: string[];
  /** Connections */
  connections: string[];
}

/** CreateComment */
export interface CreateComment {
  /** Created At */
  created_at?: null;
  /** Updated At */
  updated_at?: null;
  /** File Id */
  file_id?: string | null;
  /** Text */
  text?: string | null;
  /** Task Id */
  task_id?: string | null;
  /** Sender Id */
  sender_id?: string | null;
}

/** CreateDepartment */
export interface CreateDepartment {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Name */
  name: string;
  /** Description */
  description?: string | null;
}

/** CreateFaculty */
export interface CreateFaculty {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Department Id
   * @format uuid4
   */
  department_id: string;
  /** Name */
  name: string;
  /** Description */
  description?: string | null;
}

/** CreatePermission */
export interface CreatePermission {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  name: Permissions;
  /**
   * Description
   * @default "No description"
   */
  description?: string;
}

/** CreateProject */
export interface CreateProject {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of an object
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
}

/** CreateTask */
export interface CreateTask {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of the task.
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Priority
   * Priority of the task. Higher number means that this task is more important.
   * @default 0
   */
  priority?: number;
  /**
   * Reviewer
   * Account ID of the reviewer of the task.
   */
  reviewer?: string | null;
  /**
   * Due Date
   * Due date of the task (optional).
   */
  due_date?: string | null;
  /**
   * Project Id
   * Project ID of the project this task belongs to.
   * @format uuid4
   */
  project_id: string;
}

/** CreateUserProject */
export interface CreateUserProject {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of an object
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /**
   * Account Links
   * @default []
   */
  account_links?: string[];
}

/** DepartmentRepresentation */
export interface DepartmentRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /** Name */
  name: string;
  /** Description */
  description?: string | null;
  /**
   * Department Id
   * @format uuid4
   */
  department_id: string;
  /** Faculties Count */
  faculties_count: number;
  /**  Links */
  _links: Record<string, Record<string, string>>;
}

/** DepartmentSearchOutput */
export interface DepartmentSearchOutput {
  meta: PaginationMetaInformation;
  /** Content */
  content: DepartmentRepresentation[];
}

/** ErrorSchema */
export interface ErrorSchema {
  /** Detail */
  detail: string;
}

/** Faculty */
export interface Faculty {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Department Id
   * @format uuid4
   */
  department_id: string;
  /** Name */
  name: string;
  /** Description */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id?: string;
}

/** FacultyRepresentation */
export interface FacultyRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Department Id
   * @format uuid4
   */
  department_id: string;
  /** Name */
  name: string;
  /** Description */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id?: string;
  /** Groups Count */
  groups_count: number;
  /**  Links */
  _links: Record<string, Record<string, string>>;
}

/** FacultySearchOutput */
export interface FacultySearchOutput {
  meta: PaginationMetaInformation;
  /** Content */
  content: FacultyRepresentation[];
}

/** FileRepresentation */
export interface FileRepresentation {
  /**
   * File Id
   * @format uuid4
   */
  file_id: string;
  /** File Name */
  file_name: string;
  /** File Type */
  file_type: string;
  /** File Size */
  file_size: number;
  /**  Links */
  _links: Record<string, string>;
}

/** GetToken */
export interface GetToken {
  /** Username */
  username: string;
  /** Password */
  password: string;
  /**
   * Access Token Ttl Min
   * The time-to-live of the access token in minutes. (Optional)
   */
  access_token_ttl_min?: number | null;
}

/** Group */
export interface Group {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /** Name */
  name: string;
  /** Description */
  description?: string | null;
  /**
   * Group Id
   * @format uuid4
   */
  group_id?: string;
}

/** GroupCreate */
export interface GroupCreate {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /** Name */
  name: string;
  /** Description */
  description?: string | null;
}

/** GroupSearchOutput */
export interface GroupSearchOutput {
  meta: PaginationMetaInformation;
  /** Content */
  content: Group[];
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** MessageCreate */
export interface MessageCreate {
  /**
   * Chat Id
   * @format uuid4
   */
  chat_id: string;
  /** Text */
  text?: string | null;
  /** File Id */
  file_id?: string | null;
}

/** MessageRepresentation */
export interface MessageRepresentation {
  /**
   * Chat Id
   * @format uuid4
   */
  chat_id: string;
  /**
   * Message Id
   * @format uuid4
   */
  message_id: string;
  /**
   * Sender Id
   * @format uuid4
   */
  sender_id: string;
  /** Text */
  text?: string | null;
  /** File Id */
  file_id?: string | null;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /**  Links */
  _links: Record<string, string>;
}

/** MessageSeenByRepresentation */
export interface MessageSeenByRepresentation {
  /**
   * Account Id
   * @format uuid4
   */
  account_id: string;
  /**
   * Message Id
   * @format uuid4
   */
  message_id: string;
  /**
   * At Time
   * @format date-time
   */
  at_time: string;
  account_details: AccountRepresentation;
}

/** MessageSeenByResponse */
export interface MessageSeenByResponse {
  /** Seen By */
  seen_by: MessageSeenByRepresentation[];
}

/** MessageUpdate */
export interface MessageUpdate {
  /** Text */
  text?: string | null;
  /** File Id */
  file_id?: string | null;
}

/** MessagesSearchResponse */
export interface MessagesSearchResponse {
  meta: PaginationMetaInformation;
  /** Content */
  content: MessageRepresentation[];
}

/** PaginationMetaInformation */
export interface PaginationMetaInformation {
  /** Total */
  total: number;
  /** Page */
  page: number;
  /** Page Size */
  page_size: number;
  /** Total Pages */
  total_pages: number;
}

/**
 * PermissionBase
 * Describes a permission that can be assigned to an account.
 */
export interface PermissionBase {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  name: Permissions;
  /**
   * Description
   * @default "No description"
   */
  description?: string;
  /**
   * Account Permission Id
   * @format uuid4
   */
  account_permission_id?: string;
}

/** Permissions */
export enum Permissions {
  Admin = "admin",
  AccountsSearch = "accounts:search",
  Projects = "projects",
  ProjectsRead = "projects:read",
  ProjectsUpdate = "projects:update",
  ProjectsDelete = "projects:delete",
  ProjectsCreate = "projects:create",
  Tasks = "tasks",
  TasksRead = "tasks:read",
  TasksUpdate = "tasks:update",
  TasksEditor = "tasks_editor",
  TasksEditorUpdate = "tasks_editor:update",
  TasksEditorDelete = "tasks_editor:delete",
  TasksEditorCreate = "tasks_editor:create",
  Comments = "comments",
  CommentsRead = "comments:read",
  CommentsUpdate = "comments:update",
  CommentsDelete = "comments:delete",
  CommentsCreate = "comments:create",
  Chat = "chat",
  ChatRead = "chat:read",
  ChatUpdate = "chat:update",
  ChatAddMember = "chat:add_member",
  ChatCreate = "chat:create",
  Messages = "messages",
  MessagesRead = "messages:read",
  MessagesUpdate = "messages:update",
  MessagesDelete = "messages:delete",
  MessagesCreate = "messages:create",
}

/** ProjectAssignBody */
export interface ProjectAssignBody {
  /** Students Ids */
  students_ids?: string[] | null;
  /** Teachers Ids */
  teachers_ids?: string[] | null;
  /** Group Ids */
  group_ids?: string[] | null;
}

/** ProjectAssignOutput */
export interface ProjectAssignOutput {
  /** Students Assigned */
  students_assigned: number;
}

/** ProjectRepresentation */
export interface ProjectRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of an object
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /**
   * Project Id
   * @format uuid4
   */
  project_id: string;
  /**
   * Tasks
   * Tasks of the project
   */
  tasks: TaskRepresentationShortDescription[];
}

/** ProjectRepresentationFull */
export interface ProjectRepresentationFull {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of an object
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /**
   * Project Id
   * @format uuid4
   */
  project_id: string;
  /**
   * Tasks
   * Tasks of the project
   */
  tasks: TaskRepresentationShortDescription[];
}

/** ProjectSearchOutput */
export interface ProjectSearchOutput {
  meta: PaginationMetaInformation;
  /** Content */
  content: ShortProjectRepresentation[];
}

/** RefreshTokenInput */
export interface RefreshTokenInput {
  /** Refresh Token */
  refresh_token?: string | null;
}

/** RegisterAccount */
export interface RegisterAccount {
  /**
   * Email
   * The email of the account.
   * @format email
   */
  email: string;
  /**
   * Username
   * Set a username for the account. (Optional)
   */
  username?: string | null;
  /**
   * Registration Code
   * The registration code for the account.
   */
  registration_code: string;
  /**
   * Password
   * The password of the account.
   * @minLength 8
   */
  password: string;
}

/** RegisterAccountResponse */
export interface RegisterAccountResponse {
  /**
   * Status
   * @default "success"
   */
  status?: string;
}

/** RegistrationEmailCode */
export interface RegistrationEmailCode {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Account Id
   * To which account the registration code belongs to.
   * @format uuid
   */
  account_id: string;
  /**
   * Code
   * The registration code, used to verify the email.
   */
  code?: string;
  /**
   * Is Used
   * If the code has been used.
   * @default false
   */
  is_used?: boolean;
}

/**
 * SamuraiErrorModel
 * @example {"detail":"Resource Not Found"}
 */
export interface SamuraiErrorModel {
  /** Detail */
  detail: any[] | object | string;
}

/** ShortProjectRepresentation */
export interface ShortProjectRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of an object
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /**
   * Project Id
   * @format uuid4
   */
  project_id: string;
  /** Tasks Count */
  tasks_count: number;
  /**  Links */
  _links: Record<string, Record<string, string>>;
}

/** ShortUserProjectRepresentation */
export interface ShortUserProjectRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of an object
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /**
   * Project Id
   * @format uuid4
   */
  project_id: string;
  /** Account Links */
  account_links: UserProjectLinkRepresentation[];
  /** Tasks Count */
  tasks_count: number;
  /**  Links */
  _links: Record<string, Record<string, string>>;
}

/** TaskRepresentation */
export interface TaskRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of the task.
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Priority
   * Priority of the task. Higher number means that this task is more important.
   * @default 0
   */
  priority?: number;
  /**
   * Reviewer
   * Account ID of the reviewer of the task.
   */
  reviewer?: string | null;
  /**
   * Due Date
   * Due date of the task (optional).
   */
  due_date?: string | null;
  /**
   * Project Id
   * Project ID of the project this task belongs to.
   * @format uuid4
   */
  project_id: string;
  /**
   * Task Id
   * @format uuid4
   */
  task_id: string;
}

/** TaskRepresentationShortDescription */
export interface TaskRepresentationShortDescription {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of the task.
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Priority
   * Priority of the task. Higher number means that this task is more important.
   * @default 0
   */
  priority?: number;
  /**
   * Reviewer
   * Account ID of the reviewer of the task.
   */
  reviewer?: string | null;
  /**
   * Due Date
   * Due date of the task (optional).
   */
  due_date?: string | null;
  /**
   * Project Id
   * Project ID of the project this task belongs to.
   * @format uuid4
   */
  project_id: string;
  /**
   * Task Id
   * @format uuid4
   */
  task_id: string;
}

/** TaskSearchOutput */
export interface TaskSearchOutput {
  meta: PaginationMetaInformation;
  /** Content */
  content: TaskRepresentation[];
}

/** TaskState */
export enum TaskState {
  Open = "open",
  Resubmit = "resubmit",
  InProgress = "in_progress",
  InReview = "in_review",
  Done = "done",
}

/** Token */
export interface Token {
  /** Access Token */
  access_token: string;
  /**
   * Token Type
   * @default "Bearer"
   */
  token_type?: string;
}

/** UserProjectLinkRepresentation */
export interface UserProjectLinkRepresentation {
  /**
   * Account Id
   * @format uuid4
   */
  account_id: string;
  account_details: AccountRepresentation;
}

/** UserProjectRepresentation */
export interface UserProjectRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of an object
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Faculty Id
   * @format uuid4
   */
  faculty_id: string;
  /**
   * Project Id
   * @format uuid4
   */
  project_id: string;
  /** Tasks */
  tasks: UserTaskRepresentation[];
  /** Account Links */
  account_links: UserProjectLinkRepresentation[];
  /** Tasks Count By Status */
  tasks_count_by_status: Record<string, number>;
}

/** UserProjectSearchOutput */
export interface UserProjectSearchOutput {
  meta: PaginationMetaInformation;
  /** Content */
  content: ShortUserProjectRepresentation[];
}

/** UserTaskCreate */
export interface UserTaskCreate {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of the task.
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Priority
   * Priority of the task. Higher number means that this task is more important.
   * @default 0
   */
  priority?: number;
  /**
   * Reviewer
   * Account ID of the reviewer of the task.
   */
  reviewer?: string | null;
  /**
   * Due Date
   * Due date of the task (optional).
   */
  due_date?: string | null;
  /**
   * Project Id
   * @format uuid4
   */
  project_id: string;
  state: TaskState;
}

/** UserTaskRepresentation */
export interface UserTaskRepresentation {
  /**
   * Created At
   * @format date-time
   */
  created_at?: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at?: string;
  /**
   * Name
   * Name of the task.
   */
  name: string;
  /**
   * Description
   * Description of an object (optional)
   */
  description?: string | null;
  /**
   * Priority
   * Priority of the task. Higher number means that this task is more important.
   * @default 0
   */
  priority?: number;
  /**
   * Reviewer
   * Account ID of the reviewer of the task.
   */
  reviewer?: string | null;
  /**
   * Due Date
   * Due date of the task (optional).
   */
  due_date?: string | null;
  /**
   * Project Id
   * Project ID of the project this task belongs to.
   * @format uuid4
   */
  project_id: string;
  /**
   * Task Id
   * @format uuid4
   */
  task_id: string;
  state: TaskState;
  /** Comment Count */
  comment_count: number;
}

/** UserTaskSearchOutput */
export interface UserTaskSearchOutput {
  meta: PaginationMetaInformation;
  /** Content */
  content: UserTaskRepresentation[];
}

/** UserTaskStatusUpdateInput */
export interface UserTaskStatusUpdateInput {
  state: TaskState;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/** VerboseAccountRepresentation */
export interface VerboseAccountRepresentation {
  /**
   * Account Id
   * @format uuid4
   */
  account_id: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /** Username */
  username: string;
  /** First Name */
  first_name: string;
  /** Middle Name */
  middle_name?: string | null;
  /** Last Name */
  last_name: string;
  /** Is Active */
  is_active: boolean;
  account_type: AccountType;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://localhost:8000",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
          method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Samurai Backend
 * @version 0.12.7
 * @baseUrl http://localhost:8000
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  health = {
    /**
     * No description
     *
     * @name HealthHealthGet
     * @summary Health
     * @request GET:/health
     */
    healthHealthGet: (params: RequestParams = {}) =>
      this.request<Record<string, string>, any>({
        path: `/health`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * @description Create a pair of Access and Refresh tokens. Latter is stored in a cookie.
     *
     * @tags auth
     * @name LoginAuthTokenPost
     * @summary Login
     * @request POST:/auth/token
     */
    loginAuthTokenPost: (data: GetToken, params: RequestParams = {}) =>
      this.request<Token, ErrorSchema | HTTPValidationError>({
        path: `/auth/token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Refresh the Access token using the Refresh token stored in a cookie.
     *
     * @tags auth
     * @name RefreshTokenAuthRefreshPost
     * @summary Refresh Token
     * @request POST:/auth/refresh
     */
    refreshTokenAuthRefreshPost: (
      data: RefreshTokenInput | null,
      params: RequestParams = {}
    ) =>
      this.request<Token, ErrorSchema | HTTPValidationError>({
        path: `/auth/refresh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the Refresh token and the session.
     *
     * @tags auth
     * @name LogoutAuthLogoutPost
     * @summary Logout
     * @request POST:/auth/logout
     */
    logoutAuthLogoutPost: (params: RequestParams = {}) =>
      this.request<any, ErrorSchema>({
        path: `/auth/logout`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * @description Create a new account.
     *
     * @tags admin
     * @name CreateAccountAdminAccountCreatePost
     * @summary Create Account
     * @request POST:/admin/account/create
     * @secure
     */
    createAccountAdminAccountCreatePost: (
      data: CreateAccountModel,
      params: RequestParams = {}
    ) =>
      this.request<AccountModelSchema, HTTPValidationError>({
        path: `/admin/account/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get account by ID.
     *
     * @tags admin
     * @name GetAccountAdminAccountAccountIdGet
     * @summary Get Account
     * @request GET:/admin/account/{account_id}
     * @secure
     */
    getAccountAdminAccountAccountIdGet: (
      accountId: string | null,
      query?: {
        /** Email */
        email?: string | null;
        /** Username */
        username?: string | null;
        /** Account Type */
        account_type?: AccountType | null;
        /** Registration Code */
        registration_code?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountModelSchema, HTTPValidationError>({
        path: `/admin/account/${accountId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Search for accounts.
     *
     * @tags admin
     * @name GetAllAccountsAdminAccountGet
     * @summary Get All Accounts
     * @request GET:/admin/account
     * @secure
     */
    getAllAccountsAdminAccountGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Account Id */
        account_id?: string | null;
        /** Email */
        email?: string | null;
        /** Username */
        username?: string | null;
        /** Account Type */
        account_type?: AccountType | null;
        /** Registration Code */
        registration_code?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountSearchResultVerbose, HTTPValidationError>({
        path: `/admin/account`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update permissions for the specified account
     *
     * @tags admin
     * @name SetPermissionsEndpointAdminAccountAccountIdPermissionsPost
     * @summary Set Permissions Endpoint
     * @request POST:/admin/account/{account_id}/permissions
     * @secure
     */
    setPermissionsEndpointAdminAccountAccountIdPermissionsPost: (
      accountId: string,
      data: AccountSetPermissionsInput,
      params: RequestParams = {}
    ) =>
      this.request<AccountModelSchema, HTTPValidationError>({
        path: `/admin/account/${accountId}/permissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update permissions for the specified account
     *
     * @tags admin
     * @name SetConnectionsEndpointAdminAccountAccountIdConnectionsPost
     * @summary Set Connections Endpoint
     * @request POST:/admin/account/{account_id}/connections
     * @secure
     */
    setConnectionsEndpointAdminAccountAccountIdConnectionsPost: (
      accountId: string,
      data: AccountSetConnectionsInput,
      params: RequestParams = {}
    ) =>
      this.request<AccountModelSchema, HTTPValidationError>({
        path: `/admin/account/${accountId}/connections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Execute a search among connections
     *
     * @tags admin
     * @name GetConnectionsAdminConnectionsGet
     * @summary Get Connections
     * @request GET:/admin/connections
     * @secure
     */
    getConnectionsAdminConnectionsGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Connection Id */
        connection_id?: string | null;
        /** Group Id */
        group_id?: string | null;
        /** Faculty Id */
        faculty_id?: string | null;
        /** Department Id */
        department_id?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ConnectionsPaginatedResponse, HTTPValidationError>({
        path: `/admin/connections`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new connection
     *
     * @tags admin
     * @name CreateConnectionAdminConnectionsPost
     * @summary Create Connection
     * @request POST:/admin/connections
     * @secure
     */
    createConnectionAdminConnectionsPost: (
      data: ConnectionCreate,
      params: RequestParams = {}
    ) =>
      this.request<ConnectionBase, HTTPValidationError>({
        path: `/admin/connections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new department
     *
     * @tags admin
     * @name CreateDepartmentAdminDepartmentPost
     * @summary Create Department
     * @request POST:/admin/department
     * @secure
     */
    createDepartmentAdminDepartmentPost: (
      data: CreateDepartment,
      params: RequestParams = {}
    ) =>
      this.request<DepartmentRepresentation, HTTPValidationError>({
        path: `/admin/department`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all departments
     *
     * @tags admin
     * @name GetAllDepartmentsAdminDepartmentGet
     * @summary Get All Departments
     * @request GET:/admin/department
     * @secure
     */
    getAllDepartmentsAdminDepartmentGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<DepartmentSearchOutput, HTTPValidationError>({
        path: `/admin/department`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a department
     *
     * @tags admin
     * @name UpdateDepartmentAdminDepartmentDepartmentIdPut
     * @summary Update Department
     * @request PUT:/admin/department/{department_id}
     * @secure
     */
    updateDepartmentAdminDepartmentDepartmentIdPut: (
      departmentId: string,
      data: CreateDepartment,
      params: RequestParams = {}
    ) =>
      this.request<DepartmentRepresentation, HTTPValidationError>({
        path: `/admin/department/${departmentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a department
     *
     * @tags admin
     * @name DeleteDepartmentAdminDepartmentDepartmentIdDelete
     * @summary Delete Department
     * @request DELETE:/admin/department/{department_id}
     * @secure
     */
    deleteDepartmentAdminDepartmentDepartmentIdDelete: (
      departmentId: string,
      params: RequestParams = {}
    ) =>
      this.request<any, HTTPValidationError>({
        path: `/admin/department/${departmentId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a department by ID
     *
     * @tags admin
     * @name GetDepartmentByIdAdminDepartmentDepartmentIdGet
     * @summary Get Department By Id
     * @request GET:/admin/department/{department_id}
     * @secure
     */
    getDepartmentByIdAdminDepartmentDepartmentIdGet: (
      departmentId: string,
      params: RequestParams = {}
    ) =>
      this.request<DepartmentRepresentation, HTTPValidationError>({
        path: `/admin/department/${departmentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name CreateFacultyAdminFacultyPost
     * @summary Create Faculty
     * @request POST:/admin/faculty
     * @secure
     */
    createFacultyAdminFacultyPost: (
      data: CreateFaculty,
      params: RequestParams = {}
    ) =>
      this.request<Faculty, HTTPValidationError>({
        path: `/admin/faculty`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name GetFacultiesAdminFacultyGet
     * @summary Get Faculties
     * @request GET:/admin/faculty
     * @secure
     */
    getFacultiesAdminFacultyGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Department Id */
        department_id?: string | null;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<FacultySearchOutput, HTTPValidationError>({
        path: `/admin/faculty`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name GetFacultyAdminFacultyFacultyIdGet
     * @summary Get Faculty
     * @request GET:/admin/faculty/{faculty_id}
     * @secure
     */
    getFacultyAdminFacultyFacultyIdGet: (
      facultyId: string,
      params: RequestParams = {}
    ) =>
      this.request<Faculty, HTTPValidationError>({
        path: `/admin/faculty/${facultyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name UpdateFacultyAdminFacultyFacultyIdPut
     * @summary Update Faculty
     * @request PUT:/admin/faculty/{faculty_id}
     * @secure
     */
    updateFacultyAdminFacultyFacultyIdPut: (
      facultyId: string,
      data: CreateFaculty,
      params: RequestParams = {}
    ) =>
      this.request<Faculty, HTTPValidationError>({
        path: `/admin/faculty/${facultyId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name DeleteFacultyAdminFacultyFacultyIdDelete
     * @summary Delete Faculty
     * @request DELETE:/admin/faculty/{faculty_id}
     * @secure
     */
    deleteFacultyAdminFacultyFacultyIdDelete: (
      facultyId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, HTTPValidationError>({
        path: `/admin/faculty/${facultyId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a list of groups found by the search parameters.
     *
     * @tags admin
     * @name GetGroupsAdminGroupGet
     * @summary Get Groups
     * @request GET:/admin/group
     * @secure
     */
    getGroupsAdminGroupGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Faculty Id */
        faculty_id?: string | null;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<GroupSearchOutput, HTTPValidationError>({
        path: `/admin/group`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new group.
     *
     * @tags admin
     * @name CreateGroupAdminGroupPost
     * @summary Create Group
     * @request POST:/admin/group
     * @secure
     */
    createGroupAdminGroupPost: (
      data: GroupCreate,
      params: RequestParams = {}
    ) =>
      this.request<Group, HTTPValidationError>({
        path: `/admin/group`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a group by its ID.
     *
     * @tags admin
     * @name GetGroupAdminGroupGroupIdGet
     * @summary Get Group
     * @request GET:/admin/group/{group_id}
     * @secure
     */
    getGroupAdminGroupGroupIdGet: (
      groupId: string,
      params: RequestParams = {}
    ) =>
      this.request<Group, HTTPValidationError>({
        path: `/admin/group/${groupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a group.
     *
     * @tags admin
     * @name UpdateGroupAdminGroupGroupIdPut
     * @summary Update Group
     * @request PUT:/admin/group/{group_id}
     * @secure
     */
    updateGroupAdminGroupGroupIdPut: (
      groupId: string,
      data: GroupCreate,
      params: RequestParams = {}
    ) =>
      this.request<Group, HTTPValidationError>({
        path: `/admin/group/${groupId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name DeleteGroupAdminGroupGroupIdDelete
     * @summary Delete Group
     * @request DELETE:/admin/group/{group_id}
     * @secure
     */
    deleteGroupAdminGroupGroupIdDelete: (
      groupId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, HTTPValidationError>({
        path: `/admin/group/${groupId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name CreateProjectAdminProjectPost
     * @summary Create Project
     * @request POST:/admin/project
     * @secure
     */
    createProjectAdminProjectPost: (
      data: CreateProject,
      params: RequestParams = {}
    ) =>
      this.request<ProjectRepresentation, HTTPValidationError>({
        path: `/admin/project`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name GetProjectAdminProjectProjectIdGet
     * @summary Get Project
     * @request GET:/admin/project/{project_id}
     * @secure
     */
    getProjectAdminProjectProjectIdGet: (
      projectId: string,
      params: RequestParams = {}
    ) =>
      this.request<ProjectRepresentationFull, HTTPValidationError>({
        path: `/admin/project/${projectId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name UpdateProjectAdminProjectProjectIdPut
     * @summary Update Project
     * @request PUT:/admin/project/{project_id}
     * @secure
     */
    updateProjectAdminProjectProjectIdPut: (
      projectId: string,
      data: CreateProject,
      params: RequestParams = {}
    ) =>
      this.request<ProjectRepresentationFull, HTTPValidationError>({
        path: `/admin/project/${projectId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name DeleteProjectAdminProjectProjectIdDelete
     * @summary Delete Project
     * @request DELETE:/admin/project/{project_id}
     * @secure
     */
    deleteProjectAdminProjectProjectIdDelete: (
      projectId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, HTTPValidationError>({
        path: `/admin/project/${projectId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name SearchProjectsAdminProjectsGet
     * @summary Search Projects
     * @request GET:/admin/projects
     * @secure
     */
    searchProjectsAdminProjectsGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Faculty Id */
        faculty_id?: string | null;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProjectSearchOutput, HTTPValidationError>({
        path: `/admin/projects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name AssignProjectAdminProjectProjectIdAssignPost
     * @summary Assign Project
     * @request POST:/admin/project/{project_id}/assign
     * @secure
     */
    assignProjectAdminProjectProjectIdAssignPost: (
      projectId: string,
      data: ProjectAssignBody,
      params: RequestParams = {}
    ) =>
      this.request<ProjectAssignOutput, HTTPValidationError>({
        path: `/admin/project/${projectId}/assign`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name CreateTaskAdminTaskPost
     * @summary Create Task
     * @request POST:/admin/task
     * @secure
     */
    createTaskAdminTaskPost: (data: CreateTask, params: RequestParams = {}) =>
      this.request<TaskRepresentation, HTTPValidationError>({
        path: `/admin/task`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name GetTaskAdminTaskTaskIdGet
     * @summary Get Task
     * @request GET:/admin/task/{task_id}
     * @secure
     */
    getTaskAdminTaskTaskIdGet: (taskId: string, params: RequestParams = {}) =>
      this.request<TaskRepresentation, HTTPValidationError>({
        path: `/admin/task/${taskId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name UpdateTaskAdminTaskTaskIdPut
     * @summary Update Task
     * @request PUT:/admin/task/{task_id}
     * @secure
     */
    updateTaskAdminTaskTaskIdPut: (
      taskId: string,
      data: CreateTask,
      params: RequestParams = {}
    ) =>
      this.request<TaskRepresentation, HTTPValidationError>({
        path: `/admin/task/${taskId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name DeleteTaskAdminTaskTaskIdDelete
     * @summary Delete Task
     * @request DELETE:/admin/task/{task_id}
     * @secure
     */
    deleteTaskAdminTaskTaskIdDelete: (
      taskId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, HTTPValidationError>({
        path: `/admin/task/${taskId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags admin
     * @name SearchTasksAdminTasksGet
     * @summary Search Tasks
     * @request GET:/admin/tasks
     * @secure
     */
    searchTasksAdminTasksGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Project Id */
        project_id?: string | null;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<TaskSearchOutput, HTTPValidationError>({
        path: `/admin/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all permissions.
     *
     * @tags admin
     * @name GetPermissionsAdminPermissionsGet
     * @summary Get Permissions
     * @request GET:/admin/permissions
     * @secure
     */
    getPermissionsAdminPermissionsGet: (params: RequestParams = {}) =>
      this.request<AccountPermission[], any>({
        path: `/admin/permissions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a permission.
     *
     * @tags admin
     * @name CreatePermissionAdminPermissionsPost
     * @summary Create Permission
     * @request POST:/admin/permissions
     * @secure
     */
    createPermissionAdminPermissionsPost: (
      data: CreatePermission,
      params: RequestParams = {}
    ) =>
      this.request<PermissionBase, HTTPValidationError>({
        path: `/admin/permissions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  account = {
    /**
     * @description Register a new account.
     *
     * @tags account
     * @name RegisterAccountAccountRegisterPost
     * @summary Register Account
     * @request POST:/account/register
     */
    registerAccountAccountRegisterPost: (
      data: RegisterAccount,
      params: RequestParams = {}
    ) =>
      this.request<
        RegisterAccountResponse,
        SamuraiErrorModel | HTTPValidationError
      >({
        path: `/account/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Confirm the registration email.
     *
     * @tags account
     * @name ConfirmEmailAccountConfirmEmailPost
     * @summary Confirm Email
     * @request POST:/account/confirm-email
     */
    confirmEmailAccountConfirmEmailPost: (
      data: ConfirmEmail,
      params: RequestParams = {}
    ) =>
      this.request<
        ConfirmEmailResponse,
        SamuraiErrorModel | HTTPValidationError
      >({
        path: `/account/confirm-email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name GetMeAccountMeGet
     * @summary Get Me
     * @request GET:/account/me
     * @secure
     */
    getMeAccountMeGet: (params: RequestParams = {}) =>
      this.request<VerboseAccountRepresentation, SamuraiErrorModel>({
        path: `/account/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows anyone with authorization to look for another user, for search you can provide: account_id, email or username. Match has to be exact, otherwise, the user will not be found. Only one result per search is returned.
     *
     * @tags account
     * @name SearchAccountsAccountSearchGet
     * @summary Search Accounts
     * @request GET:/account/search
     * @secure
     */
    searchAccountsAccountSearchGet: (
      query?: {
        /** Account Id */
        account_id?: string | null;
        /** Email */
        email?: string | null;
        /** Username */
        username?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        VerboseAccountRepresentation,
        SamuraiErrorModel | HTTPValidationError
      >({
        path: `/account/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  projects = {
    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name CreateCommentProjectsTasksTaskIdCommentPost
     * @summary Create Comment
     * @request POST:/projects/tasks/{task_id}/comment
     * @secure
     */
    createCommentProjectsTasksTaskIdCommentPost: (
      taskId: string,
      data: CreateComment,
      params: RequestParams = {}
    ) =>
      this.request<CommentRepresentation, HTTPValidationError>({
        path: `/projects/tasks/${taskId}/comment`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name GetCommentsProjectsTasksTaskIdCommentsGet
     * @summary Get Comments
     * @request GET:/projects/tasks/{task_id}/comments
     * @secure
     */
    getCommentsProjectsTasksTaskIdCommentsGet: (
      taskId: string,
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 25
         */
        page_size?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<CommentPaginatedResponse, HTTPValidationError>({
        path: `/projects/tasks/${taskId}/comments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name GetCommentProjectsCommentsCommentIdGet
     * @summary Get Comment
     * @request GET:/projects/comments/{comment_id}
     * @secure
     */
    getCommentProjectsCommentsCommentIdGet: (
      commentId: string,
      params: RequestParams = {}
    ) =>
      this.request<CommentRepresentation, HTTPValidationError>({
        path: `/projects/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name UpdateCommentProjectsCommentsCommentIdPut
     * @summary Update Comment
     * @request PUT:/projects/comments/{comment_id}
     * @secure
     */
    updateCommentProjectsCommentsCommentIdPut: (
      commentId: string,
      data: CreateComment,
      params: RequestParams = {}
    ) =>
      this.request<CommentRepresentation, HTTPValidationError>({
        path: `/projects/comments/${commentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name DeleteCommentProjectsCommentsCommentIdDelete
     * @summary Delete Comment
     * @request DELETE:/projects/comments/{comment_id}
     * @secure
     */
    deleteCommentProjectsCommentsCommentIdDelete: (
      commentId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, HTTPValidationError>({
        path: `/projects/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Get all available projects by specifying the search criteria.
     *
     * @tags teacher, overseer, projects, student
     * @name GetProjectsProjectsProjectsGet
     * @summary Get Projects
     * @request GET:/projects/projects
     * @secure
     */
    getProjectsProjectsProjectsGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Faculty Id */
        faculty_id?: string | null;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserProjectSearchOutput, HTTPValidationError>({
        path: `/projects/projects`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new project for the student.
     *
     * @tags teacher, overseer, projects
     * @name CreateProjectProjectsProjectsPost
     * @summary Create Project
     * @request POST:/projects/projects
     * @secure
     */
    createProjectProjectsProjectsPost: (
      data: CreateUserProject,
      params: RequestParams = {}
    ) =>
      this.request<UserProjectRepresentation, HTTPValidationError>({
        path: `/projects/projects`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all available projects linked to the student.
     *
     * @tags teacher, overseer, projects, student
     * @name GetCurrentProjectsProjectsProjectsCurrentGet
     * @summary Get Current Projects
     * @request GET:/projects/projects/current
     * @secure
     */
    getCurrentProjectsProjectsProjectsCurrentGet: (
      params: RequestParams = {}
    ) =>
      this.request<UserProjectRepresentation, any>({
        path: `/projects/projects/current`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific project (if it's linked to you).
     *
     * @tags teacher, overseer, projects, student
     * @name GetProjectProjectsProjectsProjectIdGet
     * @summary Get Project
     * @request GET:/projects/projects/{project_id}
     * @secure
     */
    getProjectProjectsProjectsProjectIdGet: (
      projectId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserProjectRepresentation, HTTPValidationError>({
        path: `/projects/projects/${projectId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name GetProjectTasksProjectsTasksProjectIdGet
     * @summary Get Project Tasks
     * @request GET:/projects/tasks/{project_id}
     * @secure
     */
    getProjectTasksProjectsTasksProjectIdGet: (
      projectId: string,
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<UserTaskSearchOutput, HTTPValidationError>({
        path: `/projects/tasks/${projectId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name GetTaskProjectsTaskTaskIdGet
     * @summary Get Task
     * @request GET:/projects/task/{task_id}
     * @secure
     */
    getTaskProjectsTaskTaskIdGet: (
      taskId: string,
      params: RequestParams = {}
    ) =>
      this.request<UserTaskRepresentation, HTTPValidationError>({
        path: `/projects/task/${taskId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects
     * @name UpdateTaskProjectsTaskTaskIdPut
     * @summary Update Task
     * @request PUT:/projects/task/{task_id}
     * @secure
     */
    updateTaskProjectsTaskTaskIdPut: (
      taskId: string,
      data: UserTaskCreate,
      params: RequestParams = {}
    ) =>
      this.request<UserTaskRepresentation, HTTPValidationError>({
        path: `/projects/task/${taskId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects
     * @name DeleteTaskProjectsTaskTaskIdDelete
     * @summary Delete Task
     * @request DELETE:/projects/task/{task_id}
     * @secure
     */
    deleteTaskProjectsTaskTaskIdDelete: (
      taskId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, HTTPValidationError>({
        path: `/projects/task/${taskId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects, student
     * @name UpdateTaskStatusProjectsTaskTaskIdStatusPut
     * @summary Update Task Status
     * @request PUT:/projects/task/{task_id}/status
     * @secure
     */
    updateTaskStatusProjectsTaskTaskIdStatusPut: (
      taskId: string,
      data: UserTaskStatusUpdateInput,
      params: RequestParams = {}
    ) =>
      this.request<UserTaskRepresentation, HTTPValidationError>({
        path: `/projects/task/${taskId}/status`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags teacher, overseer, projects
     * @name CreateTaskProjectsTaskPost
     * @summary Create Task
     * @request POST:/projects/task
     * @secure
     */
    createTaskProjectsTaskPost: (
      data: UserTaskCreate,
      params: RequestParams = {}
    ) =>
      this.request<UserTaskRepresentation, HTTPValidationError>({
        path: `/projects/task`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  communication = {
    /**
     * @description Create a chat with (or without) some users.
     *
     * @tags student, teacher, communication
     * @name CreateChatCommunicationChatPost
     * @summary Create Chat
     * @request POST:/communication/chat
     * @secure
     */
    createChatCommunicationChatPost: (
      data: ChatCreate,
      params: RequestParams = {}
    ) =>
      this.request<ChatRepresentation, HTTPValidationError>({
        path: `/communication/chat`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all chats that the user is a member of.
     *
     * @tags student, teacher, communication
     * @name GetChatsCommunicationChatGet
     * @summary Get Chats
     * @request GET:/communication/chat
     * @secure
     */
    getChatsCommunicationChatGet: (
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ChatsSearchResponse, HTTPValidationError>({
        path: `/communication/chat`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a chat by its ID. If the user is not a member of the chat, raise 404.
     *
     * @tags student, teacher, communication
     * @name GetChatCommunicationChatChatIdGet
     * @summary Get Chat
     * @request GET:/communication/chat/{chat_id}
     * @secure
     */
    getChatCommunicationChatChatIdGet: (
      chatId: string,
      params: RequestParams = {}
    ) =>
      this.request<ChatRepresentation, HTTPValidationError>({
        path: `/communication/chat/${chatId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a chat by its ID. If the user is not a member of the chat, raise 404.
     *
     * @tags student, teacher, communication
     * @name UpdateChatCommunicationChatChatIdPatch
     * @summary Update Chat
     * @request PATCH:/communication/chat/{chat_id}
     * @secure
     */
    updateChatCommunicationChatChatIdPatch: (
      chatId: string,
      data: ChatUpdate,
      params: RequestParams = {}
    ) =>
      this.request<ChatRepresentation, HTTPValidationError>({
        path: `/communication/chat/${chatId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all participants of a chat by its ID. If the user is not a member of the chat, raise 404.
     *
     * @tags student, teacher, communication
     * @name GetChatParticipantsCommunicationChatChatIdParticipantsGet
     * @summary Get Chat Participants
     * @request GET:/communication/chat/{chat_id}/participants
     * @secure
     */
    getChatParticipantsCommunicationChatChatIdParticipantsGet: (
      chatId: string,
      query?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /** Name */
        name?: string | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<ChatParticipantsResponse, HTTPValidationError>({
        path: `/communication/chat/${chatId}/participants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add a member to a chat by its ID. If the user is not a member of the chat, raise 404. Duplicates will be ignored, and if the user does not exist, it will be ignored.
     *
     * @tags student, teacher, communication
     * @name AddChatMemberCommunicationChatChatIdAddMemberPost
     * @summary Add Chat Member
     * @request POST:/communication/chat/{chat_id}/add_member
     * @secure
     */
    addChatMemberCommunicationChatChatIdAddMemberPost: (
      chatId: string,
      data: ChatAddMember,
      params: RequestParams = {}
    ) =>
      this.request<ChatRepresentation, HTTPValidationError>({
        path: `/communication/chat/${chatId}/add_member`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Leave a chat by its ID. If the user is not a member of the chat, raise 404.
     *
     * @tags student, teacher, communication
     * @name LeaveChatCommunicationChatChatIdLeavePost
     * @summary Leave Chat
     * @request POST:/communication/chat/{chat_id}/leave
     * @secure
     */
    leaveChatCommunicationChatChatIdLeavePost: (
      chatId: string,
      params: RequestParams = {}
    ) =>
      this.request<ChatLeaveResponse, HTTPValidationError>({
        path: `/communication/chat/${chatId}/leave`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get messages.
     *
     * @tags student, teacher, communication
     * @name GetMessagesCommunicationMessagesGet
     * @summary Get Messages
     * @request GET:/communication/messages
     * @secure
     */
    getMessagesCommunicationMessagesGet: (
      query: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @min 1
         * @default 10
         */
        page_size?: number;
        /**
         * Chat Id
         * @format uuid4
         */
        chat_id: string;
        /** Text */
        text?: string | null;
        /**
         * File Only
         * @default false
         */
        file_only?: boolean;
        /** Sent After */
        sent_after?: string | null;
        /** Sent Before */
        sent_before?: string | null;
        /**
         * Descending
         * @default true
         */
        descending?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<MessagesSearchResponse, HTTPValidationError>({
        path: `/communication/messages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a message.
     *
     * @tags student, teacher, communication
     * @name GetMessageCommunicationMessageMessageIdGet
     * @summary Get Message
     * @request GET:/communication/message/{message_id}
     * @secure
     */
    getMessageCommunicationMessageMessageIdGet: (
      messageId: string,
      params: RequestParams = {}
    ) =>
      this.request<MessageRepresentation, HTTPValidationError>({
        path: `/communication/message/${messageId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a message.
     *
     * @tags student, teacher, communication
     * @name UpdateMessageCommunicationMessageMessageIdPut
     * @summary Update Message
     * @request PUT:/communication/message/{message_id}
     * @secure
     */
    updateMessageCommunicationMessageMessageIdPut: (
      messageId: string,
      data: MessageUpdate,
      params: RequestParams = {}
    ) =>
      this.request<MessageRepresentation, HTTPValidationError>({
        path: `/communication/message/${messageId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get message seen by.
     *
     * @tags student, teacher, communication
     * @name GetMessageSeenByCommunicationMessageMessageIdSeenByGet
     * @summary Get Message Seen By
     * @request GET:/communication/message/{message_id}/seen_by
     * @secure
     */
    getMessageSeenByCommunicationMessageMessageIdSeenByGet: (
      messageId: string,
      params: RequestParams = {}
    ) =>
      this.request<MessageSeenByResponse, HTTPValidationError>({
        path: `/communication/message/${messageId}/seen_by`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a message.
     *
     * @tags student, teacher, communication
     * @name CreateMessageCommunicationMessagePost
     * @summary Create Message
     * @request POST:/communication/message
     * @secure
     */
    createMessageCommunicationMessagePost: (
      data: MessageCreate,
      params: RequestParams = {}
    ) =>
      this.request<MessageRepresentation, HTTPValidationError>({
        path: `/communication/message`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Mark message as seen.
     *
     * @tags student, teacher, communication
     * @name MarkMessageSeenCommunicationMessageMessageIdSeenPatch
     * @summary Mark Message Seen
     * @request PATCH:/communication/message/{message_id}/seen
     * @secure
     */
    markMessageSeenCommunicationMessageMessageIdSeenPatch: (
      messageId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, HTTPValidationError>({
        path: `/communication/message/${messageId}/seen`,
        method: "PATCH",
        secure: true,
        ...params,
      }),
  };
  common = {
    /**
     * @description Download a file by its ID.
     *
     * @tags common
     * @name GetFileCommonFileFileIdGet
     * @summary Get File
     * @request GET:/common/file/{file_id}
     * @secure
     */
    getFileCommonFileFileIdGet: (fileId: string, params: RequestParams = {}) =>
      this.request<any, ErrorSchema | HTTPValidationError>({
        path: `/common/file/${fileId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Upload a new file.
     *
     * @tags common
     * @name CreateFileCommonFilePost
     * @summary Create File
     * @request POST:/common/file
     * @secure
     */
    createFileCommonFilePost: (
      data: BodyCreateFileCommonFilePost,
      params: RequestParams = {}
    ) =>
      this.request<FileRepresentation, ErrorSchema | HTTPValidationError>({
        path: `/common/file`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),
  };
}
