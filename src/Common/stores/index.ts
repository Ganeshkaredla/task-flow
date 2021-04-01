import AuthStore from '../../Authentication/stores/AuthStore'
import TasksStore from '../../Taskflow/stores/TasksStore'

export const isFixtures = true //NOTE: Here isFixtures flag is used to run whole app in fixtures or with APIs

const authStore = new AuthStore()

const tasksStore = new TasksStore()
export default { authStore, tasksStore }
