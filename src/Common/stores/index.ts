import AuthStore from '../../Authentication/stores/AuthStore'
import TasksStore from '../../Taskflow/stores/TasksStore'

export const isFixtures = true

const authStore = new AuthStore()

const tasksStore = new TasksStore()
export default { authStore, tasksStore }
