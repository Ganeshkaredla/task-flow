import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { History } from 'history'

import AuthStore from '../../../Authentication/stores/AuthStore'

import { Container } from './styledComponents'

interface Props {
   history: History
}

interface InjectedProps extends Props {
   authStore: AuthStore
}

@inject('authStore')
@observer
class TaskFlowDashboardRoute extends Component<Props> {
   getInjectedProps = () => this.props as InjectedProps

   getAuthStore = () => this.getInjectedProps().authStore

   render() {
      return <Container>TaskFlowDashboardRoute</Container>
   }
}

export default TaskFlowDashboardRoute
