import { Scheduler } from '@aldabil/react-scheduler'
export default function Calendar ({ events }) {
  return <Scheduler view='month' selectDate events={events} />
}
