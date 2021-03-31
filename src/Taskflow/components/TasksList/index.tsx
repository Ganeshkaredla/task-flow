import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import TaskItem from '../TaskItem'
import './styles.scss'
import TasksStore from '../../stores/TasksStore'
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
   SearchIcon
} from './styledComponents'

interface Props {
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

   handleDeleteTask = (taskId): void => {
      const { tasksStore } = this.props
      tasksStore.deleteTaskAPI(taskId)
   }

   renderTasksList = (): React.ReactNode => {
      const { tasksStore } = this.props
      const { tasksListWithSearchValue } = tasksStore
      return (
         <TasksListWrapper className={'tasksList'}>
            {tasksListWithSearchValue.map(task => (
               <TaskListItemWrapper key={task.taskId}>
                  <TaskItem
                     taskDetails={task}
                     handleDeleteTask={this.handleDeleteTask}
                  />
               </TaskListItemWrapper>
            ))}
         </TasksListWrapper>
      )
   }

   renderTasksListHeader = () => {
      const { handleAddTaskButton } = this.props

      return (
         <TasksListHeader>
            <TasksHeading>Tasks</TasksHeading>
            <TasksHeadingItemsWrapper>
               <SearchBoxWrapper>
                  <SearchIcon src={'/images/search-icon.png'} />
                  <SearchBoxField
                     placeholder={'Search By Task Name'}
                     onChange={this.handleSearchInput}
                  />
               </SearchBoxWrapper>
               <AddNewTaskButton
                  text={'+ New Task'}
                  onClick={handleAddTaskButton}
               />
            </TasksHeadingItemsWrapper>
         </TasksListHeader>
      )
   }

   render() {
      return (
         <TasksListContainer>
            {this.renderTasksListHeader()}
            {this.renderTasksList()}
         </TasksListContainer>
      )
   }
}

export default TasksList
