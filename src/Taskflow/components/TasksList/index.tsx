import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import {
   showFailureBottomCenterToast,
   showSuccessBottomCenterToast
} from '../../../Common/utils/ToastUtils'

import TasksStore from '../../stores/TasksStore'

import TaskItem from '../TaskItem'

import {
   TasksListContainer,
   TasksListHeader,
   TasksHeading,
   SearchBoxWrapper,
   SearchBoxField,
   AddNewTaskButton,
   TasksHeadingItemsWrapper,
   TasksListWrapper,
   TaskListItemWrapper,
   SearchIcon,
   NoTasksFoundText
} from './styledComponents'
import './styles.scss'

interface Props extends WithTranslation {
   handleAddTaskButton: Function
   tasksStore: TasksStore
}

@observer
class TasksList extends Component<Props> {
   @observable searchValue: string

   constructor(props) {
      super(props)
      this.searchValue = ''
   }

   handleSearchInput = (event): void => {
      const { tasksStore } = this.props
      tasksStore.setSearchValue(event.target.value.toLowerCase())
   }

   onDeleteSuccess = (): void => {
      const { t } = this.props
      showSuccessBottomCenterToast(`${t('taskflow.taskDeleteToastText')}`)
   }

   onDeleteFailure = (): void => {
      const { t } = this.props
      showFailureBottomCenterToast(`${t('common.errorViewTitle')}`)
   }

   handleDeleteTask = (taskId): void => {
      const { tasksStore } = this.props
      tasksStore.deleteTaskAPI(
         taskId,
         this.onDeleteSuccess,
         this.onDeleteFailure
      )
   }

   handleUpdateTask = (taskId): void => {
      const { tasksStore } = this.props
      tasksStore.updateTaskAPI(taskId)
   }

   renderTasksList = (): React.ReactNode => {
      const { t, tasksStore } = this.props
      const { tasksListWithSearchValue } = tasksStore
      if (tasksListWithSearchValue.length > 0) {
         return (
            <TasksListWrapper className={'tasksList'}>
               {tasksListWithSearchValue.map(task => (
                  <TaskListItemWrapper key={task.taskId}>
                     <TaskItem
                        taskDetails={task}
                        handleDeleteTask={this.handleDeleteTask}
                        handleUpdateTask={this.handleUpdateTask}
                     />
                  </TaskListItemWrapper>
               ))}
            </TasksListWrapper>
         )
      }
      return <NoTasksFoundText>{t('taskflow.noTasksFound')}</NoTasksFoundText>
   }

   renderTasksListHeader = (): React.ReactNode => {
      const { t, handleAddTaskButton } = this.props

      return (
         <TasksListHeader>
            <TasksHeading>{t('taskflow.tasks')}</TasksHeading>
            <TasksHeadingItemsWrapper>
               <SearchBoxWrapper>
                  <SearchIcon src={'/images/search-icon.png'} />
                  <SearchBoxField
                     data-testid={'search-box'}
                     placeholder={t('taskflow.searchBoxPlaceholder')}
                     onChange={this.handleSearchInput}
                  />
               </SearchBoxWrapper>
               <AddNewTaskButton
                  text={t('taskflow.addNewTask')}
                  onClick={handleAddTaskButton}
               />
            </TasksHeadingItemsWrapper>
         </TasksListHeader>
      )
   }

   render(): React.ReactNode {
      return (
         <TasksListContainer>
            {this.renderTasksListHeader()}
            {this.renderTasksList()}
         </TasksListContainer>
      )
   }
}

export default withTranslation()(TasksList)
