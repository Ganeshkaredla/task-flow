import React, { Component } from 'react'
import TaskModel from '../../stores/models/TaskModel'
import TaskItem from '../TaskItem'

import {
   TasksListContainer,
   TasksListHeader,
   TasksHeading,
   SearchBoxWrapper,
   SearchBoxField,
   AddNewTaskButton,
   TasksHeadingItemsWrapper,
   TasksListWrapper
} from './styledComponents'

interface Props {
   handleAddTaskButton: Function
   tasksList: Array<TaskModel>
}

class TasksList extends Component<Props> {
   renderTasksList = () => {
      const { tasksList } = this.props
      return (
         <TasksListWrapper>
            {tasksList.map(task => (
               <TaskItem key={task.taskId} taskDetails={task} />
            ))}
         </TasksListWrapper>
      )
   }

   render() {
      const { handleAddTaskButton } = this.props
      return (
         <TasksListContainer>
            <TasksListHeader>
               <TasksHeading>Tasks</TasksHeading>
               <TasksHeadingItemsWrapper>
                  <SearchBoxWrapper>
                     <SearchBoxField placeholder={'Search By Task Name'} />
                  </SearchBoxWrapper>
                  <AddNewTaskButton
                     text={'+ New Task'}
                     onClick={handleAddTaskButton}
                  />
               </TasksHeadingItemsWrapper>
            </TasksListHeader>
            {this.renderTasksList()}
         </TasksListContainer>
      )
   }
}

export default TasksList
