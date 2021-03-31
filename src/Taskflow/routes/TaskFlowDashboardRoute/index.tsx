import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { History } from 'history'

import AuthStore from '../../../Authentication/stores/AuthStore'

import Header from '../../../Common/components/Header'
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure'
import TasksStore from '../../stores/TasksStore'
import { navigateToLoginPage } from '../../../Common/utils/NavigationUtils'
import TasksOverviewDetails from '../../components/TasksOverviewDetails'
import NoTasksCard from '../../components/NoTasksCard'
import CreateNewTaskCard from '../../components/CreateNewTaskCard'
import BaseModalContainer from '../../../Common/components/BaseModalContainer'
import { showSuccessBottomCenterToast } from '../../../Common/utils/ToastUtils'
import {
   Container,
   NoTasksCardWrapper,
   TasksDetailsWrapper
} from './styledComponents'
import './styles.scss'
import TasksList from '../../components/TasksList'

interface Props {
   history: History
}

interface InjectedProps extends Props {
   authStore: AuthStore
   tasksStore: TasksStore
}

@inject('authStore', 'tasksStore')
@observer
class TaskFlowDashboardRoute extends Component<Props> {
   @observable isAddTaskModalOpen!: boolean

   constructor(props) {
      super(props)
      this.isAddTaskModalOpen = false
   }

   componentDidMount(): void {
      this.doNetworkCalls()
   }

   componentWillUnmount(): void {
      const { clearStore } = this.getTasksStore()
      clearStore()
   }

   doNetworkCalls = (): void => {
      const { getDashboardTasksAPI, getAllTasksAPI } = this.getTasksStore()
      getDashboardTasksAPI()
      getAllTasksAPI()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthStore = () => this.getInjectedProps().authStore

   getTasksStore = () => this.getInjectedProps().tasksStore

   handleLogout = (): void => {
      const { history } = this.props
      const { clearStore } = this.getAuthStore()
      clearStore()
      navigateToLoginPage(history)
   }

   renderTasksOverviewDetails = (): React.ReactNode => (
      <TasksOverviewDetails tasksStore={this.getTasksStore()} />
   )

   renderTasksList = (): React.ReactNode => (
      <TasksList
         tasksStore={this.getTasksStore()}
         handleAddTaskButton={this.handleAddTaskModal}
      />
   )

   renderTasksDetails = (): React.ReactNode => (
      <>
         {this.renderTasksOverviewDetails()}
         {this.renderTasksList()}
      </>
   )

   handleAddTaskModal = (): void => {
      this.isAddTaskModalOpen = !this.isAddTaskModalOpen
   }

   onTaskCreateSuccess = () => {
      this.handleAddTaskModal()
      showSuccessBottomCenterToast(`Task Created Successfully`)
   }

   handleAddTask = (taskName: string) => {
      const { createTaskAPI } = this.getTasksStore()
      createTaskAPI(taskName, this.onTaskCreateSuccess)
   }

   renderCreateTaskCard = () => {
      const { createTaskAPIStatus } = this.getTasksStore()
      return (
         <div className={'createTask'}>
            <BaseModalContainer
               isOpen={this.isAddTaskModalOpen}
               hideCloseIcon={false}
               handleClose={this.handleAddTaskModal}
            >
               <CreateNewTaskCard
                  handleAddTaskButton={this.handleAddTask}
                  createTaskAPIStatus={createTaskAPIStatus}
               />
            </BaseModalContainer>
         </div>
      )
   }

   renderNoTasksView = (): React.ReactNode => (
      <NoTasksCardWrapper>
         <NoTasksCard handleAddTaskModel={this.handleAddTaskModal} />
      </NoTasksCardWrapper>
   )

   renderSuccessUI = observer((): any => {
      const { isTasksAvailable } = this.getTasksStore()
      return (
         <TasksDetailsWrapper>
            {isTasksAvailable
               ? this.renderTasksDetails()
               : this.renderNoTasksView()}
            {this.renderCreateTaskCard()}
         </TasksDetailsWrapper>
      )
   })

   render() {
      const { userProfile } = this.getAuthStore()
      const {
         dashboardTasksAPIStatus,
         dashboardTasksAPIError
      } = this.getTasksStore()
      return (
         <Container>
            <Header
               userProfile={userProfile}
               handleLogout={this.handleLogout}
            />
            <LoadingWrapperWithFailure
               apiStatus={dashboardTasksAPIStatus}
               apiError={dashboardTasksAPIError}
               onRetryClick={this.doNetworkCalls}
               renderSuccessUI={this.renderSuccessUI}
            />
         </Container>
      )
   }
}

export default TaskFlowDashboardRoute
