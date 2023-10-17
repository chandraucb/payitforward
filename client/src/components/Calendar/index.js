import { Scheduler } from "@aldabil/react-scheduler";
export default function Calendar () {
  return (
    <Scheduler
      view='month'
      selectDate
      events={[
        {
          event_id: 1,
          title: 'Event 1',
          start: new Date('2023/10/23 09:30'),
          end: new Date('2023/10/23 10:30')
        },
        {
          event_id: 2,
          title: 'Event 2',
          start: new Date('2023/10/24 10:00'),
          end: new Date('2023/10/24 11:00')
        },
        {
          event_id: 3,
          title: 'Event 3',
          start: new Date('2023/10/25 11:00'),
          end: new Date('2023/10/25 12:00'),
        },
        {
          event_id: 4,
          title: 'Event 4',
          start: new Date('2023/10/26 11:00'),
          end: new Date('2023/10/26 12:00'),
        },
        {
          event_id: 5,
          title: 'Event 5',
          start: new Date('2023/10/27 11:00'),
          end: new Date('2023/10/27 12:00')
        },
        {
          event_id: 6,
          title: 'Event 6',
          start: new Date('2023/10/28 11:00'),
          end: new Date('2023/10/28 12:00')
        },
        {
          event_id: 7,
          title: 'Event 7',
          start: new Date('2023/10/29 11:00'),
          end: new Date('2023/10/29 12:00')
        },
        {
          event_id: 8,
          title: 'Event 8',
          start: new Date('2023/10/30 11:00'),
          end: new Date('2023/10/30 12:00')
        },
        {
          event_id: 9,
          title: 'Event 9',
          start: new Date('2023/10/31 11:00'),
          end: new Date('2023/10/31 12:00')
        },
        {
          event_id: 10,
          title: 'Event 10',
          start: new Date('2023/11/1 11:00'),
          end: new Date('2023/11/1 12:00')
        },
        {
          event_id: 11,
          title: 'Event 11',
          start: new Date('2023/11/3 11:00'),
          end: new Date('2023/11/3 12:00')
        },
        {
          event_id: 12,
          title: 'Event 12',
          start: new Date('2023/12/4 11:00'),
          end: new Date('2023/12/4 12:00')
        }
      ]}
    />
  )
}
