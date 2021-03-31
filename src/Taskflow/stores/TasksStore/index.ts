import { observable, action, computed } from 'mobx'
import { getAccessToken } from '../../../Authentication/utils/StorageUtils'
import {
   apiMethods,
   API_FAILED,
   API_FETCHING,
   API_SUCCESS
} from '../../../Common/constants/APIConstants'
import Config from '../../../Common/constants/EnvironmentConstants'
import { fetchData } from '../../../Common/utils/APIUtils'
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
   init() {
      this.latestTasks = []
      this.tasksList = []
      this.searchValue = ''
   }

   @action.bound
   setDashboardTasksAPIStatus(apiStatus: number): void {
      this.dashboardTasksAPIStatus = apiStatus
   }

   @action.bound
   setDashboardTasksAPIError(error): void {
      this.setDashboardTasksAPIError = error
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
      const options = {
         method: apiMethods.get,
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
         },
         body: JSON.stringify({})
      }
      const url = `${Config.BASE_URL}${endPoints.dashboard}`
      this.setDashboardTasksAPIStatus(API_FETCHING)
      await fetchData(
         url,
         options,
         mockDashboardDetails,
         response => {
            this.setDashboardTasksAPIStatus(API_SUCCESS)
            this.setDashboardTasksAPIResponse(response)
            onSuccess()
         },
         error => {
            this.setDashboardTasksAPIStatus(API_FAILED)
            this.setDashboardTasksAPIError(error)
            onFailure()
         }
      )
   }

   @action.bound
   setAllTasksAPIStatus(apiStatus: number): void {
      this.dashboardTasksAPIStatus = apiStatus
   }

   @action.bound
   setAllTasksAPIError(error): void {
      this.setDashboardTasksAPIError = error
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
      const options = {
         method: apiMethods.get,
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
         },
         body: JSON.stringify({})
      }
      const url = `${Config.BASE_URL}${endPoints.dashboard}`
      await fetchData(
         url,
         options,
         mockAllTasksDetails,
         response => {
            this.setAllTasksAPIStatus(API_SUCCESS)
            this.setAllTasksAPIResponse(response)
            onSuccess()
         },
         error => {
            this.setDashboardTasksAPIStatus(API_FAILED)
            this.setDashboardTasksAPIError(error)
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
      const options = {
         method: apiMethods.get,
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
         },
         body: JSON.stringify(requestObject)
      }
      const url = `${Config.BASE_URL}${endPoints.tasks}`
      const mockResponse = {
         id: Math.random(),
         name: taskName,
         completed: false
      }
      this.setCreateTaskAPIStatus(API_FETCHING)
      await fetchData(
         url,
         options,
         mockResponse,
         response => {
            this.setCreateTaskAPIStatus(API_SUCCESS)
            this.setCreateTaskResponse(response)
            onSuccess()
         },
         error => {
            this.setCreateTaskAPIStatus(API_FAILED)
            this.setCreateTaskAPIError(error)
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
   setDeleteTaskAPIResponse(response: TaskType) {
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
      const options = {
         method: apiMethods.get,
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${getAccessToken()}`
         },
         body: JSON.stringify({})
      }
      const url = `${Config.BASE_URL}${endPoints.tasks}/${taskId}`

      const mockResponseObject = this.getTaskBasedOnTaskId(taskId) ?? {}

      await fetchData(
         url,
         options,
         mockResponseObject,
         response => {
            this.setDeleteTaskAPIStatus(API_SUCCESS)
            this.setDeleteTaskAPIResponse(response)
            onSuccess()
         },
         error => {
            this.setDeleteTaskAPIStatus(API_FAILED)
            this.setDeleteTaskAPIError(error)
            onFailure()
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
   clearStore() {
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
