export interface TaskType {
   id: string
   name: string
   completed: boolean
}

export interface DashboardTasksDetailsType {
   tasks_completed: number
   total_tasks: number
   latest_tasks: Array<TaskType>
}
