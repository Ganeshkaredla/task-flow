import { action, observable } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import { TaskType } from '../../types'

class TaskModel {
   @observable taskId!: string
   @observable taskName!: string
   @observable completed!: boolean
   constructor(task: TaskType) {
      this.init()
      if (task?.id) this.taskId = task.id
      if (task?.name) this.taskName = task.name
      if (task?.completed) this.completed = task.completed
   }

   @action.bound
   init(): void {
      this.taskId = uuidv4()
      this.taskName = ''
      this.completed = false
   }

   @action.bound
   setCompletionStatus(status: boolean): void {
      this.completed = status
   }

   @action.bound
   setTaskNameChange(value: string): void {
      this.taskName = value
   }
}
export default TaskModel
