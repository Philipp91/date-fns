import {format} from 'date-fns/es'

const result = format('2017-01-25T21:28:15.000Z', 'DD.MM.YYYY HH:mm:ss')
console.log(result === '25.01.2017 21:28:15')
