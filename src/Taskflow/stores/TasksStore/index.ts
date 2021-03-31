import { observable, action, computed } from 'mobx'
import { v4 as uuidv4 } from 'uuid'

import {
   apiMethods,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '../../../Common/constants/APIConstants'
import Config from '../../../Common/constants/EnvironmentConstants'
import {
   fetchData,
   getFetchOptionsWithAuth
} from '../../../Common/utils/APIUtils'

import mockDashboardDetails from '../../fixtures/dashboardDetails.json'
import mockAllTasksDetails from '../../fixtures/allTasks.json'

import { endPoints } from '../endPoints'
import TaskModel from '../models/TaskModel'
import { DashboardTasksDetailsType, TaskType } from '../types'
class TasksStore {
   @observable latestTasks!: Array<TaskModel>
   @observable dashboardTasksAPIStatus!: number
   @observable dashboardTasksAPIError!: Error | null

   @observable allTasksAPIStatus!: number
   @observable allTasksAPIError!: Error | null
   @observable tasksList!: Array<TaskModel>

   @observable createTaskAPIStatus!: number
   @observable createTaskAPIError!: Error | null

   @observable deleteTaskAPIStatus!: number
   @observable deleteTaskAPIError!: Error | null

   @observable updateTaskAPIStatus!: number
   @observable updateTaskAPIError!: Error | null

   @observable searchValue!: string
   constructor() {
      this.init()
   }

   @action.bound
   init(): void {
      this.latestTasks = []
      this.tasksList = []
      this.searchValue = ''
      this.dashboardTasksAPIStatus = API_INITIAL
      this.dashboardTasksAPIError = null

      this.allTasksAPIStatus = API_INITIAL
      this.allTasksAPIError = null

      this.createTaskAPIStatus = API_INITIAL
      this.createTaskAPIError = null

      this.deleteTaskAPIStatus = API_INITIAL
      this.deleteTaskAPIError = null

      this.updateTaskAPIStatus = API_INITIAL
      this.updateTaskAPIError = null
   }

   @action.bound
   setDashboardTasksAPIStatus(apiStatus: number): void {
      this.dashboardTasksAPIStatus = apiStatus
   }

   @action.bound
   setDashboardTasksAPIError(error): void {
      this.dashboardTasksAPIError = error
   }

   @action.bound
   setDashboardTasksAPIResponse(response: DashboardTasksDetailsType): void {
      this.latestTasks = response.latest_tasks.map(
         eachTask => new TaskModel(eachTask)
      )
   }

   @action.bound
   async getDashboardTasksAPI(
      onSuccess: Function = () => {},
      onFailure: Function = () => {}
   ) {
      const options = getFetchOptionsWithAuth({}, apiMethods.post)
      const url = `${Config.BASE_URL}${endPoints.dashboard}`
      this.setDashboardTasksAPIStatus(API_FETCHING)
      await fetchData(
         url,
         options,
         mockDashboardDetails,
         response => {
            this.setDashboardTasksAPIResponse(response)
            this.setDashboardTasksAPIStatus(API_SUCCESS)
            onSuccess()
         },
         error => {
            this.setDashboardTasksAPIError(error)
            this.setDashboardTasksAPIStatus(API_FAILED)
            onFailure()
         }
      )
   }

   @action.bound
   setAllTasksAPIStatus(apiStatus: number): void {
      this.allTasksAPIStatus = apiStatus
   }

   @action.bound
   setAllTasksAPIError(error): void {
      this.allTasksAPIError = error
   }

   @action.bound
   setAllTasksAPIResponse(response: Array<TaskType>): void {
      this.tasksList = response.map(eachTask => new TaskModel(eachTask))
   }

   @action.bound
   async getAllTasksAPI(
      onSuccess: Function = () => {},
      onFailure: Function = () => {}
   ) {
      const options = getFetchOptionsWithAuth({}, apiMethods.get)
      const url = `${Config.BASE_URL}${endPoints.dashboard}`
      await fetchData(
         url,
         options,
         mockAllTasksDetails,
         response => {
            this.setAllTasksAPIResponse(response)
            this.setAllTasksAPIStatus(API_SUCCESS)
            onSuccess()
         },
         error => {
            this.setAllTasksAPIError(error)
            this.setAllTasksAPIStatus(API_FAILED)
            onFailure()
         }
      )
   }

   @action.bound
   setCreateTaskAPIStatus(apiStatus): void {
      this.createTaskAPIStatus = apiStatus
   }

   @action.bound
   setCreateTaskAPIError(error): void {
      this.createTaskAPIError = error
   }

   @action.bound
   setCreateTaskResponse(task: TaskType): void {
      this.tasksList.unshift(new TaskModel(task))
   }

   @action.bound
   async createTaskAPI(
      taskName: string,
      onSuccess: Function = () => {},
      onFailure: Function = () => {}
   ) {
      const requestObject = {
         name: taskName
      }
      const options = getFetchOptionsWithAuth(requestObject, apiMethods.post)
      const url = `${Config.BASE_URL}${endPoints.tasks}`
      const mockResponse = {
         id: uuidv4(),
         name: taskName,
         completed: false
      }
      this.setCreateTaskAPIStatus(API_FETCHING)
      await fetchData(
         url,
         options,
         mockResponse,
         response => {
            this.setCreateTaskResponse(response)
            this.setCreateTaskAPIStatus(API_SUCCESS)
            onSuccess()
         },
         error => {
            this.setCreateTaskAPIError(error)
            this.setCreateTaskAPIStatus(API_FAILED)
            onFailure()
         }
      )
   }

   @action.bound
   setDeleteTaskAPIStatus(apiStatus): void {
      this.deleteTaskAPIStatus = apiStatus
   }

   @action.bound
   setDeleteTaskAPIError(error): void {
      this.deleteTaskAPIError = error
   }

   @action.bound
   setDeleteTaskAPIResponse(response: TaskType): void {
      const tasksListAfterTaskDeleted = this.tasksList.filter(
         task => task.taskId !== response.id
      )
      this.tasksList = tasksListAfterTaskDeleted
   }

   @action.bound
   async deleteTaskAPI(
      taskId: string,
      onSuccess: Function = () => {},
      onFailure: Function = () => {}
   ) {
      const options = getFetchOptionsWithAuth({}, apiMethods.get)
      const url = `${Config.BASE_URL}${endPoints.tasks}/${taskId}`

      const mockResponseObject = this.getTaskBasedOnTaskId(taskId) ?? {}

      this.setDeleteTaskAPIStatus(API_FETCHING)
      await fetchData(
         url,
         options,
         mockResponseObject,
         response => {
            this.setDeleteTaskAPIResponse(response)
            this.setDeleteTaskAPIStatus(API_SUCCESS)
            onSuccess()
         },
         error => {
            this.setDeleteTaskAPIError(error)
            this.setDeleteTaskAPIStatus(API_FAILED)
            onFailure()
         }
      )
   }

   @action.bound
   setUpdateTaskAPIStatus(apiStatus): void {
      this.updateTaskAPIStatus = apiStatus
   }

   @action.bound
   setUpdateTaskAPIError(error): void {
      this.updateTaskAPIError = error
   }

   @action.bound
   async updateTaskAPI(
      taskId: string,
      onSuccess: Function = () => {},
      onFailure: Function = () => {}
   ) {
      const options = getFetchOptionsWithAuth({}, apiMethods.put)
      const url = `${Config.BASE_URL}${endPoints.tasks}/${taskId}`

      const mockResponseObject = this.getTaskBasedOnTaskId(taskId) ?? {}

      this.setUpdateTaskAPIStatus(API_FETCHING)
      await fetchData(
         url,
         options,
         mockResponseObject,
         response => {
            onSuccess(response)
            this.setUpdateTaskAPIStatus(API_SUCCESS)
         },
         error => {
            onFailure()
            this.setUpdateTaskAPIError(error)
            this.setUpdateTaskAPIStatus(API_FAILED)
         }
      )
   }

   @action.bound
   getTasksListWithSearchValue(searchValue = ''): Array<TaskModel> {
      if (searchValue.length > 0) {
         const filteredTasksList = this.tasksList.filter(eachTask => {
            const taskName = eachTask.taskName.toLowerCase()
            return taskName.includes(searchValue)
         })
         return filteredTasksList
      }
      return this.tasksList
   }

   @action.bound
   getTaskBasedOnTaskId(taskId: string) {
      const task = this.tasksList.find(task => task.taskId === taskId)
      const mockTaskObject = {
         id: task?.taskId,
         name: task?.taskName,
         completed: task?.completed
      }
      return mockTaskObject
   }

   @action.bound
   setSearchValue(value): void {
      this.searchValue = value
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @computed
   get isTasksAvailable(): boolean {
      return this.tasksList.length > 0
   }

   @computed
   get latestCreatedTasks(): Array<TaskModel> {
      return this.tasksList.slice(0, 3)
   }

   @computed
   get totalTasks(): number {
      return this.tasksList.length
   }

   @computed
   get tasksCompleted(): number {
      const completedTasks = this.tasksList.filter(
         eachTask => eachTask.completed === true
      )
      return completedTasks.length
   }

   @computed
   get tasksCompletionPercentage(): number {
      return (this.tasksCompleted / this.totalTasks) * 100
   }

   @computed
   get tasksListWithSearchValue(): Array<TaskModel> {
      if (this.searchValue.length > 0) {
         const filteredTasksList = this.tasksList.filter(eachTask => {
            const taskName = eachTask.taskName.toLowerCase()
            return taskName.includes(this.searchValue)
         })
         return filteredTasksList
      }
      return this.tasksList
   }
}

export default TasksStore
